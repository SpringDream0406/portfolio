import React from 'react'
import styled from 'styled-components'

const Certification = () => {
  return (
    <>
      <CertificationTitleWrap>Certification</CertificationTitleWrap>
      <CertificationBox>
        <div>
          <span>AI-900</span>
          <li>2023.11 - Microsoft</li>
        </div>
        <hr />
        <div>
          <span>SQLD</span>
          <li>2023.10 - 한국데이터산업진흥원</li>
        </div>
        <hr />
        <div>
          <span>MOS 2010</span>
          <li>2016.07 - Microsoft</li>
        </div>
      </CertificationBox>
    </>
  )
}

export default Certification

const CertificationTitleWrap = styled.div`
  border-left: green solid 10px;
  padding-left: 16px;
  font-size: 2.5rem;
  font-weight: bold;
`

const CertificationBox = styled.div`
  padding-left: 10px;
  margin-top: 20px;
  @media screen and (min-width: 1024px){
    & div{
      flex-direction: row;
      align-items: center;

      & li {
        margin-left: 100px;
      }
    }
  }
  @media screen and (max-width: 1023px){
    & div{
      flex-direction: column;
      align-items: start;
    }
  }

    & div {
      display: flex;
      

      & span {
        width: 150px;
        font-size: 1.4rem;
        font-weight: bold;
      }
    }
`