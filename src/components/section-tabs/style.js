import styled from "styled-components";

export const SectionTabsWrapper = styled.div`

    /* display: flex; */
    /* >div{
      flex-basis: 120px;
      padding: 14px 16px;
      border: 1px solid ${props => props.theme.borderColor.primaryColor};
      font-size: 17px;
      text-align: center;
      border-radius: 3px;
      margin-right: 16px;
      ${props => props.theme.mixin.boxShadow}
    } */

    /* & .active{
      color: white;
      background: ${props => props.theme.color.secondaryColor};
    } */
    .context>div{
      flex-shrink: 0;
      white-space: nowrap;
      box-sizing: border-box;
      flex-basis: 120px;
      padding: 14px 16px;
      border: 1px solid ${props => props.theme.borderColor.primaryColor};
      font-size: 17px;
      text-align: center;
      border-radius: 3px;
      margin-right: 16px;
      ${props => props.theme.mixin.boxShadow}
    }
    & .active{
      color: white;
      background: ${props => props.theme.color.secondaryColor};
    }
`