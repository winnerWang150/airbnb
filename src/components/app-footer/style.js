import styled from 'styled-components'

export const FooterWrapper = styled.div`
  border: 1px solid ${props => props.theme.borderColor.primaryColor};
  .footer-content{
    width: 1032px;
    margin: 30px auto 0;
    padding-bottom: 16px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${props => props.theme.borderColor.primaryColor};
    &>item{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    .item-inner>div{
        padding: 2px;
      }
    .spec{
        font-weight: 600;
        margin-bottom: 16px;
        color: ${props => props.theme.textColor.secondaryColor};
      }
  }
  .copy-right{
    width: 1032px;
    margin: 30px auto 60px;
    text-align: center;
  }
`
