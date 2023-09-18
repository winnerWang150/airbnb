import styled from 'styled-components'

export const SectionHeaderWrapper = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   margin-bottom: 20px;
   padding-top: 16px;
   cursor: pointer;
   &:hover .more{
    display: block;
   }
  .more{
    margin-left: 10px;
    display: none;
  }
  .title{
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 8px;
  }

`