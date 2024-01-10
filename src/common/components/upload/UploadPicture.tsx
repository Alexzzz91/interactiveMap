import React, { FC, useCallback, useState } from 'react';
import { Add48 } from '../icons';

import {
    UploadSectionStyled,
    UploadInputStyled,
    UploadTextStyled,
    ImgPreviewStyled,
    PreviewContainerStyled,
    ClearPreview,
} from './styles/uploadPicture.styled';

type UploadPictureResult = {
    img: string;
    name: string;
}

type Props = {
    value?: string; 
    caption?: string;
    onChange(result: UploadPictureResult | null): void;
}

const UploadPicture: FC<Props> = (props) => {
    const {
        value,
        caption = 'Загрузите фотографию',
        onChange,
    } = props;

    const [imgPreview, setImgPreview] = useState<string>(value || '');
    
    const handleClearClick = useCallback(() => {
        setImgPreview('');
        onChange(null);
    }, [setImgPreview]);

    const handleOnChange = useCallback((event: any) => {
        const {
            target: {
                validity,
                files: [file]
            },
        } = event;

        event.preventDefault();

        if (file && validity.valid) {
            onChange({
                img: file,
                name: file.name,
            });

            const reader = new FileReader();

            reader.onload = (e: ProgressEvent<FileReader>) => {
                if (typeof e?.target?.result === 'string') {
                    setImgPreview(e?.target?.result);
                } else {
                    alert('УВАГА!!! при чтении файла произошла ошибка');
                }
            };
        
            reader.readAsDataURL(file);
        
          } else {
            alert('УВАГА!!! файл не загрузился');
          }
    }, [setImgPreview, onChange]);
    
    return (
        <UploadSectionStyled>
            {!imgPreview && ( 
                <>
                    <Add48 />
                    <UploadTextStyled>
                        { caption }
                    </UploadTextStyled>
                    <UploadInputStyled 
                        type='file' 
                        onChange={handleOnChange} 
                        accept="image/*" 
                    />
                </>
            )}
            {imgPreview && (
                <PreviewContainerStyled>
                    <ClearPreview onClick={handleClearClick} >
                        очистить
                    </ClearPreview>
                    <ImgPreviewStyled src={imgPreview} />
                </PreviewContainerStyled>
            )}
        </UploadSectionStyled>
    );
};

export { 
    UploadPicture
};

export type {
    UploadPictureResult, 
};