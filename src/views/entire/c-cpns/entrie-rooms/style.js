import styled from "styled-components";

export const EntireRoomWrapper = styled.div`
  position: relative;
  padding: 36px 24px;
  margin-top: 130px;
  .entrie-room-container{
    display: flex;
    flex-wrap: wrap;
  }
  .title{
    font-size: 22px;
    font-weight: 600;
  }
  .is-cover{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
  }
`