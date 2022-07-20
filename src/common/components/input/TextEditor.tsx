import { EditorState, ContentState, convertToRaw } from 'draft-js';
import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import {
    EditorContainerStyled,
    InputContainerStyled,
    TipStyled
} from './styles/input.styled';

type Props = {
    name: string;
    value?: string; 
    defaultValue?: string; 
    tip?: string;
    placeholder?: string;
    onChange(event: string): void;
}

const toolbar = {
    options: [
        'link', 
        'inline', 
        'list', 
        'history'
    ],
    inline: { inDropdown: true },
    list: { inDropdown: true },
    textAlign: { inDropdown: true },
    link: { inDropdown: true },
    history: { inDropdown: true },
};

const localization = {
    locale: 'ru',
};

const TextEditor: React.FC<Props> = (props) => {
    const {
        value = '',
        defaultValue = '',
        tip,
        placeholder="Название",
        onChange,
    } = props;

    const editor = React.useRef<Editor>(null);

    function focusEditor() {
        if (!editor?.current) {
            return;
        }

        editor?.current?.focusEditor();
    }

    const [editorState, setEditorState] = React.useState(() => {
        if (!value && !defaultValue) {
            return EditorState.createEmpty();
        }

        const contentBlock = htmlToDraft(value ?? defaultValue);

        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            return EditorState.createWithContent(contentState);
        }
    });

    const handleOnBlur = React.useCallback(() => {
        if (!editorState) {
            return;
        };

        return onChange(draftToHtml(convertToRaw(editorState?.getCurrentContent())));
    }, [onChange, editorState]);

    const handleOnChange = React.useCallback((state: EditorState) => {
        setEditorState(state);

        if (!state) {
            return;
        };

        return onChange(draftToHtml(convertToRaw(state?.getCurrentContent())));
    }, [onChange]);

    return (
        <InputContainerStyled onClick={focusEditor}>
            <EditorContainerStyled>
                <Editor
                    ref={editor}
                    editorState={editorState}
                    onEditorStateChange={handleOnChange}
                    localization={localization}
                    onBlur={handleOnBlur}
                    placeholder={placeholder}
                    toolbar={toolbar}
                />
            </EditorContainerStyled>
            {tip && (
                <TipStyled>
                    {tip}
                </TipStyled>
            )}
        </InputContainerStyled>
    );
};

export { 
    TextEditor
};
