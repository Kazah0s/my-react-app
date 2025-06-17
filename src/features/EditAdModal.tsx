import React from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAdRequest } from "./advButton/slice";
import { AdvState } from '@/pages/mainPage/advSlice';



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

        <h2>Редактировать объявление</h2>
        <form onSubmit={handleSubmit}>
          <div className="adv-form-group">
            <input
              className="adv-input"
              value={editedAd.title}
              onChange={(e) => setEditedAd({ ...editedAd, title: e.target.value })}
            />
          </div>

          <div className="adv-form-group">
            <input
              className="adv-input"
              value={editedAd.description}
              onChange={(e) => setEditedAd({ ...editedAd, description: e.target.value })}
            />
          </div>

          <div className="adv-form-group">
            <input
              className="adv-input"
              value={editedAd.eventDate}
              onChange={(e) => setEditedAd({ ...editedAd, eventDate: e.target.value })}
            />
          </div>

          <div className="adv-form-group">
            <input
              className="adv-input"
              value={editedAd.imageLink}
              onChange={(e) => setEditedAd({ ...editedAd, imageLink: e.target.value })}
            />
          </div>

          <div className="adv-form-group">
            <input
              className="adv-input"
              value={editedAd.maxParticipants!}
              onChange={(e) => setEditedAd({ ...editedAd, maxParticipants: parseInt(e.target.value) })}
            />
          </div>


          <div className="adv-actions">
            <button
              type="button"
              className="adv-cancel-button"
              onClick={onClose}
            >
              Закрыть
            </button>
            <button
              type="submit"
              className="adv-submit-button"
            >
              Отредактировать
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAdModal;