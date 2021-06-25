import React, {useState } from 'react';
import './DogCards.css';
import TinderCard from 'react-tinder-card';

function DogCards() {
    const [dogs, setDogs] = useState([
        {
        name: 'Snoop Dogg',
        url: "https://www.petguide.com/wp-content/uploads/2019/12/Miniature-Australian-Shepherd-668x446.jpg"
        },

        {
            name: 'Notorious D.O.G',
            url: 'https://cdn.shopify.com/s/files/1/0994/0236/articles/siberian-husky_2319x.jpg?v=1502391918'
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        // setLastDirection(direction);
    } 

    const outOfFrame = (name) => {
        console.log(name + ' left the screen');
    }

    return (
        <div className='dog-cards'>
            <div className='dog-cards-container'>
                {dogs.map((dog) => (
                    <TinderCard
                        className='swipe'
                        key={dog.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, dog.name)}
                        onCardLeftScreen={() => outOfFrame(dog.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${dog.url})`}}
                            className='card'>
                                <h3>{dog.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default DogCards
