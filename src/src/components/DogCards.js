import React, {useState, useEffect, useContext } from 'react';
import './DogCards.css';
import TinderCard from 'react-tinder-card';
import { AuthContext } from '../App';
import { useHistory } from 'react-router-dom';




const key = 'p7rNFI2gUIoYHCWJMUUA5BAOoirnSfP30Dpny8c4ajQDtHPkyV';
const secret = 'qAj2b76OKxznkKYP8RNfgpjJZxu3Kts8irMRf3qy';
// const key = 'TzQe0DtZ8F1RkqwSU9LJlbZJVqZtmY5eGYXwXke4OeJWQyIRAD';
// const secret = 'SxgQl0TYNDgtpglpBPGGmugrWFsz27ebjFWJmEVV';


  



function DogCards() {

    const history = useHistory();
 
    // const [dogs, setDogs] = useState([]);
    const [token, setToken] = useState(null);
    const [results, setResults] = useState([]);
    const [picURL, setPicURL] = useState([]);
  
//   const accessToken = useContext(AuthContext);





const getToken = async (req, res) => {


    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    params.append("client_id", key);
    params.append("client_secret", secret);
    const petfinderRes = await fetch(
      "https://api.petfinder.com/v2/oauth2/token",
      {
        method: "POST",
        body: params,
      }
    );
    const data = await petfinderRes.json();
    console.log('data', data.access_token)
    setToken(data.access_token);
  };



  useEffect(() => {
    
    if (token === null) {
        getToken();
    }


    const fetchPets = async () => {
      const petResults = await fetch(
        "https://api.petfinder.com/v2/animals?location=90023",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await petResults.json();
      const res = json.animals;
      const links = [];


        for (var i = 0; i < res.length; i ++) {
            if (res[i].photos && res[i].photos[0] && res[i].photos[0].full) {
                links.push(res[i])
            } 
        } 
            
      
      setResults(links)
      console.log('links', links)
      console.log('token', token)
      console.log('pics', picURL)
    };
    
    if (results.length === 0) {
        fetchPets();
    }
    console.log('res', results)
    
  }, [token]);
  if (results === null) return null;











//   Test dogs
    // useEffect(() => {
    //     async function fetchData() {
    //         const req = await axios.get('https://adopts-backend.herokuapp.com/adopts/card')

    //         setDogs(req.data);
    //     }
    //     fetchData()
    //     getToken()
    // }, []);


   

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
    } 

    const outOfFrame = (name) => {
        console.log('update', results)
        console.log(name + ' left the screen')
        results.splice(0, 1)
        console.log('updated res', results)
    }

   

  

    const getPicUrls = (id) => {
        for (var i = 0; i < results.length; i ++) {
            const ids = results[i].id

            if (id === ids) {
                return results.photos[0].full
            }
       }

      
      
    };


    return (
        <div className='dog-cards'>
            <div className='dog-cards-container'>
                {results.map((dog) => (
                    <TinderCard
                        className='swipe'
                        key={dog.id}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, dog.name)}
                        onCardLeftScreen={() => outOfFrame(dog.name)}
                    >
                        <div
                            
                            style={{ backgroundImage: `url(${dog.photos[0].full})`}}
                            className='card'>
                                {/* <img src={dog.photos[0].full} alt='no pic'/> */}
                                {/* <ImageComponent /> */}
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
