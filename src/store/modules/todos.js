import Axios from 'axios'

export default {
    actions:{
        async FETCH_TODOS(context){
            try {
                const  response = await Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
                context.commit('getAllTodos',response.data)
              } catch (error) {
                console.log(error)
              }
        },
        CHANGE_STATUS(ctx,id){
            ctx.commit('changeStatus',id)
        },
        DEL_TODO(ctx,id){
            ctx.commit('delTodo',id)
        },
        async ADD_TODO(ctx,data){
            try {
                const response = await Axios.post('https://jsonplaceholder.typicode.com/todos',data)
                ctx.commit('addTodo',response.data)
              } catch (error) {
                console.log(error)
              }
        }
    },
    mutations:{
        getAllTodos(state,todos){
            state.todos = todos
        },
        changeStatus(state,id){
            state.todos = state.todos.map(todo => {
                if(todo.id === id){
                    return {...todo,completed:!todo.completed}
                }
                return todo
            }) 
        },
        delTodo(state,id){
            state.todos = state.todos.filter(todo => todo.id !== id)
        },
        addTodo(state,todo){
            state.todos = [...state.todos,todo]
        }
    },
    state:{
        todos:[]
    },
    getters:{
        allTodos(state){
            return state.todos
        }
    },
}