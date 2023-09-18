import styled from "styled-components";

export const SearchSectionsWrapper = styled.div`
  .search-section-container{
    display: flex;
    width: 850px;
    height: 66px;
    border-radius: 32px;
    border: 1px solid #ddd;
    background-color: #fff;
    .item{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 32px;
      flex: 1;
      .info{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0 30px;
        .title{
          font-weight: 700;
        }
      }
      .divide{
        width: 1px;
        height: 32px;
        background-color: #ddd;
      }
    }
  }

`