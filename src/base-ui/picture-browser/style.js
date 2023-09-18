import styled from "styled-components";

export const PictureBrowserWrapper = styled.div`
display: flex;
flex-direction: column;
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
background: #333;
  .picture-browser-top{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 60px;
    .icon-close{
      margin-right: 30px;
    }
  }
  .picture-browser-indicator{
    margin-top: 10px;
    height: 100px;
    /* background-color: white; */
  }
  .picture-browser-list{
    flex: 1;
    /* background-color: yellow; */
    position: relative;
    display: flex;
    justify-content: center;
    .control{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      .btn{
        cursor: pointer;
        display: flex;
        width: 83px;
        height: 100%;
        align-items: center;
        justify-content: center;
      }
    }
    .picture{
      position: relative;
      width: 100%;
      height: 100%;
      max-width: 105vh;
      overflow: hidden;
      img{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
      }
    }
  }
  .pic-enter{
    transform: translateX(${props => props.isNext ? 100 : -100}%);
    opacity: 0;
  }
  .pic-enter-active{
    transform: translate(0);
    opacity: 1;
    transition: all 0.2s ease;
  }
  .pic-exit{
    opacity: 1;
  }
  .pic-exit-active{
    opacity: 0;
    transition: all 0.2s ease;
  }
  .picture-browser-indicator{
    color: white;
    position: relative;
    display: flex;
    justify-content: center;
    .toggle{
      svg{
        transition: all 0.5 ease;
        transform: rotate(${props => props.isShowList? '0' : '180deg'});
      }
    }
    .info-position{
      margin: 0 auto;
      position: absolute;
      bottom: 10px;
      width: 105vh;
      overflow: hidden;
    }
    .info-container{
      display: flex;
      justify-content: space-between;
      .info{
        display: flex;
      }
    }
    .dot{
      margin-right: 10px;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      img{
        height: 67px;
      }
      .cover{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
      }
      .item{
        opacity: 0.5;
      }
      .isActive{
        opacity: 1;
      }
    }
    .indicator{
      height: ${props => props.isShowList? '67px' : '0px'};
      transition: all 0.2s ease;
    }

  }
`