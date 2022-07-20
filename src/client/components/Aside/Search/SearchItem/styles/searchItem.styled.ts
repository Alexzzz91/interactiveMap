import { Link } from "react-router-dom";
import styled from "styled-components";
import { Level } from "../../assets/img";

const Item = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 34px;
    max-height: 52px;
    padding: 0 12px;
    font-family: iviSans;
    font-size: 13px;
    line-height: 16px;
    color: ${({ theme }) => (theme.color.london)};
    background: transparent;
    cursor: pointer;
    
    &:hover {
        background: ${({ theme }) => (theme.color.nara)};
    }
`;

const NameColStyled = styled.div`
    display: flex;
    align-items: center;
`;

const ImageStyled = styled.img`
    display: inline-block;
    vertical-align: middle;
    height: 24px;
    width: 24px;
    min-width: 24px;
    margin-right: 8px;
    border-radius: 50%;
    background: #1a143b;
`;

const FloorIconStyled = styled(Level)`
    display: inline-block;
    vertical-align: middle;
    height: 16px;
    width: 16px;
    margin-right: 4px;
`;

const FlorTouchStyled = styled.div`
    display: flex;
    align-items: center;
`;

const FloorValueStyled = styled.div`
    display: inline-block;
    vertical-align: middle;
    opacity: 0.24;
`;

export {
    Item,
    ImageStyled,
    NameColStyled,
    FlorTouchStyled,
    FloorIconStyled,
    FloorValueStyled
}
