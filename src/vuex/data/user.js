export default {
    state: {
        token: 'oldToken',
        isCollapse: false
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        isCollapse(state){
            state.isCollapse= !state.isCollapse;
        }
    },
    actions: {
        setToken(context, token) {
            context.commit('setToken', token);
        },
        isCollapse({commit},isCollapse){
            commit('isCollapse', isCollapse);
        }
    }

}