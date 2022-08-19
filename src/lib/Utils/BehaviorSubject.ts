export class BehaviorSubject<T> {

    private _subscribers: {subscriberName: string, cb: (value: T) => void}[] = [];

    private currentValue: T;

    constructor(props:T) {
        this.currentValue = props;
    }

    getCurrentValue = () => {
        return this.currentValue;
    }

    subscribe = (subscriberName: string, cb: (value: T) => void) => {
        this._subscribers.push({ subscriberName, cb });
        cb(this.currentValue);
    }

    unsubscribe = (subscriberName: string) => {
        this._subscribers.splice(this._subscribers.findIndex((value) => value.subscriberName === subscriberName), 1);
    }

    next = (next: T) => {
        this.currentValue = next;
        this._subscribers.forEach((sub) => {
            sub.cb(this.currentValue);
        })
    }
}