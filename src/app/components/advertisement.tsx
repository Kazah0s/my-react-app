import React, { useState } from 'react';
import { AdvState, deleteAdRequest, updateAdRequest, updateStatusAdRequest } from '../../features/advButton/slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Store/store';
import { EditAdModal } from '../../features/EditAdModal';

interface AdvertisementProps {
    advObj: AdvState;
}
const Advertisement: React.FC<AdvertisementProps> = ({ advObj }) => {
    const {
        eventId = "",
        creatorName = "",
        title = "",
        description = "",
        eventDate = "",
        imageLink = "",
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
        
        const Approved = () =>{
        if (window.confirm('Удалить объявление?')) {
            dispatch(updateStatusAdRequest(approvedAd));
        }
    }
}





    return (
        <>
            <div
                className={
                    // isModer == false ? "ann-card-notModer" : 
                    "ann-card"}
                onClick={() => setIsExpanded(true)}
            >
                <h3 className="ann-theme">{title} {creatorName}</h3>
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
                                { (
                                    <p className='actionButton' onClick={() => setIsEditModalOpen(true)}>
                                        Редактировать
                                    </p>
                                )}
                                {(isAuthor || isAdmin) && (
                                    <p className='actionButton' onClick={handleDelete}>
                                        Удалить
                                    </p>
                                )}
                                {(isAdmin && (
                                    <button className='actionButton' onClick={() => ApprovedModal}>
                                        appruvd
                                    </button>
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