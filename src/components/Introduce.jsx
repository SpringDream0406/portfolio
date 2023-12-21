import React from 'react'
import styled from 'styled-components'

const Introduce = () => {
  return (
    <>
      <IntroTitleWrap>Introduce</IntroTitleWrap>
      <IntroTextWrap>
        안녕하세요! 개발의 매력에 푹 빠져 코딩의 세계에 빠져 있는 양춘모입니다. <br />
        개발을 시작한 계기는 제가 직접 만들고 싶은 홈페이지가 있어서였습니다. <br />
        코딩을 배우면서 백엔드와 서버에 흥미를 느끼게 되었고, 이 분야에서의 실력 향상에 주력하고 있습니다. <br />
        코딩을 하면서 가끔은 문제가 발생하기도 하지만, 그럴 때마다 끈기 있게 문제를 해결하며 더 나은 코드를 <br /> 
        작성하기 위해 노력하고 있습니다. <br />
        그리고 팀 프로젝트를 통해 협업과 책임감의 중요성을 몸소 깨달았습니다. <br />
        함께 일하는 것이 얼마나 중요한지를 깨닫고, 그 경험을 토대로 개인적인 성장을 꾀하고 있습니다. <br />
        저는 개발을 통해 많은 것들을 만들어보고 싶으며, 앞으로도 계속해서 새로운 기술을 학습하고 성장하는 개발자로 <br />
        거듭나기 위해 노력하고 있습니다. <br />
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

