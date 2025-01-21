import React, { useContext } from 'react';
import VideoContext from '../../context/VideoContex';
import VideoCard from '../VideoCard/VideoCard';
import './VideoList.css';

const VideoList = () => {
   const { videos } = useContext(VideoContext);

   const groupedVideos = videos.reduce((acc, video) => {
      acc[video.category] = acc[video.category] || [];
      acc[video.category].push(video);
      return acc;
   }, {});

   return (
      <div className="video-list">
         {Object.keys(groupedVideos).map(category => (
            <div key={category} className="category-group">
               <h2>{category}</h2>
               <div className="videos">
                  {groupedVideos[category].map(video => (
                     <VideoCard key={video.id} video={video} />
                  ))}
               </div>
            </div>
         ))}
      </div>
   );
};

export default VideoList;