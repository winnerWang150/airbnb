import styled from 'styled-components'

export const MiddleWrapper = styled.div`
  max-width: 850px;
  min-width: 348px;
  height: 48px;
  .search{
    width: 300px;
    height: 48px;
    border: 1px solid #DDD;
    border-radius: 22px;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    box-sizing: border-box;
    &-frame{
      padding-left: 16px;
      color: ${props => props.theme.isHeaderAlpha? '#fff' : 'inherit'};
      font-weight: 600;
    }
    &-icon{
      
      color: #fff;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${props => props.theme.color.primaryColor};
    }
    ${props => props.theme.mixin.boxShadow}
  }
  .searchDetail{
    position: relative;
    .search-sections{
      position: absolute;
      top: 66px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .detail-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .detail-exit-active {
    transition: all 200ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 200ms ease;
  }

  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 200ms ease;
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .bar-exit {
    opacity: 0;
  }
`