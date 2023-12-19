import React from 'react'
import styled from 'styled-components'

const Introduce = () => {
  return (
    <>
      <IntroTitleWrap>Introduce</IntroTitleWrap>
      <IntroTextWrap>
        안녕하세요. <br/>
        노후에도 개발하고 싶은 개발자 양춘모 입니다. <br/>
        원하는 홈페이지를 만들어보고 싶다는 생각에 코딩에 입문했으며, <br/>
        코딩을 배우면서 서버와 관련된 백엔드에 흥미를 느끼고 공부 중입니다. <br/>
        코딩을 하며 문제가 생겼을 때 이를 해결하기 위해 끈기있게 노력하며, <br/>
        팀 프로젝트를 하며 협업과 책임감 있는 행동의 중요성을 느끼고 이를 위해 노력하고 있습니다. <br />
      </IntroTextWrap>
    </>
  )
}

export default Introduce

const IntroTitleWrap = styled.div`
  border-left: green solid 10px;
  padding-left: 16px;
  font-size: 2.5rem;
  font-weight: bold;
`

const IntroTextWrap = styled.span`
  margin-top: 20px;
  padding-left: 10px;

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;

    &:hover{
      text-decoration: underline;
      color: blue;
    }
  }
`

