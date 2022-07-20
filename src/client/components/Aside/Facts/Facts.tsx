
import * as React from 'react';
import { searchStaffHasBDay, searchStaffInVacation } from '../../../IndexedDB/staff/searchStaff';
import { IDbUser } from '../../../IndexedDB/staff/loadStaff';
import { mapAppDb } from '../../../IndexedDB';
import { Person } from '../../../../common/components/Person/Person';
import { throttle } from '../../../../common/utils/throttle';

import { 
    ContainerStyled,
    FactsListStyled,
    FactItemStyled,
    // FactImageStyled,
    FactPalmImageStyled,
    FactBDayImageStyled,
    FactTextStyled,
} from './styles/facts.styled';

const Facts = () => {
    const currentElementIndex = React.useRef<number>(0);
    const mouseIntered = React.useRef<boolean>(false);
    const factsListRef = React.useRef<HTMLDivElement>(null);
    const [staffActions, setStaffActions] = React.useState<IDbUser[]>([]);

    const getPersons = React.useCallback(async () => {
        const personsHasBDay = await searchStaffHasBDay();
        const personsInVacation = await searchStaffInVacation();
        const staffActions = personsHasBDay.concat(personsInVacation);


        if (staffActions.length) {
            setStaffActions(staffActions);
        }
    }, [setStaffActions]);

    React.useEffect(() => {
        const debounceGetPersons = throttle(() => getPersons(), 2000);
        mapAppDb.staff.hook("creating", debounceGetPersons);
        debounceGetPersons();

        return () => {
            mapAppDb.staff.hook('creating').unsubscribe(debounceGetPersons);
          };
    }, []);

    React.useEffect(() => {
        if (!factsListRef.current) {
            return;
        }

        let intervalId: number | undefined = 0;

        function nextElement() {
            if (mouseIntered.current || !factsListRef.current?.children) {
                return;
            }

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(({ target, isIntersecting }, i) => {
                    if (isIntersecting) {
                        currentElementIndex.current = i;
                        currentElementIndex.current++; 

                        if (currentElementIndex.current >= children.length) {
                            currentElementIndex.current = 0;
                        }

                        const nextItem = children[currentElementIndex.current] as HTMLElement;

                        if (nextItem && factsListRef.current) {
                            const nextScroll = nextItem.offsetLeft;
                            factsListRef.current.scrollTo(nextScroll, 0);
                        }

                        observer.disconnect();
                    }
                    observer.unobserve(target);
                });
            }, {
                threshold: 1.0
            });

            const children = factsListRef.current.children;

            for (const item in children) {
                if (Object.prototype.hasOwnProperty.call(children, item)) {
                    const element = children[item];
                    observer.observe(element);
                }
            }
        }

        const stopCarousel = () => {
            window.clearTimeout(intervalId);
            intervalId = undefined;
        };

        const inspectVisible = () => {
            if (document.visibilityState === 'visible') {
                intervalId = window.setInterval(nextElement, 7500);
            } else {
                stopCarousel();
            }
        };

        document.addEventListener("visibilitychange", inspectVisible)
        inspectVisible();

        return () => {
            stopCarousel();
            document.removeEventListener("visibilitychange", inspectVisible)
        };
    }, [currentElementIndex, factsListRef.current, mouseIntered]);

    const handleMouseEnter = React.useCallback(() => {
        mouseIntered.current = true;
    }, [mouseIntered]);

    const handleMouseLeft = React.useCallback(() => {
        mouseIntered.current = false;
    }, [mouseIntered]);

    if (!staffActions.length) {
        return null;
    }

    return (
        <ContainerStyled
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeft}
        >
            <FactsListStyled ref={factsListRef}>
                {staffActions.map((person) => (
                    <FactItemStyled key={person.id}>
                        <FactTextStyled>
                            {!!person.inVacation && !person.isBirthday && 'В отпуске'}
                            {!person.inVacation && !!person.isBirthday && 'С ДНЕМ РОЖДЕНИЯ!!!'}
                        </FactTextStyled>
                        {!!person.inVacation && !person.isBirthday && (
                            <FactPalmImageStyled/>
                        )}
                        {!person.inVacation && !!person.isBirthday && (
                            <FactBDayImageStyled/>
                        )}
                        <Person person={person}/>
                    </FactItemStyled>
                ))}
            </FactsListStyled>
        </ContainerStyled>
    );
};

export { Facts };
