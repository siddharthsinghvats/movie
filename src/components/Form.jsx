import React, { useEffect, useState } from 'react';

const MovieForm = () => {
    const [card,setCard] = useState(null);
    useEffect(()=>{
        const cards = localStorage.getItem('card');
        setCard(JSON.parse(cards));
    },[])
  const [movieName, setMovieName] = useState(card&&card.show.name);
  const [numTickets, setNumTickets] = useState(0);
  const [location, setLocation] = useState('');
  const [seat, setSeat] = useState('');
  const [row, setRow] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setMovieName('');
    setNumTickets(0);
    setLocation('');
    setSeat('');
    setRow('');
  };

  return (
    <div className="form">
    <form onSubmit={handleSubmit}>
        <div className="inp">
      <label htmlFor="movieName">Movie Name:</label>
      <input
        type="text"
        id="movieName"
        value={card&&card.show.name}
        required
      />
      </div>
<div className="inp">
<label htmlFor="numTickets">Number of Tickets:</label>
      <input
        type="number"
        id="numTickets"
        value={numTickets}
        onChange={(e) => setNumTickets(parseInt(e.target.value, 10))}
        required
      />
</div>
      
<div className="inp"><label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      /></div>
      
<div className="inp">
<label htmlFor="seat">Seat:</label>
      <input
        type="text"
        id="seat"
        value={seat}
        onChange={(e) => setSeat(e.target.value)}
        required
      />
</div>
      
<div className="inp">
<label htmlFor="row">Row:</label>
      <input
        type="text"
        id="row"
        value={row}
        onChange={(e) => setRow(e.target.value)}
        required
      />
</div>
     

      <button className='button' type="submit">Book Now !</button>
    </form>
    </div>
  );
};

export default MovieForm;
