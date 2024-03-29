import React from "react";
import styled from "styled-components";
import ImageSlider from "../components/ImageSlider";
import { useScrollToTop, useCustomNavigate } from "../components/Utils";

const FarmFarm2 = () => {
  useScrollToTop();

  const { goBack } = useCustomNavigate();

  const imageForderName = "farmfarm2";
  const context = require.context(
    "../../public/images/farmfarm2",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const imageFiles = context.keys().map((key) => key.replace("./", ""));

  return (
    <PjExplainField>
      <ExBox>
        <ImageSlider
          imageForderName={imageForderName}
          imageFiles={imageFiles}
        />
        <br />
        <br />
        <br />

        <Title>2. 팜팜 서버 교체</Title>
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
            <span>Flask로 개발한 API 서버를 Node.js로 교체</span>
          </div>
        </ProjectBox>
        <hr />

        <ProjectBox>
          <span className="pjTitle">GitHub</span>
          <div className="pjContent">
            <a
              className="pjContent"
              href="https://github.com/SpringDream0406/-GAI-project_Appian"
              target="_blank"
              rel="noopener noreferrer"
            >
              팜팜 GitHub
            </a>
          </div>
        </ProjectBox>
        <hr />

        <Recall>
          <h4>회고</h4>
          서버를 배우면서 1차 프로젝트 때 구현한 서버는 너무 기본적이었으며
          부족했다는 점을 느끼고, Node 서버로 변경해보기로 했습니다. <br />
          <br />
          Express를 사용하여 Router로 기능들을 나누기는 했지만, 실무에서 어떤
          기준으로 Router를 나누는지 궁금증이 생겼으며, <br />
          당시 하드코딩을 해놨던 터라, res로 status를 사용해보거나 기타 기능들을
          써보기 위해서는 React의 내용도 변경해야 되서 <br />
          손이 많이 가는 것을 보고 하드코딩의 문제점을 깨닫게 되었습니다. <br />
          <br />
          <br />
        </Recall>
        <hr />
        <br />

        <button onClick={goBack}>뒤로 가기</button>
      </ExBox>
    </PjExplainField>
  );
};

export default FarmFarm2;

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

    &:hover {
      text-decoration: underline;
      color: blue;
    }
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

const ExBox = styled.div`
  margin-top: 20px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;

  .pjType {
    font-size: 1.6rem;
    font-weight: bold;
  }

  .pjExplain {
    margin-bottom: 10px;
  }

  hr {
    width: 100%;
  }
`;

const PjExplainField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  height: 100%;
  padding-top: 85px;
  padding-bottom: 85px;
  margin: auto;
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;
