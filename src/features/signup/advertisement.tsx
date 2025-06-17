import React, { useState } from 'react';
import { deleteAdRequest, updateAdRequest, updateStatusAdRequest } from '../../features/advButton/slice';
import { useDispatch, useSelector } from 'react-redux';

import { EditAdModal } from '../../features/EditAdModal';
import { RootState } from '@/app/Store/store';
import { fetchSignAdv } from './slice';
import { AdvState } from '../../pages/mainPage/advSlice';

interface AdvertisementProps {
    advObj: AdvState;
}
const Advertisement: React.FC<AdvertisementProps> = ({ advObj }) => {
    const {
        eventId = 0,
        creatorName = "",
        title = "",
        description = "",
        eventDate = "",
        imageLink = "",
        maxParticipants = null,
        participantsCount = null
        // isModer = false,
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


    const ApprovedModal = ({
        ad,
        onClose
    }: {
        ad: AdvState;
        onClose: () => void
    }) => {
        const [approvedAd, setApprovedAd] = useState(ad)

        const Approved = () => {
            if (window.confirm('Удалить объявление?')) {
                dispatch(updateStatusAdRequest(approvedAd!));
            }
        }
    }

    const handleButtonClick = () => {
        const Advs = useSelector((state: RootState) => state.adv.data)
        const eventid = Advs.find((a: { title: string; }) => a.title === title)?.eventId

        if (eventid) { dispatch(fetchSignAdv(eventid)) }
    }

    return (
        <>
            <div
                className={
                    // isAdmin == false ? "ann-card-notModer" :
                    "ann-card"}
                onClick={() => setIsExpanded(true)}
            >
                <h3 className="ann-theme">{title} {creatorName} </h3>
                {imageLink && (
                    <div className="ann-image-container">
                        <img
                            src={imageLink}
                            alt={title}
                            className="ann-image"
                        />
                    </div>
                )}
                <p className="ann-description">{shortDescription}</p>
                <div className="ann-date">Дата: {eventDate}</div>
                <p>Участников:{participantsCount}/{maxParticipants}</p>
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
                        {imageLink && (
                            <div className="ann-expanded-image-container">
                                <img
                                    src={imageLink}
                                    alt={title}
                                    className="ann-expanded-image"
                                />
                            </div>
                        )}
                        <p className="ann-expanded-description">{description}</p>
                        <div className="ann-expanded-date">

                            <p>Дата проведения: {eventDate}</p>




                            <div className='subButtons'>
                                {(isAuthor && (
                                    <p className='actionButton' onClick={() => setIsEditModalOpen(true)}>
                                        Редактировать
                                    </p>
                                ))}
                                {(isAuthor || isAdmin) && (
                                    <p className='actionButton' onClick={handleDelete}>
                                        Удалить
                                    </p>
                                )}
                                {((isAdmin) && (
                                    <p className='actionButton' onClick={() => ApprovedModal}>
                                        Одобрить
                                    </p>
                                )
                                )}
                                {(!isAdmin && (
                                    <p className='actionButton' onClick={() => handleButtonClick}>
                                        Записаться
                                    </p>
                                )
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