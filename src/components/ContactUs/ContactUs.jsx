import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    width: auto;
  /* margin-top: 10px; */
  background-color: #000000;
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
  margin: 5px;
  padding: 25px;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 30px;
  font-weight: 600;
`;

const Para = styled.p`
    padding: 20px;
    font-size: 20px;
    color: white;
`;

const FormPara =styled.div`
  padding-left: 20px;
`;

const Form = styled.form`
  display: flex;
  width: 50%;
  flex-direction: column;
  /* background-color: #bbac78; */
  background-color: #bbac78;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  height: auto;
  padding: 10px;
  border-radius: 5px;
`;

const Input = styled.input`
  flex: 1;
  width: 95%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  line-height: 1.1rem;
  font-size: 0.9rem;
`;

const TextArea = styled.textarea`
  flex: 1;
  width: 95%;
  /* height: auto; */
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  resize: vertical;
    line-height: 1.1rem;
  font-size: 0.9rem;
`
const Select = styled.select`
  flex: 1;
  width: 99%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 15px;
  margin-top: 10px;
  width: 30%;
  min-width: 30%;
  display: flex;
  max-height: 50px;
  align-items: center;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  font-weight: 800;
  border-radius: 5px;
  color: #000000;
  line-height: 18px;
  &:hover {
    background-color: #000000;
    color: #fffefe;
  }
`;

const FormTitle = styled.h3`
  text-align: center;
  text-decoration: underline;
  font-weight: 800;
`;

const ContactUs = () => {
  return (
    <Container>
    <Wrapper>
      <Title>
        Contact Us
      </Title>
      <Para>
        Meat & Grill Catering
        <br></br>
        United Kingdom
      </Para>

      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1447.7416680193694!2d-0.5012929593897288!3d51.560364984605265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa0ccd4ac43b52b17%3A0xf5ccc795a39a1f1e!2sSave%20More%20Drinks!5e0!3m2!1sen!2sin!4v1712927744322!5m2!1sen!2sin" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

      <Para>
      Phone
      UK: 07931099130
      </Para>
      <Para>
      Email: 
      <a href='mailto:info@Meatgrill.co.uk'> info@Meatgrill.co.uk</a>
      </Para>
      <FormPara>

      <Form>
          <FormTitle>Contact Form</FormTitle>
          <br></br>
          {/* <br></br> */}
            {/* <label for="QueryType">Query Type:</label>
            <Select>
            <option value="order">Order Related Query</option>
            <option value="product">Product Related Query</option>
            <option value="technical">Technical Query</option>
            <option value="other">Other Query</option>
        </Select> */}
            <label for="name">Your Name:</label>
            <Input placeholder="Your Name" type="text" required />
            <label for="email">Email:</label>
            <Input placeholder="Email" type="email" required />
            <label for="phone">Phone Number:</label>
            <Input placeholder="Phone Number" type="text" required />
            <label for="title">Subject:</label>
            <Input placeholder="Subject/Title" type="text" required />
            <label for="message">Message:</label>
            <TextArea rows={5} placeholder="Enter your message" type="text" required />
            <Button type="submit">SUBMIT</Button>
          </Form>
        </FormPara>

    </Wrapper>
  </Container>
  )
}

export default ContactUs