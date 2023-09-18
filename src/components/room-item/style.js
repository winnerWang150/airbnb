import styled from "styled-components";

import { Rating } from "@mui/material";


export const RoomItemWrapper = styled.div`
  width: ${props => props.itemwidth};
  padding: 8px;
  box-sizing: border-box;
  ${props=> !props.isWrap? 'flex-shrink: 0;' : ''}
  .cover{
    position: relative;
    padding: 66% 0 0 ;
    img{
      object-fit: cover;
      border-radius: 5px;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
  }
  .describe{
    margin: 8px 0;
    font-size: ${props => props.theme.fontSize.thirdSize};
    color: ${props => props.verifyinfocolor};
  }
  .name{
    font-weight: 600;
    overflow: hidden;  
    text-overflow: ellipsis; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
  }
  .price{
    margin-top: 8px;
  }
  .rating{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .count{
      margin-left: 4px;
      font-size: 12px;
    }
  }
  .comments{
    margin-left: 4px;
  }

  .indicator{
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
  }
  .dot-item{
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dot{
    display: flex;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    border: 1px solid white;
  }
  .isActive {
    background-color: white;
    border-radius: 50%;
    width: 8px;
    height: 8px;
  }

`
export const RatingCpn = styled(Rating)`

    font-size: 12px !important;
    & .MuiRating-iconFilled{
      color: ${props => props.fillcolor};
    }
    & .MuiRating-decimal{
      margin: -1px;
    }
`

export const SwiperWrapper = styled.div`
  position: relative;
  .control{
    opacity: 0;
    transition: all 0.2s ease;
  }
  &:hover .control{
    opacity: 1;
  }
  .left{
    cursor: pointer;
    z-index: 1000;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
  }
  .right{
    cursor: pointer;
    z-index: 1000;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
  }

` 