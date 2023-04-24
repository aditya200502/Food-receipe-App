import { FaPizzaSlice } from 'react-icons/fa';
import { GiChopsticks, GiHamburger, GiNoodles } from 'react-icons/gi';
import styled from "styled-components"
import { NavLink } from 'react-router-dom';

function Categorise() {
  return (
    <List>
      <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={'/cuisine/Mexican'}>
        <GiHamburger />
        <h4>Mexican</h4>
      </SLink>
      <SLink to={'/cuisine/Chinese'}>
        <GiNoodles />
        <h4>Chinese</h4>
      </SLink>
      <SLink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;  
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  backgound:linear-gradient(35deg, #494949, #313131);
  cursor: pointer;
  width: 6rem;
  height: 6rem;
  transform: scale(0.8)
  
  h4{
    color: #494949;
    font-size: 0.8rem;
  }
  svg{
    color:#313131;
    font-size:1.5rem;
  }
  &.active {
    backgound: linear-gradient(to right,#f27121,#e94057);
  }
  svg{
    color:#f27121;
  }
  h4{
    color:#e94057;
  }
  `;
// `;



export default Categorise
