
import styled from "styled-components";

const AttributesToolsStyled = styled.div`
    position: absolute;
    display: inline-flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    // background-color: ${({ theme }) => theme.color.havana};
    background-color: rgb(247 245 255 / 25%);
    width: 100%;
    font-size: 14px;

    &>label {
        margin-left: 8px;
        color: ${({ theme }) => theme.color.berbera}; 
    }
    & [name='tagName'] {
      width: 40px;
    }
    & [name='id'] {
      width: 80px;
    }
    & [name='x'],
    & [name='y'],
    & [name='cx'],
    & [name='cy'],
    & [name='rx'],
    & [name='ry'],
    & [name='r'],
    & [name='width'],
    & [name='height'],
    & [name='stroke'],
    & [name='stroke-width'] {
      width: 35px;
    }
    & [name='font-size'] {
      width: 40px;
    }
    & [name='font-family'] {
      width: 90px;
    }
    & [name='d'] {
      width: 120px;
    }
  }
`;

export {
    AttributesToolsStyled,
}