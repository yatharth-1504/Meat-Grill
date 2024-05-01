import React from 'react'
import styled from 'styled-components';
import img from "../../assets/about.jpg"

const Container = styled.div`
  padding: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-transform: translate3d(0, 0, 0);
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: space-evenly;
  justify-content: center;
  flex-direction: row;
`;

const Left = styled.div`
  padding: 5px; 
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  flex: 3;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  cursor: pointer;
  &:hover {
    text-underline-offset: 0.4em;
    text-decoration: underline rgba(0, 0, 0, 0);
    text-decoration-color: #e30505;
  }
  margin: 5px;
  padding: 25px;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 30px;
  font-weight: 600;
`;

const Image = styled.img`
  max-width: 90vw;
  height: 400px;
  border-radius: 12px;
`;

const Para = styled.p`
    padding: 20px;
    font-size: 20px;
    color: white;
`;

const Para1 = styled.p`
    padding: 20px;
    display: flex;
    justify-content: center;
`;

const Sustainability = () => {
  return (
    <Container>
    <Wrapper>
      <Right>
        <Title>
            Sustainability
        </Title>
        <Para>
            At Meat & Grill, we are committed to reducing our environmental impact through our
            Green Scheme Rules. Here's how we're making a difference:
        </Para>
        <Para>
        <u>Eco-Friendly Utensils:</u> For outdoor catering events, we prioritise sustainability by
        using wooden cutlery for knives, forks, spoons, stirring sticks, and more. These
        renewable resources minimise waste and promote a greener future.
        </Para>
        <Para>
        <u> Compostable Cups:</u> Enjoy your hot beverages guilt-free with our compostable cups
        and lids. Made from biodegradable materials, they ensure your coffee or tea doesn't
        harm the environment.
        </Para>
        <Para>
        <u>Paper Straws:</u> Say goodbye to plastic waste with our paper straws. They provide a
        convenient and eco-friendly alternative for sipping your favourite drinks.
        </Para>
        <Para>
        <u>Compostable Plastic Cups:</u> When plastic is necessary, we opt for compostable cups.
        These environmentally friendly alternatives break down naturally, reducing pollution
        and landfill waste.
        </Para>
        <Para>
        <u>Electric Vehicles:</u> We're committed to sustainable transportation practices. Whenever
        possible, we utilise electric vehicles to travel to our events, minimising emissions
        and promoting cleaner air.
        </Para>
        <Para>
        <u>No Single-Use Plastic:</u> We take a stand against single-use plastics such as
        polystyrene, cups, shot glasses, and straws. By eliminating these items from our
        serving process, we contribute to a healthier planet.
        </Para>
        <Para>
        Join us in our journey towards a greener tomorrow. Together, we can make a positive
        impact on the environment while enjoying delicious food and memorable events.
        Thank you for choosing Meat & Grill, where sustainability is always on the menu.
        </Para>
        <Para1>
            <Image src={"https://cdn.pixabay.com/photo/2022/07/31/18/08/sustainability-7356521_1280.png"} alt="" />
        </Para1>
      </Right>
      </Wrapper>
      </Container>
  )
}

export default Sustainability