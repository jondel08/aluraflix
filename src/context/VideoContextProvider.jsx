import React, { useState } from 'react';
import VideoContext from './VideoContex';
import videosData from '../data/videos.json';

const VideoProvider = ({ children }) => {
   const [videos, setVideos] = useState(videosData);

   const addVideo = (video) => {
      setVideos([...videos, video]);
   };

   const updateVideo = (updatedVideo) => {
      setVideos(videos.map(video => video.id === updatedVideo.id ? updatedVideo : video));
   };

   const deleteVideo = (id) => {
      setVideos(videos.filter(video => video.id !== id));
   };

   return (
      <VideoContext.Provider value={{ videos, addVideo, updateVideo, deleteVideo }}>
         {children}
      </VideoContext.Provider>
   );
};

export default VideoProvider;