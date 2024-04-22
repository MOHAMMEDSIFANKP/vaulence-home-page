import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/image/logo.png'

function NavBar() {
  return (
    <Section className='z-10 w-full flex flex-row items-center gap-10'>
      <img src={logo} alt="logo" className='w-[5vw]' />
    <div className='flex flex-row gap-20 text-gray-900 text-opacity-80'>
      <p>INSCRIPTION</p>
      <p>LINEUP</p>
      <p>INFORMATION</p>
      <p>EXPERIANCE</p>
    </div>
    </Section>
  )
}

export default NavBar

const Section = styled.section`
left: 3%;
top: 3%;

  position: absolute;
`