import React from 'react';
import BookDisplay from './bookDisplay';

const App = () => {
    const bookInfo = {
        image: 'https://th.bing.com/th/id/OIP.m3dSB_jJIuTfk5obG-eQggHaL0?w=125&h=200&c=7&r=0&o=5&pid=1.7',
        title: 'Book title',
        description: 'Book description',
        characters: ['Character #1', 'Character #2', 'Character #3'],
    };

    const printBookInfo = (title, characters) => {
        console.log(`Title: ${title}`);
        console.log('Characters:', characters.join(', '));
    };

    return (
        <div>
            <h1>Book Catalogue</h1>
            <BookDisplay 
                image={bookInfo.image} 
                title={bookInfo.title} 
                description={bookInfo.description} 
                characters={bookInfo.characters} 
                onButtonClick={printBookInfo} 
            />
        </div>
    );
};

export default App;