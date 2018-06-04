import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import 'whatwg-fetch'

Vue.use(Vuex)

const state = {
    questionList: [],
    listNum: 1, //第几题
    answerList: []
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})