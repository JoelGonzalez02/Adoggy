import React, {useState, useEffect } from 'react';
import './DogCards.css';
import TinderCard from 'react-tinder-card';
// import axios from './axios';

import axios from 'axios';

function DogCards() {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('http://localhost:8001/adopts/card')

            setDogs(req.data);
        }
        fetchData()
    }, []);

    

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
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
                            style={{ backgroundImage: `url(${dog.imgUrl})`}}
                            className='card'>
                                <h3>{dog.name}</h3>
                                <h3>{`Age: ${dog.age}`}</h3>
                                <h3>{dog.location}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default DogCards
