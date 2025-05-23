import React, { useState } from 'react';
import { AdvState, deleteAdRequest, updateAdRequest } from '../../features/advButton/slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Store/store';
import { EditAdModal } from '../../features/EditAdModal';

interface AdvertisementProps {
    advObj: AdvState;
}
const Advertisement: React.FC<AdvertisementProps> = ({ advObj }) => {
    const {
        creatorName = "",
        title = "",
        description = "",
        eventDate = "",
        imageBase64 = "",
        isModer = false,
    } = advObj;

    const [isExpanded, setIsExpanded] = useState(false);
    const shortDescription = description.length > 100 ? `${description.substring(0, 100)}...` : description;





    const dispatch = useDispatch();
    const currentUser = useSelector((state: RootState) => state.user);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const isAuthor = advObj.creatorName === currentUser.username;
    const isAdmin = currentUser.moderator;

    const handleDelete = () => {
        if (window.confirm('Удалить объявление?')) {
            dispatch(deleteAdRequest(advObj.title));
        }
    };



    return (
        <>
            <div
                className={isModer == false ? "ann-card-notModer" : "ann-card"}
                onClick={() => setIsExpanded(true)}
            >
                <h3 className="ann-theme">{title} {creatorName}</h3>
                {imageBase64 && (
                    <div className="ann-image-container">
                        <img
                            src={imageBase64}
                            alt={title}
                            className="ann-image"
                        />
                    </div>
                )}
                <p className="ann-description">{shortDescription}</p>
                <div className="ann-date">Дата: {eventDate}</div>
            </div>

            {isExpanded && (
                <div className="ann-overlay" onClick={() => setIsExpanded(false)}>
                    <div className="ann-expanded" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="ann-close-button"
                            onClick={() => setIsExpanded(false)}
                        >
                            &times;
                        </button>
                        <h2 className="ann-expanded-theme">{title}</h2>
                        {imageBase64 && (
                            <div className="ann-expanded-image-container">
                                <img
                                    src={imageBase64}
                                    alt={title}
                                    className="ann-expanded-image"
                                />
                            </div>
                        )}
                        <p className="ann-expanded-description">{description}</p>
                        <div className="ann-expanded-date">

                            <p>Дата проведения: {eventDate}</p>


                            <div className='subButtons'>
                                {isAuthor && (
                                    <p className='actionButton' onClick={() => setIsEditModalOpen(true)}>
                                        Редактировать
                                    </p>
                                )}
                                {(isAuthor || isAdmin) && (
                                    <p className='actionButton' onClick={handleDelete}>
                                        Удалить
                                    </p>
                                )}
                            </div>

                        </div>

                    </div>
                </div>
            )}

            {isEditModalOpen && (
                <EditAdModal
                    ad={advObj}
                    onClose={() => setIsEditModalOpen(false)}
                />
            )}
        </>
    );
};

export default Advertisement;