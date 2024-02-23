import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Experience = () => {
  return (
    <>
      <ExTitleWrap>Experience</ExTitleWrap>
      <ExBox>
        <Link to="/kekeke">3. KEKEKE </Link>
        <span className="pjExplain">
          - AI 추천 및 드로잉 기술을 이용한 주문 케이크 플랫폼 (광인사 2차
          프로젝트)
        </span>
        <ProjectBox>
          <span className="pjTitle">프로젝트 기간</span>
          <span className="pjContent">2023.11.01 ~ 2023.12.05</span>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className="pjTitle">프로젝트 종류</span>
          <span className="pjContent">팀 프로젝트 (5명)</span>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className="pjTitle">사용 기술</span>
          <span className="pjContent">
            React / Node.js / Flask / MySQL / Github / Notion / Figma
          </span>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className="pjTitle">담당 역할</span>
          <div className="pjContent">
            <li>광인사 2차 프로젝트 도중 옆 팀의 서버 관련 도움 역할로 참여</li>
            <li>Node 서버의 초기 설정</li>
            <li>구매자와 판매자의 회원가입과 로그인 관련 API 구축</li>
            <li>케이크 둘러보기 페이지 API 구축</li>
          </div>
        </ProjectBox>

        <br />
        <br />
        <br />

        <Link to="/farmfarm2">2. 팜팜 서버 교체</Link>
        <span className="pjExplain">
          - Node 서버를 배운 후, 광인사 1차 프로젝트 였던 팜팜의 서버를
          Flask에서 Node로 교체
        </span>
        <ProjectBox>
          <span className="pjTitle">프로젝트 기간</span>
          <span className="pjContent">2023.10.27 ~ 2023.11.09</span>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className="pjTitle">프로젝트 종류</span>
          <span className="pjContent">개인 프로젝트</span>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className="pjTitle">사용 기술</span>
          <span className="pjContent">React / Node.js / MySQL / Github</span>
        </ProjectBox>
        <hr />
        <ProjectBox>
          <span className="pjTitle">담당 역할</span>
          <div className="pjContent">
            <li>Flask로 개발한 API 서버를 Node.js로 교체</li>
          </div>
        </ProjectBox>
        <br />
        <br />
        <br />

        <Link to="/farmfarm">1. 팜팜</Link>

        <span className="pjExplain">
          <li> 도심농부를 위한 텃밭 분양 플랫폼 (광인사 1차 프로젝트)</li>
          <li>
            서버와 DB를 배우지 않은 상태로 시작하여 1시간동안 Flask와 Oracle의
            join 방법만 배운 후, ChatGPT와 인터넷 검색을 통해 Flask서버와 Oracle
            DB를 구축하고 관리했습니다.
          </li>
          <li> 주제가 정해진 후 뒤늦게 추가된 머신러닝 기능을 추가하기 위해, 필요한
          데이터를 찾아보고 수집하여 머신러닝을 이용한 농산물 가격 예측 모델을
          개발했습니다.
          </li>
        </span>
      </ExBox>
    </>
  );
};

export default Experience;

const ExTitleWrap = styled.div`
  border-left: green solid 10px;
  padding-left: 16px;
  font-size: 2.5rem;
  font-weight: bold;
`;

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

    &:hover {
      color: blue;
      text-decoration: underline;
    }
  }

  .pjExplain {
    margin-bottom: 10px;
  }

  hr {
    width: 100%;
  }
`;

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
`;
