import styled from "styled-components";

export const SectionRoomWrapper = styled.div`
    display: flex;
    flex-wrap: ${props => props.isWrap ? 'wrap' : 'nowrap'};
    margin: 0 -8px;
`