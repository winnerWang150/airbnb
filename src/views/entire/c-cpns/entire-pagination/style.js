import styled from "styled-components";

export const EntirePaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .pagination{
  }
  .describe{

    margin-top: 16px;
  }
  .Mui-selected.MuiPaginationItem-page{
    background: #999;
    color: white;
  }
  .MuiPaginationItem-page{
    &:hover{
      text-decoration: underline;
    }
  }
`