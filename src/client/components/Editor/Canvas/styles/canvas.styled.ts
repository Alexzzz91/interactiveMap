import styled from "styled-components";

type EditorContainerProps = {
    withAside: boolean;
}

const EditorContainerStyled = styled.div<EditorContainerProps>`
    position: relative;
    width: ${({ withAside }) => withAside ? 'calc(100% - 350px)' : '100%'};
    height: 100vh;
`;

const EditorStyled = styled.div`
    font-size: 8pt;
    font-family: Verdana, Helvetica, Arial;
    color: #000000;
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;

    svg {
        #areas {
            * {
                stroke: ${({ theme }) => theme.color.dublin};
                stroke-opacity: 1;
                position: relative;

                &::before {
                    content: 'kek';
                    color: red;
                    top: 2px;
                    left: 2px;

                }
            }
        }
        #selectorParentGroup {
            > rect,
            > g > path {
                opacity: 0.1;
            }
            circle {
                opacity: 0.25;
                &: hover {
                    opacity: 1;
                }
            }
        }
    }
`;

export {
    EditorContainerStyled,
    EditorStyled
}