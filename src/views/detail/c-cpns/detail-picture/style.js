import styled from "styled-components";

export const DetailPictureWrapper = styled.div`
  position: relative;
  .pictures{
    
  }
  .pictures{
    display: flex;
    height: 600px;
    .pictures-left{
      width: 50%;
      height: 100%;
      .item{
        height: 100%;
        overflow: hidden;
      }
    }
    .pictures-left, .pictures-right{
      .item {
        position: relative;
        cursor: pointer;
        &:hover img{
          transform: scale(1.2, 1.2);
        }
      }
      .cover{
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          opacity: 0;
          transition: all 0.5s ease;
          &:hover{
            opacity: 0;
          }
        }
        /* .item:hover .cover{
          opacity: 0;
        } */
    }
    .pictures-right{
      width: 50%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      .item{
        width: 50%;
        height: 50%;
        overflow: hidden;
        border: 1px solid #000;
        box-sizing: border-box;
      }
    }
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
      transition: all 0.2s ease;
    }
    &:hover .cover{
      opacity: 1;
    }

  }
  .show-picture{
    position: absolute;
    bottom: 20px;
    right: 40px;
    border: 1px solid grey;
    cursor: pointer;
    padding: 4px 8px;
    background-color: white;
  }
`