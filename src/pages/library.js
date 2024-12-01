
import React from 'react';
import '../styles/library.css';
import Header from '../components/header'
import Footer from '../components/footer'

// Import each image and video explicitly
import thumbnail1 from '../images/image thumbnail 1.png';
import thumbnail2 from '../images/image thumbnail 2.png';
import thumbnail3 from '../images/image thumbnail 3.png';
import thumbnail4 from '../images/image thumbnail 4.png';
import thumbnail5 from '../images/image thumbnail 5.png';
import thumbnail6 from '../images/image thumbnail 6.png';

import video1 from '../videos/video 1.mp4';
import video2 from '../videos/video 2.mp4';
import video3 from '../videos/video 3.mp4';
import video4 from '../videos/video 4.mp4';
import video5 from '../videos/video 5.mp4';
import video6 from '../videos/video 6.mp4';

const videos = [
  {
    title: "Whether you are a founder or just an idea person?",
    link: video1,
    thumbnail: thumbnail1,
  },
  {
    title: "What is an IDEA?",
    link: video2,
    thumbnail: thumbnail2,
  },
  {
    title: "How to check whether the idea is good or not?",
    link: video3,
    thumbnail: thumbnail3,
  },
  {
    title: "What’s next? (Planning)",
    link: video4,
    thumbnail: thumbnail4,
  },
  {
    title: "Case studies and market report on that idea",
    link: video5,
    thumbnail: thumbnail5,
  },
  {
    title: "Making a Pitch",
    link: video6,
    thumbnail: thumbnail6,
  },
];

const Library = () => {
  return (
    <>
    <Header/>
    <div>
      <div className="library-header">
        <h2>
          Explore <span className="highlight">videos</span>, <span className="highlight">podcasts</span>, and <span className="highlight">essays</span> curated for startup founders.
        </h2>
        <p>
          Dive into the <a href="link-to-library" className="highlight-link">complete library</a> archive here.
        </p>
      </div>
      <div className="video-library">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <a href={video.link} target="_blank" rel="noopener noreferrer">
              <img src={video.thumbnail} alt={`Thumbnail for ${video.title}`} className="video-thumbnail" />
              <p className="video-title">{video.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Library;
/*import React from 'react';
import '../styles/library.css';

// Import each image and video explicitly
import thumbnail1 from '../images/image thumbnail 1.png';
import thumbnail2 from '../images/image thumbnail 2.png';
import thumbnail3 from '../images/image thumbnail 3.png';
import thumbnail4 from '../images/image thumbnail 4.png';
import thumbnail5 from '../images/image thumbnail 5.png';
import thumbnail6 from '../images/image thumbnail 6.png';

import video1 from '../videos/video 1.mp4';
import video2 from '../videos/video 2.mp4';
import video3 from '../videos/video 3.mp4';
import video4 from '../videos/video 4.mp4';
import video5 from '../videos/video 5.mp4';
import video6 from '../videos/video 6.mp4';

const videos = [
  {
    title: "Whether you are a founder or just an idea person?",
    link: video1,
    thumbnail: thumbnail1,
  },
  {
    title: "What is an IDEA?",
    link: video2,
    thumbnail: thumbnail2,
  },
  {
    title: "How to check whether the idea is good or not?",
    link: video3,
    thumbnail: thumbnail3,
  },
  {
    title: "What’s next? (Planning)",
    link: video4,
    thumbnail: thumbnail4,
  },
  {
    title: "Case studies and market report on that idea",
    link: video5,
    thumbnail: thumbnail5,
  },
  {
    title: "Making a Pitch",
    link: video6,
    thumbnail: thumbnail6,
  },
];

const Library = () => {
  return (
    <div className="video-library">
      {videos.map((video, index) => (
        <div key={index} className="video-card">
          <a href={video.link} target="_blank" rel="noopener noreferrer">
            <img src={video.thumbnail} alt={`Thumbnail for ${video.title}`} className="video-thumbnail" />
            <p className="video-title">{video.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Library;

*/