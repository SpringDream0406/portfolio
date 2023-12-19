import React, { useEffect } from 'react'
import styled from 'styled-components'

const FarmFarm = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PjExplainField>
      <ExBox>

        <h2 style={{ color: '#079707' }} >1. 팜팜</h2>

        {/* <a href='https://hellosori.notion.site/4dd1ce5f2f684bf9adf2cb49d631c81b' target='_blank' rel='noopener noreferrer'>1. 팜팜</a> */}

        <span className='pjExplain'>- 도심 농부를 위한 텃밭 분양 플랫폼 (광인사 1차 프로젝트)</span>
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
            <li>Flask를 이용한 API 서버 개발</li>
            <li>Oracle를 이용한 데이터베이스 구축/관리</li>
          </div>
        </ProjectBox>
        <hr />
        <Recall>
          <h4>회고</h4>
          첫 프로젝트였던 만큼 많은 문제와 실제 개발을 경험해 볼 수 있는 프로젝트였습니다. <br />
          <br />
          가장 기억에 남는 첫 번째는 서버와 DB를 배우지 않은 상태로 프로젝트를 하게 되었고, 제가 그 서버와 DB를 맡았던 점입니다. <br />
          이 문제를 해결하기 위해 우선 선생님들께 서버와 DB의 이론적인 내용 등을 여쭤 이론적인 지식을 쌓고, <br />
          저희 반 담당 선생님께 지속적해서 요청하여 2시간 동안 Flask와 Oracle의 초기설정과 간단한 동작 코드를 배웠습니다. <br />
          이후 블로그와 GPT를 참고하여 React와 Flask의 간단한 동작 예제 코드를 사용해 보며 기본적인 코드와 동작을 알게 되었고, <br />
          이를 활용하여 Flask로 API 서버를 구축했으며, 교육 전 프리트레이닝을 통해 배운 DB 내용을 활용하여 Oracle로 DB를 <br />
          구축하고 관리했습니다.<br />
          이때 맨땅에 헤딩하는 느낌의 어려움을 경험했지만, 원하는 기능을 구축해 내면서 뿌듯함을 많이 느낄 수 있었습니다.<br />
          <br />
          두 번째는 프로젝트 중 코로나에 걸렸던 점입니다. <br />
          코로나에 걸려서 일주일간 집에 격리되었고, 몸도 많이 안 좋았었는데, 프로젝트에서 중요한 역할인 서버와 DB를 담당하고 있었습니다. <br />
          게다가 프론트와 서버의 데이터를 연동하는 단계였기 때문에, 학원에 노트북을 서버로 켜두고, 집에서 원격조정으로 관리하며, <br />
          요청에 맞춰 API를 만들어주고, 연동을 확인하는 등의 일을 하면서, 맡은 역할의 책임감을 느끼고, 이를 수행하기 위해 노력했습니다. <br />
          덕분에 같은 팀원분들에게 좋은 인상을 줄 수 있었고, 당시에는 몸이 아파 힘들었지만 역할을 제대로 수행하고 마무리할 수 있어 <br />
          뿌듯함을 느낄 수 있었습니다. <br />
          <br />
        </Recall>
        <hr />
        <ProjectBox>
          <span className='pjTitle'>GitHub</span>
          <div className='pjContent'>
            <a className='pjContent' href='https://github.com/SpringDream0406/-GAI-project_Appian' target='_blank' rel='noopener noreferrer'>https://github.com/SpringDream0406/-GAI-project_Appian</a>

          </div>
        </ProjectBox>
      </ExBox>

    </PjExplainField>
  )
}

export default FarmFarm

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