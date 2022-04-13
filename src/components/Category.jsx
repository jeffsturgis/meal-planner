import { FaPizzaSlice, FaHamburger, FaOlive } from 'react-icons/fa';
import { GiNoodles, GiChopsticks, GiGreekTemple, GiMaracas, GiClover, GiIndianPalace } from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


function Category() {
  return (
    <List>
      <NavLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={'/cuisine/Mediterranean'}>
        <GiGreekTemple />
        <h4>Mediterranean</h4>
      </NavLink>
      <NavLink to={'/cuisine/Mexican'}>
        <GiMaracas />
        <h4>Mexican</h4>
      </NavLink>
      <NavLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
      <NavLink to={'/cuisine/Indian'}>
        <GiIndianPalace />
        <h4>Indian</h4>
      </NavLink>
      <NavLink to={'/cuisine/Irish'}>
        <GiClover />
        <h4>Irish</h4>
      </NavLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

export default Category;
