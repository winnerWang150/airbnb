import styled from "styled-components";

export const SearchTabsWrapper = styled.div`
  .titles{
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.isHeaderAlpha? '#fff' : 'inherit'};
    .item{
      cursor: pointer;
      padding: 8px 0;
      margin-right: 16px;
      font-weight: 700;
      &.active{
        border-bottom: 2px solid ${props => props.theme.isHeaderAlpha ? '#fff' : 'black'};
      }
    }
  }
  
`