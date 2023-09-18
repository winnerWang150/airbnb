import styled from 'styled-components'

export const LeftWrapper = styled.div`
  flex: 1;
  .logo{
    display: flex;
    cursor: pointer;
    margin-left: 24px;
    color: ${props => props.theme.isHeaderAlpha? "#fff" : props.theme.color.primaryColor};
  }
`