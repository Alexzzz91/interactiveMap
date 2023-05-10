import styled from "styled-components";
import { Select } from "../../../../../common/components/input/Select";

const NoCitiesMesageStyled = styled.div`
    color: ${({ theme }) => (theme.color.london)};
    font-family: sans-serif;
    font-size: 18px;
    line-height: 24px;
    cursor: default;
`;

const NoCitiessMesageLinkStyled = styled.span`
    color: ${({ theme }) => (theme.color.london)};
    font-family: sans-serif;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
`;

const CitiesSelectStyled = styled(Select)`
    margin: 0;
    padding: 0;
    color: red;
    position: fixed;
`;

export {
    NoCitiesMesageStyled,
    NoCitiessMesageLinkStyled,
    CitiesSelectStyled,
}