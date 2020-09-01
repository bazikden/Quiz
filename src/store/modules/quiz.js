import {v4} from 'uuid'

export default {
    actions:{
        CHOOSE_ANSWER: (ctx,data) => {
            ctx.commit('setActiveAnswer',data)
        },
        NEXT_QUESTION: (ctx) => {
            ctx.commit('nextQuestion')
        },
        PREV_QUESTION: (ctx) => {
            ctx.commit('prevQuestion')
        },
        CALC_RESULT: ctx => {
            ctx.commit('calcResult')
        }
    },
    mutations:{
        setActiveAnswer: (state,data) => {
            state.answers = state.answers.map((answers,index) => {
                if(index === data.index){
                    console.log(answers.answers)
                    const newAnswers = answers.answers.map(answer => {
                        if(answer.id === data.id){
                            return {...answer,chosen:true}
                        }
                        return {...answer,chosen:false}
                    })
                    console.log("new",newAnswers)
                    return {...answers,answers:newAnswers} 
                }
                return answers
            })
        },
        nextQuestion: (state) => {
            state.activeQuestion += 1 
        },
        prevQuestion: (state) => {
            state.activeQuestion -= 1 
        },
        calcResult: (state) => {
            let rightAnswers = 0
            state.answers.forEach((answer,questionIndex) => {
                const answered= answer.answers.find(elem => elem.chosen === true)
                answered.answer === rightAnswers[questionIndex].answer &&  (rightAnswers += 1 )
            })
            console.log(rightAnswers)
            state.result = rightAnswers
        }
    },
    getters:{
        allQuestions(state){
            return state.questions
        },
        activeQuestion(state){
            return state.activeQuestion
        },
        allAnswers: state => state.answers,
        result: state => state.result
    },
    state:{
        questions:[
            {id:v4(),question:'Question 1'},
            {id:v4(),question:'Question 2'},
            {id:v4(),question:'Question 3'},
            {id:v4(),question:'Question 4'},
            {id:v4(),question:'Question 5'},
        ],
        answers:[
            {answers:[
                {id:v4(),answer:"Right",chosen:true},
                {id:v4(),answer:"Wrong",chosen:false},
                {id:v4(),answer:"Wrong",chosen:false},
                {id:v4(),answer:"Wrong",chosen:false},
            ]},
            {answers:[
                {id:v4(),answer:"Wrong",chosen:false},
                {id:v4(),answer:"Right",chosen:false},
                {id:v4(),answer:"Wrong",chosen:false},
                {id:v4(),answer:"Wrong",chosen:false},
            ]},
            {answers:[
                {id:v4(),answer:"Wrong",chosen:false},
                {id:v4(),answer:"Wrong",chosen:false},
                {id:v4(),answer:"Wrong",chosen:false},
                {id:v4(),answer:"Right",chosen:false},
            ]},
            {answers:[
                {id:v4(),answer:"Wrong",chosen:false},
                {id:v4(),answer:"Wrong",chosen:false},
                {id:v4(),answer:"Right",chosen:false},
                {id:v4(),answer:"Wrong",chosen:false},
            ]},
            {answers:[
                {id:v4(),answer:"Right"},
                {id:v4(),answer:"Wrong"},
                {id:v4(),answer:"Wrong"},
                {id:v4(),answer:"Wrong"},
            ]}
        ],
        activeQuestion:1,
        rightAnswers:[
            {answer:"Right"},
            {answer:"Right"},
            {answer:"Right"},
            {answer:"Right"},
            {answer:"Right"},
        ],
        result:null
    }
}