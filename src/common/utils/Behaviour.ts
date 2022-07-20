import { Utils } from './Utils';

type BehaviourEventInfo = {
    [key: string]: any;
    date: string; // (new Date()).toString()
};

type BehaviourEventState = BehaviourEventInfo[];

class Behaviour<Events extends string> {
    private readonly storage: Storage;

    protected prefix = 'behaviour-event';

    constructor(storage: Storage) {
        this.storage = storage;
    }

    add(event: Events, data: Partial<BehaviourEventInfo> = {}) {
        const nextState: BehaviourEventState = this.getState(event);
        const eventInfo: BehaviourEventInfo = {
            date: (new Date()).toString(),
            ...data,
        };

        nextState.push(eventInfo);

        this.setState(event, nextState);
    }

    replace(event: Events, nextState: BehaviourEventState = [{
        date: (new Date()).toString(),
    }]) {
        this.setState(event, nextState);
    }

    get(event: Events): BehaviourEventState {
        return this.getState(event);
    }

    protected getBefore(event: Events, date: Date): BehaviourEventState {
        const state = this.getState(event);
        const time = date.getTime();

        return state.filter((eventInfo) => {
            return (new Date(eventInfo.date)).getTime() <= time;
        });
    }

    protected getAfter(event: Events, date: Date): BehaviourEventState {
        const state = this.getState(event);
        const time = date.getTime();

        return state.filter((eventInfo) => {
            return (new Date(eventInfo.date)).getTime() >= time;
        });
    }

    protected getBetween(event: Events, from: Date, to: Date): BehaviourEventState {
        const state = this.getState(event);
        const fromTime = from.getTime();
        const toTime = to.getTime();

        return state.filter((eventInfo) => {
            const eventTime = (new Date(eventInfo.date)).getTime();

            return eventTime >= fromTime && eventTime <= toTime;
        });
    }

    protected getState(event: Events): BehaviourEventState {
        const state = this.storage.getItem(this.makeKey(event)) || '';

        return Utils.parseJSON(state, []) || [];
    }

    protected setState(event: Events, state: BehaviourEventState) {
        let strState: string;

        try {
            strState = JSON.stringify(state);
        } catch {
            strState = JSON.stringify([]);
        }

        try {
            this.storage.setItem(this.makeKey(event), strState);
        } catch {}
    }

    private makeKey(event: Events): string {
        return `${this.prefix}:${event}`;
    }
}

export { Behaviour };
export type {
    BehaviourEventInfo,
    BehaviourEventState,
};
