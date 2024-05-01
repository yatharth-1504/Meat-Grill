import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    width: auto;
  /* margin-top: 10px; */
  background-color: #000000;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
`;

const Title = styled.div`
  cursor: pointer;
  &:hover {
    text-underline-offset: 0.4em;
    text-decoration: underline rgba(0, 0, 0, 0);
    text-decoration-color: #e30505;
  }
  /* margin: 5px; */
  padding: 25px;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Para = styled.p`
    padding: 20px;
    font-size: 20px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ParaInside = styled.div`
  text-align : center;
    font-size: 20px;
    color: white;
`;

const MenuPage = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                Canopaes [VEG & NON-VEG] Indian + English
            </Title>
            <Para>
            (VG) Vegan (V) Vegetarian (GF) Gluten Free
            </Para>
            <Para>
            <strong> PASTRIES </strong>
            </Para>
            <ParaInside>
                Croissant, cinnamon swirl, pain au chocolate or danish (V)
                <br></br>
                Ham & cheese croissant 
                <br></br> 
                Cheese & girolle mushroom croissant (V) Mozzarella, tomato & oregano danish (V)
            </ParaInside>
            <Para>
            <strong> CANAPES - INDIAN </strong>
            </Para>
            <ParaInside>
            Gobi Manchurian (V)
            <br></br>
            Paneer Tikka Masala (V)
            <br></br>
            Hara Bhara Kabab (V)
            </ParaInside>
            <Para>
            <strong> COLD </strong>
            </Para>
            <ParaInside>
            Spicy tuna tataki, togarashi peppers, ponzu glaze
            <br></br>
            Baby red peppers, fresh herbs, vegan cream cheese (VG) (GF)
            <br></br>
            Black garlic & coriander hummus, tomato relish on organic rye bread (VG)
            </ParaInside>
            <Para>
            <strong> HOT </strong>
            </Para>
            <ParaInside>
            Pea and mint croustade, shaved parmesan (V)
            <br></br>
            Bourbon-glazed pork belly, pineapple skewer (GF)
            <br></br>
            Curried jackfruit, spicy tomato chutney, naan bread (VG)
            </ParaInside>
            <Para>
                <strong>SWEET</strong>
            </Para>
            <ParaInside>
            Orange curd tartlet, mascarpone cream & chocolate shavings
            <br></br>
            White chocolate, lemongrass mousse, mango coulis, dark chocolate cup (GF)
            <br></br>
            Assortment of macarons
            <br></br>
            Walnut & pistachio baklava (VG)
            <br></br>
            Raspberry bakewell tart
            </ParaInside>
        </Wrapper>
    </Container>
  )
}

export default MenuPage