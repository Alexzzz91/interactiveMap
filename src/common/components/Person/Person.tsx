import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { 
    ContainerStyled,
    PersonInfoBlockStyled,
    PersonNameStyled,
    PersonPositionStyled,
    ImageContainerStyled,
    ImageStyled,
    CopyLinkStyled,
    PortalLinkStyled,
} from './styles/person.styled';
import { copyToClipboard } from '../../utils/copyToClipBoard';
import { Checkbox } from '../Checkbox/Checkbox';
import { toastOptions } from '../../../client/components/app';
import { IDbUser } from '../../../client/IndexedDB/staff/loadStaff';

type IPersonProps = {
    person: IDbUser;
    checked?: boolean;
    hideCopyLink?: boolean;
    onChecked?(id: string): void;
};

const Person: React.FC<IPersonProps> = (props) => {
    const {
        person,
        onChecked,
        checked = false,
        hideCopyLink = false
    } = props;

    const { avatar } = person;

    const history = useHistory();

    const [avatarSrc, setAvatarSrc] = React.useState(avatar);

    React.useEffect(() => {
        setAvatarSrc(avatar);
    }, [avatar]);

    const handleCopyLinkClick = React.useCallback(() => {
        const { origin } = window.location;

        const personLink = !person.floor && (!person.mapid && !person.workplaceid) 
        ? `/us_${person.id}` 
        : person.workplaceid ? `/fl${person.floor}wp${person.workplaceid}` : `/fl${person.floor}place${person.mapid}`;

        copyToClipboard(`${origin}${personLink}`)
        // @ts-ignore
        .then(() => toast.info(`Вы скопировали ссылку на профиль "${person.name}"`, toastOptions))
        // @ts-ignore
        .catch(() => toast.error("произошла ошибка при копированни ссылки на профиль", toastOptions));
    }, [person, history]);

    const handlePortalLinkClick = React.useCallback(() => {
        if (!person?.username) {
            return;
        }

        const newTab = window.open(`${person.username}`, '_blank');

        if (newTab) {
            newTab.focus();
        }
    }, [person]);

    const handleOnChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        if (person.id){
            return;
        }
        event.preventDefault();
        // @ts-ignore
        onChecked(person.id);
    }, [onChecked, person]);

    const handleClick = React.useCallback((event: React.MouseEvent) => {
        if (!onChecked) {
            return;
        }

        event.preventDefault();
        onChecked(person.id);
    }, [onChecked, person]);

    const handleOnError = React.useCallback(() => {
        setAvatarSrc(person.defaultAvatar);
    }, [person, setAvatarSrc]);

    const personLink = !person.floor && (!person.mapid && !person.workplaceid) 
        ? `/us_${person.id}` 
        : person.workplaceid ? `/fl${person.floor}wp${person.workplaceid}` : `/fl${person.floor}place${person.mapid}`;

    return (
        <ContainerStyled
            to={!onChecked ? personLink : '#'}
            activeelem={checked ? '1' : '0'}
            onClick={handleClick}
        >
            {(!onChecked && !!avatar) && (
                <ImageContainerStyled>
                    <ImageStyled
                        src={avatarSrc}
                        onError={handleOnError}
                        hasContainer={true}
                    />
                </ImageContainerStyled>
            )}
            {!!onChecked && (
                <Checkbox
                    checked={checked}
                    onChange={handleOnChange}
                />
            )}

            <PersonInfoBlockStyled>
                <PersonNameStyled>
                    {person.name}
                    {!person.name && person.username}
                </PersonNameStyled>

                <PersonPositionStyled>
                    {person.position}
                </PersonPositionStyled>
            </PersonInfoBlockStyled>
            {!hideCopyLink && (
                <PortalLinkStyled onClick={handleCopyLinkClick} />
            )}
            {!hideCopyLink && (
                <CopyLinkStyled onClick={handlePortalLinkClick} />
            )}
        </ContainerStyled>
    );
};

export { Person };
