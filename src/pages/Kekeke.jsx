import React from 'react'
import styled from 'styled-components'
import ImageSlider from '../components/ImageSlider';
import { useScrollToTop, useCustomNavigate } from '../components/Utils';


const Kekeke = () => {

  useScrollToTop();

  const { goBack } = useCustomNavigate();

  const imageForderName = 'kekeke';
  const context = require.context('../../public/images/kekeke', false, /\.(png|jpe?g|svg)$/);
  const imageFiles = context.keys().map((key) => key.replace('./', ''));


  return (
    <PjExplainField>
      <ExBox>

        <ImageSlider imageForderName={imageForderName} imageFiles={imageFiles} />
        <br />
        <br />
        <br />

        <Title>4. KEKEKE</Title>

        <span className='pjExplain'>- AI 추천 및 드로잉 기술을 이용한 주문 케이크 플랫폼</span>
        <ProjectBox>
          <span className='pjTitle'>프로젝트 기간</span>
          <span className='pjContent'>2023.11.01 ~ 2023.12.05</span>
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
        <hr />
        <Recall>
          <h4>회고</h4>
          2차 프로젝트 중 친분 있는 팀이 서버에 대한 어려움을 겪고 있어서 여러 이유로 도움을 주게 되었습니다. <br />
          <br />
          당시 저희 팀에서는 사용하지 않는 Figma를 사용하고 있고, 채팅 기능도 구현한다고 하여 이를 경험해 보고 싶어 도움을 주었습니다. <br />
          하지만 프로젝트 도중 허리를 다치고, 저희 팀 프로젝트와 일정까지 겹쳐 채팅 기능 구현에는 참여하지 못했습니다. <br />
          <br />
          로그인 기능을 구현하는 도중 구매자가 회원가입 할 때 제한사항으로 가입이 안 되었는데 첨부한 프로필 이미지는 저장되며 <br />
          페이지가 갱신되는 문제를 발견했습니다. <br />
          이 문제를 해결하기 위해 온종일 고생했었는데, 일단 이미지가 저장되는 원인을 찾아보니 multer를 사용해 이미지를 저장하는데 <br />
          filefilter를 설정하지 않았기 때문이었습니다. <br />
          일반적으로 인터넷에서 알려주는 multer의 기능에는 filter의 내용이 없었는데, 대부분은 프론트에서 제한사항 체크를 하고 <br />
          서버로 넘겨주기 때문이라고 생각했고, 이 프로젝트는 서버에서 모든 제한사항을 체크하다보니 보인 문제였습니다. <br />
          초기에 서버에서 제한사항 체크를 하기로 합의했었기 때문에, filter에 여러 제한사항 체크를 집어넣으면서 문제를 해결했습니다. <br />
          <br />


          <br />
        </Recall>
        <hr />

        <Recall>
          <h4>영상</h4>
          <div style={{ textAlign: 'center' }}>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/A5MbFHJaqCA"
              title="KEKEKE 영상"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </Recall>
        <hr />


        <ProjectBox>
          <span className='pjTitle'>GitHub</span>
          <div className='pjContent'>
            <a className='pjContent' href='https://github.com/SpringDream0406/-GAI-kekeke' target='_blank' rel='noopener noreferrer'>kekeke Github</a>

          </div>
        </ProjectBox>
        <hr />

        <br />
        <button onClick={goBack}>뒤로 가기</button>

      </ExBox>

    </PjExplainField>)
}

export default Kekeke




const Title = styled.div`
  text-decoration: none;
  color: orange;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 10px;
  transition: color 0.3s;
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