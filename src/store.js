import { Storage } from '@ionic/storage';

const store = new Storage();

(async () => {
    try {
        await store.create();
    } catch (e) {
        console.log('error initializing store');
        console.log(e);
    }
})();

export default {
    debug: false,
    async get(state) {
        if (this.debug) console.log('getMessageAction triggered with', state)
        return await store.get(state);
    },
    async set(state,value) {
        if (this.debug) console.log('setMessageAction triggered with', state, value)
        this[state] = value
        await store.set(state,value);
    },
}