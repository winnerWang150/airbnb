import styled from 'styled-components'


export const HeaderWrapper = styled.div`
  ${props => !props.theme.isHeaderAlpha && 'border-bottom: 1px solid #eee;'}
  .top{
    z-index: 9999;
    position: relative;
    background-color: rgba(255, 255, 255, ${props => props.theme.isHeaderAlpha? 0 : 1});
    overflow: hidden;
    .context{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;
    }
    /* .context-extend{
    } */
  }
  &.fixed{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 9999;
  }
  .cover{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }
  .left-header {
        
  }
  .middle-header {

  }

  .right-header {

  }
`

export const ContextExtendWrapper = styled.div`
  height: ${props => props.isShowCoverHandler ? '100px' : '0px' };
  transition: all 0.2s ease;
` 