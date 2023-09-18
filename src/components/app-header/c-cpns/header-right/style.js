import styled from 'styled-components'


export const RightWrapper = styled.div`
  margin-right: 24px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${props => props.theme.isHeaderAlpha? '#fff' : props.theme.textColor.primaryColor};
  font-size: 14px;
  font-weight: 600;
  .btns{
    display: flex;
    align-items: center;
    cursor: pointer;
    &>span{
      margin-right: 20px;
      padding: 12px 15px;
      border-radius: 22px;
      &:hover{
        background-color: ${props => props.theme.isHeaderAlpha? 'rgba(255, 255, 255, 0.3)' : 'f5f5f5'};
      }
    }
    &>svg{
      margin-right: 20px;
      padding: 12px 15px;
      border-radius: 22px;
      &:hover{
        background-color: ${props => props.theme.isHeaderAlpha? 'rgba(255, 255, 255, 0.3)' : 'f5f5f5'};
      }
    }
  }
  .profile{
    position: fixed;
    display: flex;
    align-items: center;
    padding: 5px 5px 5px 12px;
    border: 1px solid #DDD;
    border-radius: 21px;
    background-color: #fff;
    color: ${props => props.theme.primaryColor};
    cursor: pointer;
    .avatar{
      margin-left: 12px;
    }
    .profile-menu{
      color: rgb(113, 113, 113);
    }
    ${props => props.theme.mixin.boxShadow}
    .pannel{
      >div{
        color: ${props => props.theme.textColor.primaryColor};
      }
      position: absolute;
      z-index: 999;
      right: 0px;
      top: 60px;
      width: 240px;
      border: 1px solid #ddd;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      border-radius: 22px;
      background-color: #fff;
      &-top, &-bottom{
        padding: 10px 0;
      }
      &-top{
        border-bottom: 1px solid ${props => props.theme.color.thirdColor};
      }
      .btn{
        padding: 10px;
        &:hover {
          background: ${props => props.theme.color.thirdColor};
        }
      }
    }
  }
`