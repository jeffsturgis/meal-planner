import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


function Weekday() {


  let sevenDayQueue = [];

  const start = new Date("02/05/2020");
  const end = new Date("02/10/2020");
  let i = 0;
  let loop = new Date();
  for(i = 0; i < 1; i++){
    let newDate = loop.setDate(loop.getDate() + 1);
    sevenDayQueue[i] = new Date(newDate);
  }
  console.log(sevenDayQueue);



  return (
    <div>
      {sevenDayQueue.map((item) => {
        console.log(item);
        return(
          <Card key={item.getDay() }>

            <h4>{item.toDateString()}</h4>

          </Card>
        )
      })}
    </div>

  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
  grid-gap: 3rem;

`;

const Card = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }
  a {
      text-decoration: none;
  }

`;


export default Weekday;
