import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideContents = () => {

  return (
    <SideContentsBox>
      <Link to='/farmfarm2'>2. 팜팜 서버 변경</Link> <br />
      <Link to='/farmfarm'>1. 팜팜</Link>
    </SideContentsBox>
  );
};
export default SideContents

const SideContentsBox = styled.div`
  margin-top: 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  a {
    margin-bottom: 20px;


    &:hover{
      color: green;
      text-decoration: underline;
    }
  }
`