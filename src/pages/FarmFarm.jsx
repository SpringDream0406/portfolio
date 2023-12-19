import React from 'react'
import styled from 'styled-components'

const FarmFarm = () => {
  return (
    <PjExplainField>
      FarmFarm
    </PjExplainField>
  )
}

export default FarmFarm

const PjExplainField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  padding-top: 85px;
  padding-bottom: 85px;
  margin: auto;
  @media screen and (max-width: 1024px){
    width: 80%;
  }
`