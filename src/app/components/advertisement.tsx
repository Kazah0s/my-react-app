import React, { useState } from 'react';

export interface AdvertisementProps {
    id: string;
    theme: string;
    description: string;
    date: string;
    imageUrl?: string;
}

const Advertisement: React.FC<AdvertisementProps> = ({
    theme = "Тема",
    description = "",
    date = "02.05.2005",
    imageUrl = "https://purr.objects-us-east-1.dream.io/i/8M3AW.jpg"
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const shortDescription = description.length > 100 ? `${description.substring(0, 100)}...` : description;

    return (
        <>
            <div
                className="ann-card"
                onClick={() => setIsExpanded(true)}
            >
                <h3 className="ann-theme">{theme}</h3>
                {imageUrl && (
                    <div className="ann-image-container">
                        <img
                            src={imageUrl}
                            alt={theme}
                            className="ann-image"
                        />
                    </div>
                )}
                <p className="ann-description">{shortDescription}</p>
                <div className="ann-date">Дата: {date}</div>
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
                        <h2 className="ann-expanded-theme">{theme}</h2>
                        {imageUrl && (
                            <div className="ann-expanded-image-container">
                                <img
                                    src={imageUrl}
                                    alt={theme}
                                    className="ann-expanded-image"
                                />
                            </div>
                        )}
                        <p className="ann-expanded-description">{description}</p>
                        <div className="ann-expanded-date">Дата проведения: {date}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Advertisement;