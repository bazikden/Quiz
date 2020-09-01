<template>
    <div>

        <div class="question-container">
            <div>{{activeQuestion}}. {{allQuestions[activeQuestion - 1].question}}</div>
            <div v-for="answer in allAnswers[activeQuestion - 1].answers" :key="answer.id">
                <div class="answer" :class="{'chosen':answer.chosen}"  @click="onAnswerClick(activeQuestion -1,answer.id)">{{answer.answer}}</div>
            </div>
            <div class="question-container__footer">
                <button :style="{'visibility':prevVisibility(activeQuestion)}" @click="onPrevClick">Prev</button>
                <div>{{activeQuestion}} of {{allQuestions.length}}</div>
                <button v-if="activeQuestion < allQuestions.length"  @click="onNextClick">Next</button>
                <button @click="onFinishCkick" v-else>Finish</button>
            </div>
                <h3>Result: {{result}}</h3>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    name: 'Quiz',
    computed:{ 
        ...mapGetters(['allQuestions','activeQuestion','allAnswers','result']),

        },
    methods: {
        onAnswerClick(index,id){
            const data = {index,id}
            this.$store.dispatch('CHOOSE_ANSWER',data)
        },
        onNextClick(){
            this.$store.dispatch('NEXT_QUESTION')
        },
        onPrevClick(){
            this.$store.dispatch('PREV_QUESTION')
        },
        prevVisibility: (activeQuestion) => {
            const result = activeQuestion > 1 ? 'visible':'hidden'
            return result
        },
        onFinishClick: () => {
            this.$store.dispatch('CALC_RESULT')
        }
    }
}
</script>

<style lang="scss" scoped>
    .question-container{
        width: 600px;
        border: 2px solid cadetblue;
        border-radius: 15px 0 0 0;
        margin: 200px auto;
        padding: 20px;
        .answer {
            margin: 10px 0;
            border: 2px solid cadetblue;
            border-radius: 10px 0 0 0;
            padding: 10px;
            cursor: pointer;
        }
        .chosen {
            background: cornflowerblue;
        }
        &__footer{
            display: flex;
            justify-content: space-between;
            align-items: center;
            button{
                display: block;
                width: 150px;
                height: 30px;
                border: 2px solid cadetblue;

            }
        }
    }
</style>