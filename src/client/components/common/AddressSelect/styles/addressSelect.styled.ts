import styled from "styled-components";
import { Select } from "../../../../../common/components/input/Select";

const NoAddressMesageStyled = styled.div`
    color: ${({ theme }) => (theme.color.london)};
    font-family: sans-serif;
    font-size: 18px;
    line-height: 24px;
    cursor: default;
`;

const NoAddressMesageLinkStyled = styled.span`
    color: ${({ theme }) => (theme.color.london)};
    font-family: sans-serif;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
`;

const AddressSelectStyled = styled(Select)`
    margin: 0;
    padding: 0;
    color: red;
    position: fixed;
`;

export {
    NoAddressMesageStyled,
    NoAddressMesageLinkStyled,
    AddressSelectStyled,
}