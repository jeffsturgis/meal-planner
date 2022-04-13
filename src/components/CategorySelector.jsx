import React, { Component } from 'react';
import Select from 'react-select';
import { colourOptions, mealOptions } from './docs/data.ts';
import { FaPizzaSlice, FaHamburger, FaOlive } from 'react-icons/fa';
import { GiNoodles, GiChopsticks, GiGreekTemple, GiMaracas, GiClover, GiIndianPalace } from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


function CategorySelector() {

  return (
    <Select
      defaultValue={[mealOptions[2], mealOptions[3]]}
      isMulti
      name="colors"
      options={mealOptions}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

export default CategorySelector;
