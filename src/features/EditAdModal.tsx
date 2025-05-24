import React from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AdvState, updateAdRequest } from "./advButton/slice";



export const EditAdModal = ({
  ad,
  onClose
}: {
  ad: AdvState;
  onClose: () => void
}) => {
  const [editedAd, setEditedAd] = useState(ad);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateAdRequest(editedAd));
    onClose();
  };


  return (
    <div className="adv-overlay">
      <div className="adv-modal">
        <button onClick={onClose}>&times;</button>
        <h2>Редактировать объявление</h2>
        <form onSubmit={handleSubmit}>

          <input
            value={editedAd.title}
            onChange={(e) => setEditedAd({ ...editedAd, title: e.target.value })}
          />

          <input
            value={editedAd.description}
            onChange={(e) => setEditedAd({ ...editedAd, description: e.target.value })}
          />

          <input
            value={editedAd.eventDate}
            onChange={(e) => setEditedAd({ ...editedAd, eventDate: e.target.value })}
          />

          <input
            // value={editedAd.imageLink}
            onChange={(e) => setEditedAd({ ...editedAd, imageLink: e.target.value })}
          />


          <button type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  );
};

export default EditAdModal;