<template>
    <div>
        <div class="source-box">
            <div class="source">{{20 * rightAnswerNum}}分!</div>
            <div class="intr">
                你说，是不是把知识都还给小学老师了
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
export default {
    name: 'result',
    data() {
        return {
            rightOptionArr: [3, 6, 9, 15, 18, 23],
            rightAnswerNum: 0, //答对的数量
        }
    },
    computed: {
        ...mapState(['answerList'])
    },
    methods: {
        getSource: function () {
            this.answerList.map((item, index) => {
                if (item == this.rightOptionArr[index]) {
                    this.rightAnswerNum++
                }
            })
        }
    },
    created() {
        this.getSource()
        document.body.style.backgroundImage = 'url(/static/img/4-1.jpg)'
    }
}
</script>

<style scoped>
.source-box {
    width: 9.7rem;
    height: 9.1rem;
    background: url('../../images/4-2.png') no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 0;
    position: relative;
    margin-top: 2rem;
}
.intr {
    position: absolute;
    top: 7rem;
    width: 9rem;
    left: 0.6rem;
    color: #3e2415;
    font-size: 0.65rem;
    text-align: center;
}
.source {
    position: absolute;
    width: 100%;
    text-indent: 3.3rem;
    top: 4.7rem;
    font-size: 1.4rem;
    font-weight: 900;
    -webkit-text-stroke: 0.05rem #412318;
    font-family: 'Microsoft YaHei';
    color: tomato;
}
</style>