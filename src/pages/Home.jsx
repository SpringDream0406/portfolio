import React from 'react'
import styled from 'styled-components'
import Introduction from '../components/Introduce'
import MyInfo from '../components/MyInfo'
import Skill from '../components/Skill'
import Experience from '../components/Experience'
import Picture from '../components/Picture'
import Certification from '../components/Certification'
import Education from '../components/Education'

const Home = () => {
  return (
    <HomeField>
      <MyInfo />
      <DivLine />
      <Introduction />
      <DivLine />
      <Skill />
      <DivLine />
      <Certification />
      <DivLine />
      <Education />
      <DivLine />
      <Experience />
      <DivLine />
      <Picture />
      <br />
      <h2 className='tytext'>Thank you!</h2>
    </HomeField>
  )
}

export default Home

const HomeField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 55%;
  height: 100%;
  padding-top: 85px;
  padding-bottom: 85px;
  margin: auto;
  @media screen and (max-width: 1024px){
    width: 80%;
  }
  
  .tytext{
    display: flex;
    justify-content: center;
  }
`

const DivLine = styled.div`
  margin: 50px 0;
  height: 1px;
  background-color: lightgray;
`