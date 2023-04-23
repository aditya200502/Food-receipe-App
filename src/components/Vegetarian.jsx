import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styled from "styled-components"
import "@splidejs/splide/dist/css/splide.min.css"

function Vegetarian() {
  const API = '7aafed5feafc4c97a8c2824507496040';

  const [Veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const isJson = (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  const getVeggie = async () => {

    const check = localStorage.getItem('veggie');
    if (check && isJson(check)) {
      setVeggie(JSON.parse(check));
    }
    else {

      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API}&number=9&tags=vegetarian`);
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      console.log(data.recipes);
      setVeggie(data.recipes);
    }

  }
  return (
    <div>

      <Wrapper>
        <h3>Vegetarian Picks</h3>

        <Splide options={{
          perPage: 3,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: '5rem'
        }}>

          {Veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
              </SplideSlide>
            )
          })}
        </Splide>
      </Wrapper>


    </div>
  )
}

// CSS PART MADE WITH STYLED-COMPONENTS

const Wrapper = styled.div`
    margin: 4rem 0rem;
`;

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    posotion: relative;


    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p{
        position: absolute;
        z-index: 10;
        left:50%;
        bottom: 0%;
        transform:translate(-50%,0%);
        color: white;
        width: 100%;
        display:flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position:absolue;
    width: 100%;
    height: 100%;
    background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));

`;


export default Vegetarian
