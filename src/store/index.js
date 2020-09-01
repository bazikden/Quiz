import { createStore } from 'vuex'
import todos from "./modules/todos"
import quiz from "./modules/quiz"

export default createStore({
    modules: {
        todos,
        quiz
    }
})