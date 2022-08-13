import React, { useEffect, useState } from "react";
import Tinder from 'react-tinder-card'
import "./TenderCard.css"
import axios from "axios"

function TenderCard() {

    const [people, setPeople] = useState([]);

    async function getAllCard(){
      const res = await axios.get("http://127.0.0.1:3000/tender/cards")
      setPeople(res.data)
    }
    
    useEffect(() => {
      getAllCard()
    },[])

    console.log(people);

  const swiped = (direction, nameToDelete) => {
    console.log('removing' + nameToDelete);
    //setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
  };


    return (
        <div className="tinderCards">
        <div className="tinderCards__cardContainer">
          { people.length === 0 ? 
          <h1 style={{color : "GrayText"}}>Loading...</h1> :
          people.map((person) => (
            <Tinder
              className="swipe"
              key={person.name}
              preventSwipe={['up', 'down']}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ backgroundImage: `url(${person.imgUrl})` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </Tinder>
          ))}
        </div>
      </div>
    )
}

export default TenderCard