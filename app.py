from flask import Flask, request, jsonify, session
from flask_cors import CORS
from validate_email_address import validate_email
import jwt
import os
import mysql.connector
from werkzeug.security import generate_password_hash, check_password_hash

# Database connection setup function (using context manager)
def get_db_connection():
    return mysql.connector.connect(
        host='localhost',
        user='root',
        password='Ch@it@ny@sql03',
        database='ekara'
    )

# Flask app initialization
app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'pvhSecretKey@123'
app.config['UPLOAD_FOLDER'] = 'uploads'

# Ensure upload folder exists
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

@app.after_request
def after_request(response):
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
    response.headers['Access-Control-Allow-Credentials'] = 'true'
    response.headers['Access-Control-Allow-Headers'] = 'Authorization, Content-Type'
    return response

def token_required(func):
    @wraps(func)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'Alert!': 'Token is missing!'}), 401
        try:
            token = token.split(' ')[-1]
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
            user_obj = User.query.get(data['user'])
            if user_obj is None:
                return jsonify({'Message': 'User does not exists'}), 403
            else:
                data['current_user'] = user_obj
        except jwt.ExpiredSignatureError:
            return jsonify({'Message': 'Token has expired'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'Message': 'Invalid token'}), 403
        return func(user_obj, *args, **kwargs)

    return decorated

# --- SIGNUP ROUTE ---
@app.route("/signup", methods=["POST"])
def signup():
    try:
        # Extracting data from request
        first_name = request.json.get('firstNm')
        last_name = request.json.get('LastNm')
        linkedin = request.json.get('linkedin')
        email = request.json.get('email')
        password = request.json.get('password')
        confirm_password = request.json.get('confirm_password')

        # Validations
        if not validate_email(email):
            return jsonify({"error": "Invalid email address"}), 400
        if password != confirm_password:
            return jsonify({"error": "Passwords do not match"}), 400

        # Hashing the password for security
        hashed_password = generate_password_hash(password)

        # Insert data into MySQL database
        query = """
        INSERT INTO Users (first_name, last_name, linkedin_profile, email, password_hash)
        VALUES (%s, %s, %s, %s, %s)
        """

        # Using context manager to manage DB connection and cursor
        with get_db_connection() as conn:
            with conn.cursor() as my_cursor:
                values = (first_name, last_name, linkedin, email, hashed_password)
                my_cursor.execute(query, values)
                conn.commit()

        return jsonify({"message": "User registered successfully!"}), 200

    except mysql.connector.Error as err:
        print("Database Error:", err)
        return jsonify({"error": "Database error occurred during signup"}), 500
    except Exception as e:
        print("Signup Error:", e)
        return jsonify({"error": "An error occurred during signup"}), 500


# --- LOGIN ROUTE ---
@app.route('/login', methods=['POST'])
def login():
    try:
        email = request.json.get('email')
        password = request.json.get('password')

        # Validate user credentials
        query = "SELECT first_name, email, password_hash FROM Users WHERE email = %s"
        
        # Using context manager to manage DB connection and cursor
        with get_db_connection() as conn:
            with conn.cursor() as my_cursor:
                my_cursor.execute(query, (email,))
                user = my_cursor.fetchone()

        if user and check_password_hash(user[2], password):  # Verify password hash
            # Generate JWT token
            token = jwt.encode({'email': user[1]}, app.config['SECRET_KEY'], algorithm='HS256')
            return jsonify({
                "message": "Login successful!",
                "token": token,
                "user": {"email": user[1], "firstNm": user[0]}
            }), 200
        else:
            return jsonify({"error": "Invalid email or password"}), 403

    except Exception as e:
        print("Login Error:", e)
        return jsonify({"error": "An error occurred during login"}), 500


# --- APPLY ROUTE ---
@app.route("/apply", methods=["POST"])
def apply():
    try:
        # Extract data from form
        email = request.form.get('email')
        linkedIn = request.form.get('linkedIn')
        phone_number = request.form.get('phoneNumber')
        education_background = request.form.get('educationBackground')
        experience = request.form.get('experience')
        # Extract files
        founder_video = request.files.get('founderVideo')
        demo_video = request.files.get('demoVideo')


        print("Email:", email)
        print("LinkedIn:", linkedIn)
        print("Phone Number:", phone_number)
        print("Education Background:", education_background)
        print("Experience:", experience)
        print("Founder Video:", founder_video)
        print("Demo Video:", demo_video)



        # Validate email
        if not validate_email(email):
            return jsonify({"error": "Invalid email address"}), 400

        
        # Save uploaded files
        founder_video_path = None
        demo_video_path = None
        if founder_video:
            founder_video_path = os.path.join(app.config['UPLOAD_FOLDER'], founder_video.filename)
            founder_video.save(founder_video_path)
        if demo_video:
            demo_video_path = os.path.join(app.config['UPLOAD_FOLDER'], demo_video.filename)
            demo_video.save(demo_video_path)

        # Store application in database
        query = """
        INSERT INTO Applications (email, linkedIn, phone_number, education_background, experience, founder_video, demo_video)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
        """
        
        # Using context manager to manage DB connection and cursor
        with get_db_connection() as conn:
            with conn.cursor() as my_cursor:
                values = (email, linkedIn, phone_number, education_background, experience, founder_video_path, demo_video_path)
                my_cursor.execute(query, values)
                conn.commit()

        return jsonify({"message": "Application submitted successfully!"}), 200

    except Exception as e:
        print("Application Error:", e)
        return jsonify({"error": "An error occurred during application submission"}), 500


if __name__ == '__main__':
    app.run(debug=True)
