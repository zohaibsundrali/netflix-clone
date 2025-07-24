import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { Link, useNavigate, useParams } from 'react-router-dom'
const Player = () => {
    const {id}=useParams();
     const navigate =useNavigate();
  const [apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    typeof:"",
  });

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWM3MDI0NDhmNTQ5ZTdhY2E5MjZhN2UzNTRmNjk1ZSIsIm5iZiI6MTc1MzI3MTgzMy42MjYsInN1YiI6IjY4ODBjZTE5MmQ5MDU1MjU2ZGQ5OWE0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MNWvtqL0cTIRdvTU9UGB7NAUhp8-MGaSr3yGyFwpFQQ'
  }
};

useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
},[])


  return (
    <div className='player'>
          <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
          <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width='90%' height='90%' title='trailer' frameborder="0" allowFullScreen></iframe>
          <div className="player-info">
            <p>{apiData.published_at.slice(0,10)}</p>
            <p>{apiData.name}</p>
            <p>{apiData.typeof}</p>
          </div>
    </div>
  )
}

export default Player