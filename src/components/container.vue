<template>
	<div>
		<header class="header">
			<img style="display: none" src="../images/1-1.jpg" alt="">
			<span v-if="fa === 'home'" class="head-tips">第一周</span>
			<span v-if="fa === 'list'" class="head-tips">第{{listNum}}题</span>
		</header>
		<div v-if="fa == 'home'">
			<div class="middle logo-one"></div>
			<router-link to="list" class="start button-style"></router-link>
		</div>
		<div v-if="fa === 'list'">
			<div class="middle logo-two">
				<div class="answer-container">
					<header class="list_title">{{questionList[listNum - 1].question}}</header>
					<ul class="item_ul">
						<li class="item_list" :class="{'choosed': itemIndex == index}" v-for="(item, index) in questionList[listNum - 1].answers" :key="index" @click="choosed(index, item.answer_id)">{{item.answer}}</li>
					</ul>
				</div>
			</div>
			<div @click="nextItem" class="list-btn button-style" v-if="listNum < questionList.length"></div>
			<div @click="submit" class="submit-btn button-style" v-else></div>
		</div>
	</div>
</template>
<script>
import { mapMutations, mapState, mapActions } from 'vuex'
// import store from '../store/index.js'
export default {
    name: 'container',
    data() {
        return {
            itemId: null, //题目id
            itemIndex: null, //选中答案的索引
            choosedId: null, //选中答案id
            
        }
    },
	beforeMount () {
		console.log(1)
		this.getData()
	},
    computed: mapState({
        listNum: 'listNum',
        questionList: 'questionList',
		answerList: 'answerList'
    }),
    methods: {
        ...mapMutations(['addListNum']),
		...mapActions(['nextQuestion', 'getData']),
		choosed : function (index, answerId) {
			this.itemIndex = index
			this.choosedId = answerId
			console.log(this.itemIndex, this.choosedId)
		},
		nextItem: function () {
			if (this.itemIndex !== null) {
				this.itemIndex = null
				this.nextQuestion(this.choosedId)

			} else {
				alert('请选择答案')
			}
		},
		submit: function () {
			if (this.itemIndex !== null) {
				this.itemIndex = null
				this.nextQuestion(this.choosedId)
				this.$router.push('result')
			}
		},
        alertTest: function () {
            this.$swal({
                title: 'good job',
                text: 'beaugify alery',
                type: 'success',
                width: 200,
                padding: 5
            })
        }
    },
    props: ['fa'],
    created() {
        document.body.style.backgroundImage = 'url(/static/img/1-1.jpg)'
    }
}
</script>
<style>
ul,
li {
    list-style: none;
}
.header {
    background: url('../images/WechatIMG2.png') no-repeat;
    background-size: 100% 100%;
    position: absolute;
    height: 7.35rem;
    width: 3.25rem;
    top: -1.3rem;
    right: 1.6rem;
}
.head-tips {
    position: absolute;
    left: 0.48rem;
    bottom: 1rem;
    width: 2.5rem;
    font-size: 0.6rem;
    text-align: center;
    color: bisque;
}
.logo-one {
    background-image: url('../images/1-2.png');
}
.logo-two {
    background-image: url('../images/2-1.png');
}
.middle {
    position: absolute;
    top: 4.1rem;
    left: 1rem;
    height: 11.625rem;
    width: 13.15rem;

    background-size: 13.142rem, 100%;
}
.start {
    background-image: url('../images/1-4.png');
}
.submit-btn {
	background-image: url('../images/3-1.png');
}
.list-btn {
    background-image: url('../images/2-2.png');
}
.button-style {
    position: absolute;
    top: 16.5rem;
    left: 50%;
    width: 4.35rem;
    height: 2.1rem;
    margin-left: -2.4em;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.item_ul {
	position: absolute;
    height: 7.0rem;
    width: 8.0rem;
    top: 2.4rem;
    left: 3rem;
    -webkit-font-smoothing: antialiased;
	color: #ffffff;
}

.item_list {
    font-size: 1rem;
    margin-top: 0.6rem;
    width: 10rem;
}
.list_title {
	text-align: center;
	color: beige
}
.choosed {
	color: forestgreen;
}
.alert-box {
    position: absolute;
    top: 10rem;
    width: 4rem;
    height: 1.5rem;
    background-color: yellowgreen;
    font-size: 0.83rem;
    text-align: center;
    line-height: 1.5rem;
    left: 36%;
    z-index: 20;
}
</style>
