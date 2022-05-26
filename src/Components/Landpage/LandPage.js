import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, {  useEffect,useState } from 'react'
import Container from './Container'
import CardDetails from '../Character_Details/profile_detail'
import './landpage.css'
import Navbar from '../Navbar/navbar__'

const LandPage = () =>  { 

   const[allCharacters, setAllCharacters] = useState([])
   const [loadMore, setLoadMore] = useState('https://rickandmortyapi.com/api/character')

  const getAllCharacters = async () => {
    const res = await fetch(loadMore)
    const data = await res.json() 

    function createAllCharacters(results)  {
      results.forEach( async characters => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${characters.id}`)
        const data =  await res.json()
        setAllCharacters( currentList => [...currentList, data])
      })
    }
    createAllCharacters(data.results)
  }

    useEffect(() => {
      getAllCharacters()
    }, [])


    return (
      <>      
      <Navbar />
      <div className="banner-area">
      <div className="container px-5 mx-5">
            <div className="d-flex flex-sm-row row px-5 mx-5 justify-content-center">
              <div className=" col-sm-3">
                <div className= "mr-4">
                </div>
              </div>
              <div className=" col-md-7  ">
              <div className="all-container">
                    <h1>List of Characters</h1>
                    {allCharacters.map((characterInfo, index) => 
                      <Container
                        key={index}
                        id={characterInfo.id}
                        image={characterInfo.image}
                        name={characterInfo.name}
                      />)}
                  </div>
              </div>
            </div>
          </div>  
        </div>
      </>
    )
}

export default LandPage