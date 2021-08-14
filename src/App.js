import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DogCards from './components/DogCards';
import './App.css';


const key = 'p7rNFI2gUIoYHCWJMUUA5BAOoirnSfP30Dpny8c4ajQDtHPkyV';
const secret = 'qAj2b76OKxznkKYP8RNfgpjJZxu3Kts8irMRf3qy';

function App(props) {

  const [token, setToken] = useState(null);
  const [results, setResults] = useState([]);
  const [showAnimals, setShowAnimals] = useState(1);

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


  
  const showMoreAnimals = () => {
    setShowAnimals(showAnimals >= results.length ? showAnimals : showAnimals + 1)
  }


  useEffect(() => {
  
    if (token === null) {
        getToken();
    }

    const fetchPets = async () => {

      const petResults = await fetch(
        "https://api.petfinder.com/v2/animals?location=90023&limit=100",
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
       
      setResults(links);
      console.log('links', links)
      console.log('token', token)  
    };
  
  
    if (results.length === 0) {
      fetchPets();
    };

    console.log('res', results)
    
  }, [token, results]);
  if (results === null) return null;

  return (
      <div className="app">

        <Header />
        <DogCards results={results} curr={results} moreAnimals = {showMoreAnimals} showAnimals={showAnimals} setAnimals={setShowAnimals}/>
      </div>
    
    
  );
}

export default App;
