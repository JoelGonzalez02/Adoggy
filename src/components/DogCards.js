import React, { useState, useEffect, useContext } from 'react';
import './DogCards.css';
import { AuthContext } from '../App';
import TinderCard from 'react-tinder-card';
import SwipeButtons from './SwipeButtons';
// import { useHistory } from 'react-router-dom';

const key = 'p7rNFI2gUIoYHCWJMUUA5BAOoirnSfP30Dpny8c4ajQDtHPkyV';
const secret = 'qAj2b76OKxznkKYP8RNfgpjJZxu3Kts8irMRf3qy';
// const key = 'TzQe0DtZ8F1RkqwSU9LJlbZJVqZtmY5eGYXwXke4OeJWQyIRAD';
// const secret = 'SxgQl0TYNDgtpglpBPGGmugrWFsz27ebjFWJmEVV';





function DogCards(props) {

    // const history = useHistory();
    const [oldData, setOldData] = useState([]);
    const [counter, setCounter] = useState(0);
    // const [dogs, setDogs] = useState([]);

  

    // useEffect(() => {
    //     async function fetchData() {
    //         const req = await axios.get('https://adopts-backend.herokuapp.com/adopts/card')

    //         setDogs(req.data);
    //     }
    //     fetchData()
    // }, []);

    

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
    } 

    const outOfFrame = (name, id) => {
      console.log('update', props.curr)
      console.log(name + ' left the screen')
      
      props.curr.splice(0, 1);
      setCounter(counter + 1);
      console.log('Swipe-counter', counter);
      console.log('updated res', props.curr);

  }
  
  

    return (
        <div className='dog-cards'>
            <div className='dog-cards-container'>
        
              {  
                props.curr.slice(0, props.showAnimals).map((dog) => (
      
                    <TinderCard
                        className='swipe'
                        key={dog.id}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, dog.name)}
                        onCardLeftScreen={() => outOfFrame(dog.name)}
                    >
                        <div onDoubleClick={() => window.open(`${dog.url}`)}
                            style={{ backgroundImage: `url(${dog.photos[0].full})`, cursor: 'pointer'}}
                            className='card'>
                                <h3>{dog.name}</h3>
                                <h3>{`Age: ${dog.age}`}</h3>
                                <h3>{dog.gender}</h3>
                        </div>
                    </TinderCard> 
                ))}
            </div>
        </div>
    )
}

export default DogCards
