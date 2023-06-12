import styled from 'styled-components';
import SVGInline from 'react-svg-inline';
import { Link } from 'react-router-dom';

const LevelStyled = styled(SVGInline)`
	position: relative;
	width: 100%;
	height: 100%;
	cursor: pointer;
	pointer-events: auto;
	transition: opacity 1s, transform 1s;
	transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
	transform-style: preserve-3d;
`;

const setCurrentArea = ({ currentArea } : LevelDivProps) => {
    if (!currentArea) {
        return;
    }
    
    return `
        *[data-mapid='${currentArea}'] {
            stroke: #5E4BD4;
            stroke-opacity: 0.2;
            stroke-width: 2px;
            fill: #5E4BD4;
            fill-opacity: 0.6;
        }
    `;
};

const setCurrentWordplace = ({ currentWorkplace } : LevelDivProps) => {
    if (!currentWorkplace) {
        return;
    }
    
    return `
        #workplaces {
            *[data-workplaceid='${currentWorkplace}'] > rect {
                fill: #5E4BD4!important;
                fill-opacity: 1!important;
            }
            *[data-workplaceid='${currentWorkplace}'] > g > rect {
                fill: #FFFFFF!important;
                fill-opacity: 1!important;
            }
        }
    `;
};


const setCurrentPoster = ({ currentPoster } : LevelDivProps) => {
    if (!currentPoster) {
        return;
    }
    
    return `
        *[data-posterid='${currentPoster}'] {
            fill: #5E4BD4;
            fill-opacity: 1;
        }
    `;
};

type LevelProps = {
    level: number;
}

const setLevel = ({ level }: LevelProps) => {
    return ``;
    // return `
    //     transform: translateZ(${(level - 1) * 10}vmin);
    // `;
};

type CurrentLevelProps = {
    activelevel: number;
} & LevelProps;

const isCurrent = ({ level, activelevel }: CurrentLevelProps) => {
    if (level === activelevel) {
        return `
            opacity: 1;
            transform: unset;
        `;
    }

    if (!activelevel) {
        return `
            opacity: 1;
        `;
    }

    const additionalHeight = 100 + (level * 10);

    return `
        opacity: 0;
        transform: translateY(${level < activelevel ? `-${additionalHeight}`: `${additionalHeight}`}vmin); 
    `;
};

type LevelDivProps = {
    activeContent?: string;
    currentArea?: string;
    currentWorkplace?: string;
    currentPoster?: string;
    workplacesIsTaken?: string[];
    unavailablePlaces?: string[];
} & CurrentLevelProps;

const LevelDiv = styled.div<LevelDivProps>`
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    pointer-events: auto;
    transition: opacity .5s, transform .4s;
    transition-timing-function: cubic-bezier(0, 0, 1, -0.15);
    transform-style: preserve-3d;

    &:not(:first-child) {
        position: absolute;
        top: 0;
        left: 0;
    }

    svg {
        border: 5px;
        border-style: solid;
        border-color: transparent;
        fill: black;

        *[data-mapid]:hover {
            fill: rgb(94 75 212 / 80%);
            fill-opacity: 0.8;
        }

        #workplaces {
            *[data-workplaceid]{
                &:hover {
                    fill: rgb(97 82 168);
                    fill-opacity: 0.99;
                    > * {
                        fill: rgb(97 82 168);
                        fill-opacity: 0.99;
                    }
                    > g > rect {
                        fill: #FFFFFF;
                        fill-opacity: 1;
                    }
                }
            }
        }
        #posters {
            *[data-posterid]:hover {
                fill: rgb(97 82 168);
                fill-opacity: 0.99;
            }
        }
    }

    ${(props) => setLevel(props)}
    ${(props) => isCurrent(props)}
    ${(props) => setCurrentArea(props)}
    ${(props) => setCurrentWordplace(props)}
    ${(props) => setCurrentPoster(props)}

    ${(props) => takenWorkplaces(props)}
    ${(props) => unavailablePlaces(props)}
`;

function templateWorkplaces(id?: string,) {
    if (!id) {
        return `
            #workplaces {
                *[data-workplaceid] {
                    opacity: 0.9;
                }
            }
        `;
    }

    return `
        #workplaces {
            *[data-workplaceid='${id}'] {
                fill: #E7E3FF;
                fill-opacity: 0.99;
                opacity: 1;
                > * {
                    fill: #E7E3FF;
                    fill-opacity: 0.99;
                }
            }
        }
    `;
}

function takenWorkplaces({ workplacesIsTaken = [] }: LevelDivProps) {
    let str = templateWorkplaces();

    workplacesIsTaken?.forEach((id) => {
        str += templateWorkplaces(id)
    });

    return str;
}

function templateUnavailablePlaces(id: string) {
    return `
        #areas {
            *[data-mapid='${id}'] {
                fill: #5e5973;
                fill-opacity: 0.3;
                cursor: not-allowed;
                pointer-events: none;
                cursor: not-allowed;
                stroke: #3A355A;
                stroke-opacity: 0.3;
            }
        }
    `;
}

function unavailablePlaces({ unavailablePlaces = [] }: LevelDivProps) {
    let str = '';

    unavailablePlaces?.forEach((id) => {
        str += templateUnavailablePlaces(id)
    });

    return str;
}

const LevelLink = styled(Link)<LevelDivProps>`
    width: 10%;
    height: 10%;
    cursor: pointer;
    pointer-events: auto;
    // transition: opacity .5s, transform .4s;
    // transition-timing-function: cubic-bezier(0, 0, 1, -0.15);
    // transform-style: preserve-3d;
    // position: absolute;

    &:not(:first-child) {
        top: 0;
        left: 0;
    }
    
    // &:after {
    //     content: attr(level);
    //     left: 50px;
    //     top: -50px;
    //     position: absolute;
    //     color: black;
    //     font-size: 20px;
    //     transform: rotateX(269deg) rotateY(320deg);
    // }

    svg {
        transition: .4s;
        border: 5px;
        border-style: solid;
        border-color: transparent;
        fill: black;
    }

    &:hover {
        svg {
            border: 5px;
            border-style: solid;
            border-color: ${({ theme }) => (theme.color.axum)};
            box-shadow: 0 0 10px ${({ theme }) => (theme.color.axum)};
        }
    }

    ${(props) => setLevel(props)}
    ${(props) => isCurrent(props)}
`;

const TooltipInnerStyled = styled.div`
    min-width: 250px;
`;

export {
    LevelStyled,
    LevelDiv,
    LevelLink,
    TooltipInnerStyled,
}