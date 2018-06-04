export default {
    nextQuestion ({commit, state}, id) {
        commit('addAnswer',id)

        commit('addListNum', {num: 1})
    },
    getData ({state}) {
        fetch('/api')
        .then(res => {return res.json()})
        .then(data => {
            console.log(data.data)
            state.questionList = data.data
            console.log(state)
            })
    },
}