import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CardSummary = ()=>{
    const [card,setCard] = useState(null);
    useEffect(()=>{
        const cards = localStorage.getItem("card");
        setCard(JSON.parse(cards));
    },[])
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/ticket');
    }
    return(
        <div className="summary">
            <div className="summary-heading">
                <h1>{card&&card.show.name}</h1>
            </div>
            <div className="summary-img">
                <img src={card&&card.show.image.medium}/>
            </div>
        <div className="card-summary" dangerouslySetInnerHTML={{ __html: card&&card.show.summary }} >
          
        </div>
        <div className="ticket">
            <button className="button" onClick={()=> handleClick()}>Book A Ticket</button>
        </div>
        </div>
    );
}

export default CardSummary;