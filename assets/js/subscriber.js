class Subscriber {
    subscribers = {}
    subscribe = (key, callback) => {
        if (!this.subscribers.hasOwnProperty(key)) {
            this.subscribers[key] = callback;
            return true;
        }
        console.warn('duplicate subscriber for key : ' + key);
        return false;
    }
    unsubscribe = (key) => {
        if (this.subscribers.hasOwnProperty(key)) {
            delete this.subscribers[key];
            return true;
        }
        console.warn('non existent subscriber for key : ' + key);
        return false;
    }
    handle = () => {
        for (const subscriber in this.subscribers) {
            this.subscribers[subscriber]();
        }
    }
}
