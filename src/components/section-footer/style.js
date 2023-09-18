import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
  display: flex;
  margin-top: 8px;
  margin-bottom: 24px;
  .container{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    font-size: 17px;
    font-weight: 700;
    color: ${props => props.color};
    &:hover{
      text-decoration: underline;
    }
  }
`