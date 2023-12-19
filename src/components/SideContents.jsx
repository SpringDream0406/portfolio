import React from 'react'
import styled from 'styled-components'

const SideContents = () => {
  return (
    <SideContentsBox>
      <a href='/portfolio'>메인 페이지</a>
      프로젝트
      <a href='/farmfarm'><h5>팜팜</h5></a>

      <a href='/farmfarm'>팜팜</a>
    </SideContentsBox>
  )
}

export default SideContents

const SideContentsBox = styled.div`
  margin-top: 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  a {
    margin-bottom: 20px;


    &:hover{
      color: green;
      text-decoration: underline;
    }
  }
`