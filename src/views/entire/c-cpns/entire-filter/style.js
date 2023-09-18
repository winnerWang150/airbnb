import styled from "styled-components"

export const EntireFilterWrapper = styled.div`
  /* position: fixed;
  z-index: 9;
  top: 80px;
  left: 0;
  right: 0; */
  display: flex;
  align-items: center;
  height: 48px;
  padding-left: 16px;
  padding-left: 16px;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;
  .fitler-container{
    display: flex;
    .filter-item {
      padding: 6px 12px;
      border: 1px solid #dce0e0;
      border-radius: 4px;
      color: #484848;
      margin-right: 8px;
      &.active {
        background: #008489;
        border: 1px solid #008489;
        color: #ffffff;
      }
    }
  }
  &.fixed{
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    z-index: 1111;
  }

`