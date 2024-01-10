import React from 'react'
import { Error } from '../Error';
import { 
    BackToMainPageStyled,
    ReloadPageStyled,
    SafeUiContainerStyled,
} from './styles/errorBoundary.styled';
import { useClearAll } from '../../utils/clearAll';

type ErrorBoundaryState = {
    hasError: boolean;
  };
  

class ErrorBoundary extends React.Component {
    state: ErrorBoundaryState;

    constructor(props: any) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(_error: any) {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { 
            hasError: true 
        };
    }

    componentDidCatch(error: any, errorInfo: any) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        console.error(error, errorInfo);
    }

    handleReloadPageClick = () => useClearAll()

    render() {
        if (this.state.hasError) {
            return (
                <SafeUiContainerStyled>
                    <Error text="Что-то пошло не так. ='( " />
                    <ReloadPageStyled onClick={this.handleReloadPageClick}>
                        обновить страницу
                    </ReloadPageStyled>
                    <BackToMainPageStyled to='/'>
                        вернуться на главную
                    </BackToMainPageStyled>
                </SafeUiContainerStyled>
            );
        }

        // @ts-ignore
        return this.props?.children;
    }
}

export {
    ErrorBoundary
};