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
        <li>
          광인사 2차 프로젝트 도중 옆 팀의 서버 관련 도움 역할로 참여했습니다.
        </li>
        <li>
          서버의 시작을 못 하여, Node 서버의 초기 설정을 해주고 중간중간
          도와주었습니다.
        </li>
        <li>
          구매자와 판매자의 회원가입과 로그인 관련 API를 구축해주고, 주석을
          첨부하여 참고 코드로 활용 할 수 있도록 했습니다.
        </li>
        <li>
          둘러보기 페이지를 위해 회원가입 시 구를 따로 중복 입력받는 부분을
          like문을 사용해 해결해 주었습니다.
        </li>
        <br />
        <br />
        <br />
        <Link to="/farmfarm2">2. 팜팜 서버 교체</Link>
        <span className="pjExplain">
          - Node 서버를 배운 후, 광인사 1차 프로젝트였던 팜팜의 서버를 Flask에서
          Node로 교체
        </span>
        <li>
          py파일 하나로 돌아갔던 팜팜의 Flask 서버를 Router를 사용한 Node서버로
          교체했습니다.
        </li>
        <br />
        <br />
        <br />
        <Link to="/farmfarm">1. 팜팜</Link>
        <span className="pjExplain">
          - 도심농부를 위한 텃밭 분양 플랫폼 (광인사 1차 프로젝트)
        </span>

        <li>
          1시간동안 Flask와 Oracle의 join 방법만 배운 후, ChatGPT와 인터넷
          검색을 통해 Flask서버와 Oracle DB를 구축하고 관리했습니다.
        </li>
        <li>
          주제가 정해진 후 뒤늦게 추가된 머신러닝 기능을 추가하기 위해, 필요한
          데이터를 찾아보고 수집하여 머신러닝을 이용한 농산물 가격 예측 모델을
          개발했습니다.
        </li>
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
  span {
    font-size: 20px;
  }
`;

// const ProjectBox = styled.div`
//   display: grid;
//   grid-template-columns: 0.3fr 0.85fr;
//   margin: 15px 0;

//   .pjTitle {
//     font-weight: bold;
//   }

//   .pjContent {
//     margin-left: 25px;
//   }
// `;
