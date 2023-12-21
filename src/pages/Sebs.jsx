import React from 'react'
import styled from 'styled-components'
import ImageSlider from '../components/ImageSlider';
import { useScrollToTop, useCustomNavigate } from '../components/Utils';



const Sebs = () => {

  useScrollToTop();

  const { goBack } = useCustomNavigate();

  const imageForderName = 'sebs';
  const context = require.context('../../public/images/sebs', false, /\.(png|jpe?g|svg)$/);
  const imageFiles = context.keys().map((key) => key.replace('./', ''));

  return (
    <PjExplainField>
      <ExBox>

        <ImageSlider imageForderName={imageForderName} imageFiles={imageFiles}/>
        <br />
        <br />
        <br />

        <Title href='#' onClick={goBack}>23. SEB'S MUSIC</Title>

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
        <hr />
        <Recall>
          <h4>회고</h4>
          2차 프로젝트 중 친분 있는 팀이 서버에 대한 어려움을 겪고 있어서 여러 이유로 도움을 주게 되었습니다. <br />
          <br />

        </Recall>
        <hr />

        <Recall>
          <h4>영상</h4>
          <div style={{ textAlign: 'center' }}>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/A3frdYgd-ho"
              title="SEB'S MUSIC 영상"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </Recall>

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


const Title = styled.a`
  text-decoration: none;
  color: orange;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 5px;
  transition: color 0.3s;

  &:hover {
    text-decoration: underline;
    color: red;
  }
`;


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