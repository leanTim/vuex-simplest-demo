export default {
    addListNum (state, payload) {
        state.listNum += payload.num
    },
    
    addAnswer (state, id) {
        state.answerList.push(id)
        console.log(state.answerList)
    }
}