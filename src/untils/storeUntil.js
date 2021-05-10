import store from 'store'
 const storeUntil = {
    saveUser(user) {
        store.set('user_key',user)
    },
    getUser() {
        return store.get('user_key') || {}
    },
    removeUser() {
        store.remove('user_key')
    }
}
export default storeUntil