import React from 'react'
import styled from "styled-components" 
// this is used to use css in the javascript only
import Section from './Section'
// REACT reveal is used for animation in react components -------------------------------------------------------------->

function Home() {
  return (
    <Container>
        <Section 
            title="Model S"
            description="Order online for contactless delivery"
            backgroundImg="model-s.jpg"
            leftBtn= "Custom Order"
            rightBtn= "Existing Inventory"
         />
         <Section 
            title="Model Y"
            description="Order online for contactless delivery"
            backgroundImg="model-y.jpg"
            leftBtn= "Custom Order"
            rightBtn= "Existing Inventory"
         /><Section 
            title="Model 3"
            description="Order online for contactless delivery"
            backgroundImg="model-3.jpg"
            leftBtn= "Custom Order"
            rightBtn= "Existing Inventory"
         /><Section 
            title="Model X"
            description="Order online for contactless delivery"
            backgroundImg="model-x.jpg"
            leftBtn= "Custom Order"
            rightBtn= "Existing Inventory"
         /><Section 
            title="Lowest Cost Solar Panels in INDIA"
            description="Money Back Guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtn= "Order Now"
            rightBtn= "Learn More"
         /><Section 
            title="Solar for New Roofs"
            description="Solar Roofs costs less than a New Roof plus Solar Panels"
            backgroundImg="solar-roof.jpg"
            leftBtn= "Order Now"
            rightBtn= "Learn More"
         /><Section 
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftBtn= "Shop Now"
         />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    color:blue;
`
// with this i made changes to the package.json int the script start!!