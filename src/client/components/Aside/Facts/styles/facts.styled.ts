import styled from "styled-components";
import { Plants, Birthday, Palm } from "../assets";

const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: auto;
    width: 100%;
    padding-top: 16px;
`;

const FactsListStyled = styled.div`
    overflow-x: scroll;
    display: flex;
    max-width: 100%;
    scroll-snap-type: x mandatory;
    box-sizing: border-box;
    scroll-behavior: smooth;
`;

const FactItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
    scroll-snap-align: center;
    scroll-snap-stop: always;
    min-width: 100%;
    max-width: 100%;
`;

const FactImageStyled = styled(Plants)`
    display: block;
    width: 100%;
    height: auto;
    max-width: 85px;
    max-height: 85px;
    margin: auto;
`;

const FactPalmImageStyled = styled(Palm)`
    display: block;
    width: 100%;
    height: auto;
    max-width: 85px;
    max-height: 85px;
    margin: auto;
`;

const FactBDayImageStyled = styled(Birthday)`
    display: block;
    width: 100%;
    height: auto;
    max-width: 85px;
    max-height: 85px;
    margin: auto;
`;

const FactTextStyled = styled.span`
    margin-top: 20px;
    display: block;
    color: ${({ theme }) => (theme.color.london)};
    text-align: center;
    font-family: iviSans;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
`;   

export {
    ContainerStyled,
    FactsListStyled,
    FactItemStyled,
    FactImageStyled,
    FactPalmImageStyled,
    FactBDayImageStyled,
    FactTextStyled,
}