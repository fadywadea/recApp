// import { Component } from "react";



// export default class Home extends Component {
//   state = {
//     user: 'Fady Wadea',
//     greeting: "How Are You?",
//     darkStyle: "bg-dark text-white text-center "
//   }
//   welcome() {
//     return `welcome ${this.state.user}`
//   }
//   render() {
//     return <>
//       <h1 className={this.state.darkStyle} >{this.welcome()}</h1>
//       {/* <h3>{this.state.greeting}</h3> */}
//       <h2 className="text-center" > <i className="fas fa-home"></i> Home</h2>
//       {/* <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempore
//         doloribus illum aliquam consequatur
//         vitae quos veritatis sapiente necessitatibus nam.</p> */}
//     </>
//   }
// }





import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);


  async function getTrending() {
    let { data } = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50');
    console.log(data);
    setTrendingMovies(data.results);
  }


  useEffect(() => {
    getTrending();
  }, [])

  return <>
    {/* <h2 className="text-center" > <i className="fas fa-home"></i> Home</h2>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempore
      doloribus illum aliquam consequatur
      vitae quos veritatis sapiente necessitatibus nam.</p> */}


    <div className='container'>
      <div className='row'>
        {/* <img className='w-100' src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} alt="" /> */}
        {trendingMovies.map((movie, ind) => <div key={movie.id} className='col-md-2 mt-3'>
          <h2 className='h6'>{movie.title}</h2>
        </div>)}
      </div>
    </div>
  </>
}
