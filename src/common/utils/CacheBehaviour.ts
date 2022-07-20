import { Behaviour, BehaviourEventInfo } from './Behaviour';

const enum UserBehaviourEvents {
    FirstVisit = 'first-visit',
    PageView = 'page-view',
    VideoView = 'video-view',
}

// источник трафика,  organic означает переход с поисковиков, other - прочие источники
const enum Referrer {
    Organic = 'organic',
    Other = 'other',
}

type UserEventInfo = {
    referrer: Referrer;
} & Partial<BehaviourEventInfo>;

const MS_A_DAY = 24 * 60 * 60 * 1000;


class CacheBehaviour extends Behaviour<UserBehaviourEvents> {

    protected prefix = 'cache-behaviour-event';

    constructor(storage: Storage) {
        super(storage);
    }

    /**
     * Сохраняем дату первого посещения сайта
     */
    saveFirstVisit(data?: UserEventInfo) {
        const firstVisitState = this.get(UserBehaviourEvents.FirstVisit);

        if (firstVisitState.length === 0) {
            this.add(UserBehaviourEvents.FirstVisit, data);
        }
    }

    /**
     * Количество дней с первого посещения сайта
     */
    getDaysFromFirstVisit(): number {
        const firstVisitState = this.get(UserBehaviourEvents.FirstVisit);
        const firstVisit = firstVisitState[0];

        if (!firstVisit) {
            this.saveFirstVisit();

            return 0;
        }

        const date = new Date();
        const firstVisitDate = new Date(firstVisit.date);

        return Math.round(
            Math.abs((date.getTime() - firstVisitDate.getTime()) / MS_A_DAY),
        );
    }
}

export { CacheBehaviour, UserBehaviourEvents, Referrer };
