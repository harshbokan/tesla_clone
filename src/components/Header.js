import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// to add material ui icons do: npm install @mui/material @emotion/react @emotion/styled
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';


function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)
    console.log(cars);

return (
    <Container>
        <a>
            <img src="images/logo.svg" alt=""/>
        </a>
        <Menu>
            {cars && cars.map((car, index)=>(
                 <a key={index} href='#'>{car}</a>
            ))} 
            {/* <a href='#'>Model S</a>
            <a href='#'>Model 3</a>
            <a href='#'>Model X</a>
            <a href='#'>Model Y</a> */}
        </Menu>
        <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            <CustomMenu onClick={()=>setBurgerStatus(true)} />               
                                 {/*--------------------------------------------------------------- look how we design the custom material ui button ------------------ */}              
        </RightMenu>
        <BurgerNav show={burgerStatus}>
                                {/* ----------------------------------------------------    Here we are passing the burgerStatus for hiding and showing the burger menu   ---------------------- */}
            <CloseWrapper>
                <CustomClose onClick={()=>setBurgerStatus(false)} />
            </CloseWrapper>
                                 {/*--------------------------------------------------------------- look how we design the custom material ui button ------------------ */}              
            {cars && cars.map((car, index)=>(
                 <li key={index} ><a href='#'>{car}</a></li>
            ))} 
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade In</a></li>
            <li><a href="#">Cyber-Truck</a></li>
            <li><a href="#">Roadester</a></li>
            <li><a href="#">New Arrivals</a></li>
        </BurgerNav>
    </Container>
  )
}

export default Header

const Container= styled.div`
    width: 100vw;
    min-height: 60px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 0 20px;
    z-index:1;
`
const Menu= styled.div`
    display:flex;
    align-items:center;
    flex-wrap:no-wrap;
    flex: 1;
    justify-content:center;
    a{
        font-weight: 600px;
        text-transform: uppercase;
        padding: 0 10px;
    }

    @media(max-width: 768px){
        display:none;
    }
`
const RightMenu= styled.div`
    display:flex;
    align-items:center;
    a{
        font-weight: 600px;
        text-transform: uppercase;
        margin-right:10px;
    }
`

                                 {/*--------------------------------------------------------------- look how we design the custom material ui button ------------------ */}              
const CustomMenu= styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav= styled.div`
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    background:white;
    width: 300px;
    z-index:10;
    list-style:none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    ${'' /* display: ${props => props.show ? 'flex' : 'none'}; */}
    transition: transform 0.2s;
    ${'' /*               ----------------------------------- here css is being modified on the basis of the useState          ---------------------------- */}
    li{
        padding: 15px 0px;
        border-bottom: 1px solid rgba(0,0,0,0.2);

        a{
            font-weight: 600;
        }
    }
`
const CloseWrapper= styled.div`
    display:flex;
    justify-content:flex-end;
`
const CustomClose= styled(CloseIcon)`
    cursor:pointer;
`