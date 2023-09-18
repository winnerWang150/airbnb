import styled from "styled-components";

export const SectionLongforWrapper = styled.div`
  /* .longfor{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    margin: 0 -8px;
  } */
  .longfor-item{
      width: 20%;
      padding: 0 8px;
      flex-shrink: 0;
      box-sizing: border-box;
      position: relative;
      .longfor-conver{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 60%;
        background-color: linear-gradient(180deg, rgba(0,0,0,0) 3%, rgba(0,0,0) 100%);
      }
    }
    .longfor-item-img{
      position: relative;
      padding: 133.3% 0 0;
      img{
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 5px;
        object-fit: cover;
        top: 0;
        left: 0;
      }
    }
    .longfor-item-text{
      position: absolute;
      left: 10px;
      right: 10px;
      bottom: 0px;
      padding: 0 24px 32px;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      .city{
        font-size: 18px;
        font-weight: 600;
      }
      .price{
        font-size: 14px;
        margin-top: 5px;
      }
    }

`