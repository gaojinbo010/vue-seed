const getters = {
    //for debug
    userList: state => state.dev.users,
    currentUser: state => state.dev.current,

    // formal
    token: state => state.user.token
}
export default getters;
