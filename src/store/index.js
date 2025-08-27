import {createStore} from 'vuex'
export default createStore({
    state:{
        counter:-1
    },
    getters:{
        getCount(state,num){
            return state.counter >=0? state.counter:"数据小于0,错误";
        }
    },
    mutations:{
        addCount(state,num){
         state.counter+=num;
        },
        decCount(state,num){
         state.counter-=num;
        }
    }
})