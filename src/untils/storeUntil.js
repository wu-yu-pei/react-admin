import store from 'store'
 const storeUntil = {
    saveUser(user) {
        console.log(2);
        store.set('user_key',user)
    },
    getUser() {
        return store.get('user_key') || {}
    },
    removeUser() {
        store.remove()
    }
}
export default storeUntil