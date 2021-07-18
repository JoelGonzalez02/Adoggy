import React, { useState } from 'react';
import './DogCards.css';
import TinderCard from 'react-tinder-card';
import SwipeButtons from './SwipeButtons';



function DogCards(props) {

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
  
  const nameFilter = (name) => {
      var str = name;
      if (str.length > 18) {
          str = str.substring(0, 15)
      }

      if (/\d/.test(str)) {
        return 'No name yet!'
      }
      return str
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
                                <h3>{nameFilter(dog.name)}</h3>
                                <h3>{`Age: ${dog.age}`}</h3>
                                <h3>{dog.gender}</h3>
                        </div>
                    <SwipeButtons url={dog.url}/> 
                    </TinderCard> 
                    
                ))}
              
            </div>
        </div>
    )
}

export default DogCards
