import React, { useState, useContext } from 'react';
import VideoContext from '../../context/VideoContex';
import './VideoForm.css';

const VideoForm = ({ video, onSave, onCancel }) => {
   const [formData, setFormData] = useState(video || {
      title: '',
      category: '',
      url: '',
      imageUrl: '',
      description: ''
   });

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      onSave(formData);
   };

   const handleReset = () => {
      setFormData({
         title: '',
         category: '',
         url: '',
         imageUrl: '',
         description: ''
      });
   };

   return (
      <form className="video-form" onSubmit={handleSubmit}>
         <label>
            Título:
            <input type="text" name="title" value={formData.title} onChange={handleChange} required />
         </label>
         <label>
            Categoría:
            <input type="text" name="category" value={formData.category} onChange={handleChange} required />
         </label>
         <label>
            URL del video:
            <input type="url" name="url" value={formData.url} onChange={handleChange} required />
         </label>
         <label>
            URL de la imagen:
            <input type="url" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
         </label>
         <label>
            Descripción:
            <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
         </label>
         <div className="buttons">
            <button type="submit">Guardar</button>
            <button type="button" onClick={handleReset}>Limpiar</button>
            <button type="button" onClick={onCancel}>Cancelar</button>
         </div>
      </form>
   );
};

export default VideoForm;