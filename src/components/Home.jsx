import { useEffect, useState } from "react";
import Card from "./Card";
import { BrowserRouter as Router, Route, Link, Routes,} from "react-router-dom";
import CardSummary from "./CardSummary";
import Form from './Form'

const Home = () => {
  const [data, setData] = useState(null);
  const [loading,setLoading] = useState(true);
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const jsonData = await response.json();
        setData(jsonData);
        if(data){
            setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    console.log(data);
  },[loading]);
  return (
        <Router>
            <Routes>
            
        
      
           <Route path ="/" element = {<div className="card-container"> {data&&data.map((item)=>{return (<Card props ={item} />)})} </div>}/>
            <Route path="/summary" element={<CardSummary/>}/>
            <Route path="/ticket" element={<Form/>}/>
       
        </Routes>
        </Router>
        )
};


export default Home;
