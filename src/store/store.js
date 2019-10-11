import Vue from 'vue';
import Vuex from 'vuex';
import stocks from '../stocks/stock'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{    
        stocks,    
        funds:10000,       
        portfolio:[]
    },
    mutations:{
        'SET_STOCKS'(state , stocks){
            state.stocks = stocks;
        },
        'SET_PORTFOLIO'(state, newState){
            state.funds = newState.funds;
            state.portfolio = newState.stockPortfolio ? newState.stockPortfolio : [];
            // console.log(newState);
        },
        

        'ADD_PORTFOLIO_ITEM'(state , item) {
            let found = state.portfolio.some(el => el.name === item.name)
            if (!found) {
                state.portfolio.push(item);
                state.funds -= item.amount;  

            } else {
                for (var i = 0; i < state.portfolio.length; i++) {
                    if (state.portfolio[i].name === item.name) {
                    state.portfolio[i].quantity += item.quantity;
                    state.funds -= item.amount; 
                    }
                };
                };
            }


        
    }, 
    actions:{
         initStocks({commit} ){
             commit('SET_STOCKS' , stocks);
         },
         setPort({commit} ){
            commit('SET_PORTFOLIO' , payload);
         },
         addPortfolioItem({commit}, payload){
             commit('ADD_PORTFOLIO_ITEM', payload)
         },
         loadData({commit}){            
                Vue.http.get('https://stock-d42ef.firebaseio.com/data.json')
                .then(response => response.json())
                .then(data => {
                    if (data){
                        const stocks = data.stocks;
                        const funds = data.funds;
                        const stockPortfolio = data.Portfolio; 

                        const newState={
                            funds,
                            stockPortfolio
                        };
                        commit('SET_STOCKS', stocks);
                        commit('SET_PORTFOLIO', newState);
                    }

                });

         }       
        
    },
    getters:{
        logMessage: state =>{
            return state.message;
        },
        logNumber:state =>{
            return state.counter;
        },
        getArray:state =>{
            return state.stocks;
        },
        totalFunds: state =>{
            return state.funds;
       } ,  
       portfolio: state =>{
        return state.portfolio;
   }  
    }   
})