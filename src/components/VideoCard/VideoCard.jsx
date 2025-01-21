import React, { useContext } from 'react';
import VideoContext from '../../context/VideoContex';
import './VideoCard.css';

const VideoCard = ({ video }) => {
   const { deleteVideo, updateVideo } = useContext(VideoContext);

   const handleDelete = () => {
      if (window.confirm('¿Estás seguro de que deseas eliminar este video?')) {
         deleteVideo(video.id);
      }
   };

   const handleEdit = () => {
      // Aquí puedes implementar la funcionalidad de editar video
   };

   return (
      <div className="video-card" style={{ borderColor: video.color }}>
         <img src={video.imageUrl} alt={video.title} />
         <div className="video-info">
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <div className="actions">
               <button onClick={handleEdit}>Editar</button>
               <button onClick={handleDelete}>Eliminar</button>
            </div>
         </div>
      </div>
   );
};

export default VideoCard;