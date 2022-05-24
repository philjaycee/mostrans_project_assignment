import React, {  useEffect,useState } from 'react'
import Container from './Container'

import './landpage.css'

/*
<ul>
              <li><a href="#" className="kolom_1">Home</a></li>
              <li><a href="#" className="kolom_1">Work</a></li>
              <li><a href="#" className="kolom_1">Contact</a></li>
              <li><a href="#" className="kolom_1">About Me</a></li>
              <li><a href="#" className="kolom_1">Q & A</a></li>
            </ul>
            <li><a href="#" className = "link_2" >Login</a></li>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
      <div className="container">
        <a className="navbar-brand" href="#">Web Zone</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mx-auto"></div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
*/


const LandPage = () =>  { 

    const[allPokemons, setAllPokemons] = useState([])
   const [loadMore, setLoadMore] = useState('https://rickandmortyapi.com/api/character?limit=20')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${pokemon.id}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }

 useEffect(() => {
  getAllPokemons()
 }, [])
    

    return (
        <div className="banner-area">  
           <div className="content-area">
                <h1> Rick and Morty </h1>
                <div className="all-container">
          {allPokemons.map( (pokemonStats, index) => 
            <Container
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.image}
              name={pokemonStats.name}
            />)}
                </div>
            </div>
        </div>    
    )

}

export default LandPage