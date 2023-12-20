import React, { useEffect } from 'react'
import styled from 'styled-components'

const Sebs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PjExplainField>
      <ExBox>

        <h2 style={{ color: '#079707' }} >3. SEB'S MUSIC</h2>
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
            <li>광인사 2차 프로젝트 도중 옆 팀의 서버 관련 도움 역할로 참여</li>
            <li>Node 서버의 초기 설정</li>
            <li>구매자와 판매자의 회원가입과 로그인 관련 API 구축</li>
            <li>케이크 둘러보기 페이지 API 구축</li>
          </div>
        </ProjectBox>
        <hr />
        <Recall>
          <h4>회고</h4>
          2차 프로젝트 중 친분 있는 팀이 서버에 대한 어려움을 겪고 있어서 여러 이유로 도움을 주게 되었습니다. <br />
          <br />
          
        </Recall>
        <hr />
        <ProjectBox>
          <span className='pjTitle'>GitHub</span>
          <div className='pjContent'>
            <a className='pjContent' href='https://github.com/SpringDream0406/-GAI-Appsolute' target='_blank' rel='noopener noreferrer'>https://github.com/SpringDream0406/-GAI-Appsolute</a>

          </div>
        </ProjectBox>
      </ExBox>

    </PjExplainField>)
}

export default Sebs



const Recall = styled.span`
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

const ExBox = styled.div`
  margin-top: 20px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  
  .pjType {
    font-size: 1.6rem;
    font-weight: bold;
  }



  .pjExplain{
    margin-bottom: 10px;
  }

  hr {
    width: 100%;
  }
`


const PjExplainField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  height: 100%;
  padding-top: 85px;
  padding-bottom: 85px;
  margin: auto;
  @media screen and (max-width: 1024px){
    width: 80%;
  }
`