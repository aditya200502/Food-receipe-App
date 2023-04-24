import { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";


function Search() {

  const API = 'e9fa0f4495c54432882203bf2b39daa1';

  const [SearchedReceipes,setSearchedReceipes] = useState([]);
  let params = useParams();
    
  const getSearch = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&query=${name}`)
    const recipes = await data.json();
    setSearchedReceipes(recipes.results);
  };

  useEffect(() => {
    getSearch(params.input);
  },[params.input])

  return (
    <Grid>
      {SearchedReceipes.map((item) => {
        return(
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
            <img src={item.image} alt=""/>
            <h4>{item.title}</h4>
            </Link>
          </Card>
        )
      })}
    </Grid>
  )
}


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
  img{
    width:100%;
    border-radius: 2rem;
  }
  a{
    text-decoration: none;

  }
  h4{
    text-align: center;
    padding: 1rem;
  }
`;

export default Search
