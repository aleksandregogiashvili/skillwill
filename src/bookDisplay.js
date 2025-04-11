import React, { useState } from 'react';

const BookDisplay = ({ image, title, description, characters, onButtonClick }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
        onButtonClick(title, characters);
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '5px' }}>
            <img src={image} alt={title} style={{ width: '150px', height: '200px' }} />
            <h2>{title}</h2>
            <button onClick={handleClick}>{isVisible ? 'Hide Info' : 'Show Info'}</button>
            {isVisible && (
                <div>
                    <p>{description}</p>
                    <h4>Character list:</h4>
                    <ul>
                        {characters.map((character, index) => (
                            <li key={index}>{character}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default BookDisplay;