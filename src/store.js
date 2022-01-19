export default {
    debug: false,
    user: null,
    token: null,
    get(state) {
        if (this.debug) console.log('gettMessageAction triggered with', state)
        return this[state]
    },
    set(state,value) {
        this[state] = value
    },
}