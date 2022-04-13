import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion";
import { Link, useParams } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import CategorySelector from "../components/CategorySelector";
import Weekday from "../components/Weekday";


function MealSelection() {

  const [MealSelection, setMealSelection, setSelectedMealOptions] = useState([]);
  let params = useParams();

  const getMealSelection = async (date) => {

    console.log(date);
    const check = false; //localStorage.getItem('meal-' + date);

    if(check){
      setMealSelection(JSON.parse(check));
    }
    else{
      //var url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&MealSelection=${date}&number=9&includeNutrition=true`;
      var url = `https://develevation.com/api/?MealSelection=${date}`;
      const data = await fetch(url);
      const recipes = await data.json();
      console.log(recipes);
      localStorage.setItem('meal-' + date, JSON.stringify(recipes.results));
      setMealSelection(recipes.results);
      setSelectedMealOptions(recipes.options);
    }

  };

  useEffect(() => {
    getMealSelection(params.date);
    //console.log(params);
  }, [params.date]);

  return (
    <Wrapper>
      <Grid>
        <FormCard key="test">
          <Weekday />
        </FormCard>
        <FormCard key="test1">
          <CategorySelector />
        </FormCard>
        <FormCard key="test2">
          Cook Time
        </FormCard>
      </Grid>
      <Splide options={{
        perPage: 3,
        arrows: false,
        pagination: false,
        drag: 'free',
        gap: '5rem'
        }}
      >
      {MealSelection.map((recipe) => {
        return (
          <SplideSlide key={recipe.id}>
            <Card>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
              <Gradient />
            </Card>
          </SplideSlide>
        );
      })};
      </Splide>
    </Wrapper>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;

`;
const FormCard = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }
  a {
      text-decoration: none;
  }
  h4 {

    padding: 1rem;
  }
`;

const Card = styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: auto;
    object-fit: 'cover';
  }
  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;

  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 3rem;
  bottom: 0;
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7));
`;
const Wrapper = styled.div`
  margin: 1rem 1rem
`;
export default MealSelection;
