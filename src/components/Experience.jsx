import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Experience = () => {
  return (
    <>
      <ExTitleWrap>Education</ExTitleWrap>
      <EduBox>
        <li>광주 인공지능사관학교</li>
        <span>- 기간 : 2023.06 ~ 2023.12</span>
        <span>- 과정 : App과정</span>
        <br />
        <li>조선대학교 전자공학과</li>
        <span>- 기간 : 2007.03 ~ 2013.02</span>
        <span>- 학점 : 4.08 / 4.5</span>
      </EduBox>



      <DivLine />
      <ExTitleWrap>Experience</ExTitleWrap>
      <ExBox>

        <Link to='/kekeke'>4. KEKEKE </Link>
        <span className='pjExplain'>- AI 추천 및 드로잉 기술을 이용한 주문 케이크 플랫폼</span>
        <ProjectBox>
          <span className='pjTitle'>프로젝트 기간</span>
          <span className='pjContent'>2023.11.09 ~ 2023.11.21</span>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className='pjTitle'>프로젝트 종류</span>
          <span className='pjContent'>팀 프로젝트 (5명)</span>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className='pjTitle'>사용 기술</span>
          <span className='pjContent'>React / Node.js / Flask / MySQL / Github / Notion / Figma</span>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className='pjTitle'>담당 역할</span>
          <div className='pjContent'>
            <li>광인사 2차 프로젝트 도중 옆 팀의 서버 관련 도움 역할로 참여</li>
            <li>Node 서버의 초기 설정</li>
            <li>구매자와 판매자의 회원가입과 로그인 관련 API 구축</li>
            <li>케이크 둘러보기 페이지 API 구축</li>
          </div>
        </ProjectBox>

        <br />
        <br />
        <br />

        <Link to='/sebs'>3. SEB'S MUSIC</Link>
        <span className='pjExplain'>- AI기반 음악 추천 스트리밍 서비스 (광인사 2차 프로젝트)</span>
        <ProjectBox>
          <span className='pjTitle'>프로젝트 기간</span>
          <span className='pjContent'>2023.11.09 ~ 2023.11.21</span>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className='pjTitle'>프로젝트 종류</span>
          <span className='pjContent'>팀 프로젝트 (4명)</span>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className='pjTitle'>사용 기술</span>
          <span className='pjContent'>Flutter / Node.js / Flask / MySQL / Github</span>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className='pjTitle'>담당 역할</span>
          <div className='pjContent'>
            <li>Node를 이용한 API 서버 개발/관리</li>
            <li>MySQL을 이용한 데이터베이스 구축/관리</li>
          </div>
        </ProjectBox>

        <br />
        <br />
        <br />

        <Link to='/farmfarm2'>2. 팜팜 서버 교체</Link>
        <span className='pjExplain'>- node 서버를 배운 후, 광인사 1차 프로젝트 였던 팜팜의 서버를 node로 교체</span>
        <ProjectBox>
          <span className='pjTitle'>프로젝트 기간</span>
          <span className='pjContent'>2023.10.27 ~ 2023.11.09</span>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className='pjTitle'>프로젝트 종류</span>
          <span className='pjContent'>개인 프로젝트</span>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className='pjTitle'>사용 기술</span>
          <span className='pjContent'>React / Node.js / MySQL / Github</span>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className='pjTitle'>담당 역할</span>
          <div className='pjContent'>
            <li>Flask로 개발한 API 서버를 Node.js로 교체</li>
          </div>
        </ProjectBox>
        <br />
        <br />
        <br />

        <Link to='/farmfarm'>1. 팜팜</Link>
        {/* <a href='farmfarm'>1. 팜팜</a> */}
        {/* <a href='https://hellosori.notion.site/4dd1ce5f2f684bf9adf2cb49d631c81b' target='_blank' rel='noopener noreferrer'>1. 팜팜</a> */}

        <span className='pjExplain'>- 도심농부를 위한 텃밭 분양 플랫폼 (광인사 1차 프로젝트)</span>
        <ProjectBox>
          <span className='pjTitle'>프로젝트 기간</span>
          <span className='pjContent'>2023.07.26 ~ 2023.08.18</span>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className='pjTitle'>프로젝트 종류</span>
          <span className='pjContent'>팀 프로젝트 (5명)</span>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className='pjTitle'>사용 기술</span>
          <span className='pjContent'>React / Flask / Oracle / Github / Notion</span>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className='pjTitle'>담당 역할</span>
          <div className='pjContent'>
            <li>머신러닝을 이용한 농산물 가격 예측 모델 개발</li>
            <li>Flask를 이용한 API 서버 개발/관리</li>
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
    font-size: 30px;
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