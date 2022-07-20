// @ts-nocheck
import * as React from 'react';
import { Checkbox } from '../../../../../../common/components/Checkbox/Checkbox';

import {
    CustomResultItemStyled,
    CustomResultInfoContainerStyled,
    CustomResultInfoStyled,
    CaptionStyled,
    SubCaptionStyled,
} from '../styles/selectPanel.styled';

type Props = {
    caption?: string;
    value: string;
    subCaption?: string;
    checked?: boolean;
    withCheckbox?: boolean;
    onClick(value: string): void;
}

const CustomResultItem: React.FC<Props> = (props) => {
    const {
        caption,
        value,
        subCaption,
        checked,
        withCheckbox = false,
        onClick,
    } = props;

    const handleChecked = React.useCallback(() => onClick(value ? value : caption), [value, caption]);
    const handleOnChange = React.useCallback(() => {}, []);

    return (
        <CustomResultItemStyled 
            active={checked}
            onClick={handleChecked}
        >
            {withCheckbox && (
                <Checkbox
                    checked={checked}
                    onChange={handleOnChange}
                />
            )}
            <CustomResultInfoContainerStyled>
                <CustomResultInfoStyled>
                    <CaptionStyled>
                        {caption ? caption : value}
                    </CaptionStyled>
                    { subCaption && (
                        <SubCaptionStyled>
                            { subCaption }
                        </SubCaptionStyled>
                    )}
                </CustomResultInfoStyled>
            </CustomResultInfoContainerStyled>
        </CustomResultItemStyled>
    );
};

export { 
    CustomResultItem,
};
