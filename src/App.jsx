import React from 'react'
import NavBar from './Component/includes/NavBar'
import styled from 'styled-components'
import triangle from './assets/image/triangle.png'
import people from './assets/image/people.png'
function App() {
  return (
    <>
    
    <Section className='h-screen absolute w-full'>
    <NavBar/> 
      <Img1 src={triangle} className='w-[18vw]' alt="" />
      <Img2 src={triangle} className='w-[30vw]' alt="" />
      <Img3 src={triangle} className='w-[24vw]' alt="" />
      <Img4 src={triangle} className='w-[18vw]' alt="" />
      <Img5 src={people} className='w-[28vw]' alt="" />
    </Section>
    </>
  )
}

export default App

const Section = styled.section`
  background-color: #dcdfe2;
  overflow-x: hidden;
  overflow-y: hidden;
`

const Img1 = styled.img`
  position: absolute;
  top: -5%;
  left: -6%;
 
`
const Img2 = styled.img`
  display: block; 
  margin: auto;
  transform: translate(-50%, -50%) rotate(-18deg); 
  position: absolute; 
  top: 60%; 
  left: 50%;
`;

const Img3 = styled.img`
  display: block; 
  transform: translate(-50%, -50%) rotate(38deg); 
  position: absolute; 
  top: 35%; 
  right: -7%;
`;

const Img4 = styled.img`
  display: block; 
  transform: translate(-50%, -50%) rotate(-40deg); 
  position: absolute; 
  top: 90%;
  left: 7%;
`;

const Img5 = styled.img`
  display: block; 
  position: absolute; 
  top: 9%;
  left: 75%;
`;
