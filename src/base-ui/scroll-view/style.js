import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
  padding: 8px 0px;
  position: relative;
  .scroll-container{
    overflow: hidden;
    position: relative;
  }
  .left{
    position: absolute;
    padding: 10px;
    left: 0px;
    top: 50%;
    z-index: 1000;
    transform: translate(-50%, -50%);
    ${props => props.theme.mixin.arrayBtn}
  }
  .right{
    position: absolute;
    padding: 10px;
    top: 50%;
    transform: translate(50%, -50%);
    right: 0px;
    z-index: 1000;
    transform: translate(50%, -50%);
    ${props => props.theme.mixin.arrayBtn}
  }
  .context {
    display: flex;
    transition: transform 0.2s ease;
  }
`