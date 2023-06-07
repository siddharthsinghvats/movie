import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";

const Card = ({ props }) => {

  const navigate = useNavigate();
  const handleClick = (card) => {
    console.log(card,"now")
    localStorage.setItem("card",JSON.stringify(card));
    navigate("/summary");
  };
  return (
    <>
      <div className="home-card">
        <div className="card-image">
          <img src={props.show.image.medium} alt="" />
        </div>
        <div className="card-heading">
          <h3>{props.show.name}</h3>
        </div>
        <div className="card-details">
          <div className="card-lang-genre">
            <div className="lang">{props.show.language}</div>
            <div className="genre">
              {props.show.genres.map(
                (item, idx) =>
                  item + (idx == props.show.genres.length - 1 ? " " : ", ")
              )}
            </div>
          </div>
          <div className="start-end">
            <div className="start">Premier : {props.show.premiered}</div>
            <div className="ended">
              Finished : {!props.show.ended ? "NA" : String(props.show.ended)}
            </div>
          </div>
          <div className="action-btn">
            <button className="button">Details</button>

            <button className="button" onClick={() => handleClick(props)}>
              Summary
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
