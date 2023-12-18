import React from 'react'
import styled from 'styled-components'

const Experience = () => {
  return (
    <>
      <ExTitleWrap>Education</ExTitleWrap>
      <EduBox>
        <li>광주 인공지능사관학교</li>
        <span>- 기간 : 2023.06 ~ 2023.12</span>
        <span>- 과정 : App과정</span>
      </EduBox>
      <DivLine />
      <ExTitleWrap>Experience</ExTitleWrap>
      <ExBox>
        <li className='pjType'>Team Project</li>
        <a href='/tm'>1. TravelMate</a>
        <span className='pjExplain'>- 성향·리뷰기반 동행자 추천 및 매칭 플랫폼</span>
        <ProjectBox>
          <span className='pjTitle'>프로젝트 기간</span>
          <span className='pjContent'>2023.07 ~ 2023.08 (약 3주)</span>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className='pjTitle'>참여 인원</span>
          <span className='pjContent'>프론트엔드 2명 / 백엔드 2명 / 머신러닝 1명</span>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className='pjTitle'>사용 기술</span>
          <span className='pjContent'>React.js / Firebase / Python / Flask / Github / KakaoMap API /
            <br /> 로지스틱 회귀
          </span>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className='pjTitle'>구현 기능</span>
          <div className='pjContent'>
            <li>여행 성향 설문조사 기능</li>
            <li>여행일정 및 동행자 모집글 등록 기능</li>
            <li>여행일정 드래그앤드랍 기능</li>
            <li>성향에 기반한 맞춤 일정 추천 기능</li>
            <li>동행 신청 및 수락 기능</li>
            <li>채팅 및 리뷰 기능</li>
            <li>동행온도</li>
          </div>
        </ProjectBox>

        {/* <a href='https://hellosori.notion.site/4dd1ce5f2f684bf9adf2cb49d631c81b'>1. 팜팜</a> */}
        <a href='https://hellosori.notion.site/4dd1ce5f2f684bf9adf2cb49d631c81b' target='_blank' rel='noopener noreferrer'>1. 팜팜</a>

        <span className='pjExplain'>- 도심 농부를 위한 텃밭 분양 플랫폼</span>
        <ProjectBox>
          <span className='pjTitle'>프로젝트 기간</span>
          <span className='pjContent'>2023.07.26 ~ 2023.08.18</span>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className='pjTitle'>참여 인원</span>
          <span className='pjContent'>5명</span>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className='pjTitle'>사용 기술</span>
          <span className='pjContent'>React / Flask / Oracle / Github / Notion</span>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className='pjTitle'>구현 기능</span>
          <div className='pjContent'>
            <li>머신러닝을 이용한 농산물 가격 예측 모델 개발</li>
            <li>Flask를 이용한 api 서버 개발</li>
            <li>Oracle를 이용한 데이터베이스 구축/관리</li>
          </div>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className='pjTitle'>문제와 해결</span>
          <div className='pjContent'>
            <li>
              서버와 DB를 배우지 않은 상태  <br />
              서버와 DB를 배우지 않은 상태에서 프로젝트를 진행하다보니 많은 문제가 있었습니다. <br />
              우선 선생님들께 서버와 DB의 이론적인 내용 등을 여쭤 이론적인 지식을 쌓고, <br />
              인터넷과 GPT를 활용하여 React와 Flask의 동작 코드를 확인 후 이를 활용하여 Flask를 이용한 API 서버를 구축했으며, <br />
              교육 전 프리트레이닝을 통해 배운 DB 내용을 활용하여 Oracle DB를 구축하고 관리했습니다.
            </li>
            <br />

          <li>Flask를 이용한 api 서버 개발</li>
          <li>Oracle를 이용한 데이터베이스 구축/관리</li>
        </div>
      </ProjectBox>
    </ExBox>
    </>
  )
}

export default Experience



const ExTitleWrap = styled.div`
  border-left: green solid 10px;
  padding-left: 16px;
  font-size: 2.5rem;
  font-weight: bold;
`

const ExBox = styled.div`
  margin-top: 20px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  
  .pjType {
    font-size: 1.6rem;
    font-weight: bold;
  }

  a {
    color: #079707;
    font-size: 25px;
    font-weight: bold;
    margin: 15px 0;
    text-decoration: none;

    &:hover{
      color: blue;
      text-decoration: underline;
    }
  }

  .pjExplain{
    margin-bottom: 10px;
  }

  hr {
    width: 100%;
  }
`

const EduBox = styled(ExBox)`
  display: flex;
  flex-direction: column;

  li {
    font-size: 1.3rem;
    font-weight: bold;
  }

  span {
    margin-top: 10px;
    padding-left: 30px;
  }
`

const ProjectBox = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.85fr;
  margin: 15px 0;

  .pjTitle {
    font-weight: bold;
  }

  .pjContent {
    margin-left: 25px;
  }

  li {
    font-size: 1rem;
  }
`

const DivLine = styled.div`
  margin: 50px 0;
  height: 1px;
  background-color: lightgray;
`