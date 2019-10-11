<template>
    <div >
            <nav class="navbar navbar-default">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                     <a class="navbar-brand"  @click="selectedComponent='dashBoard'">
                         <b>Stock Trader</b>
                    </a>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li class="tabb"><a @click="selectedComponent='myStocks'">Portfolio</a></li>
                        <li class="tabb"><a @click="selectedComponent='allStocks'">Stocks</a></li>                    
                    </ul>                
                    <ul class="nav navbar-nav navbar-right">
                        <li><a class="tabb"
                               @click="saveDay()"
                                selectedComponent='dashBoard'
                                >End Day</a></li>                    
                         <li 
                            class="dropdown"
                            :class="{open:isDropdown}"
                            @click = "isDropdown = !isDropdown"
                             >
                            <a
                                href="#" 
                                class="tabb dropdown-toggle" 
                                data-toggle="dropdown" 
                                role="button" >Save & Load
                                 <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a @click="saveDay()" href="#">Save Data</a></li>
                                <li><a @click="loadData()" href="#">Load Data</a></li>
                            </ul>
                         </li>
                        <li>
                        <a><b>Funds :$ {{ totalFunds }} </b></a>
                        </li> 
                    </ul>
                </div><!-- /.navbar-collapse -->          
            </nav> 
            <div>
                 <component :is="selectedComponent"></component>
            </div>
           
           
    </div>
</template>

<script>
    import dashboard from './components/dashBoard.vue'
    import allStock from './components/allStocks.vue'
    import myStock from './components/myStock.vue'


    export default {
        data(){
            return{      
                isDropdown:  false,     
                    
                selectedComponent: 'dashBoard'                
            }
        },
        methods:{
                 
            saveDay(){
               const data = {
                    funds: this.$store.getters.totalFunds,
                    stocks: this.$store.state.stocks,
                    Portfolio: this.$store.getters.portfolio
               }
               // console.log(data)
                this.$http.put('https://stock-d42ef.firebaseio.com/data.json', data)
                    .then(response =>{
                        console.log(response);                        
                    }, error => {
                        console.log(error);                        
                    })
            },
            loadData(){
                this.$store.dispatch('loadData');                
                          
                // this.$http.get('https://stock-d42ef.firebaseio.com/data.json')
                // .then(response => response.json())
                // .then(data => {
                //     if (data){
                //           console.log(data);
                //         const stocks = data.stocks;
                //         const funds = data.funds;
                //         const stockPortfolio = data.portfolio; 

                //         const newState={
                //             funds,
                //             stockPortfolio
                //          };
                      
                //         // commit('SET_STOCKS', stocks);
                //         // commit('SET_PORTFOLIO', newState);
                //     }

                // })
              
         
            }
     
        },
        components:{
            dashBoard : dashboard,
            allStocks: allStock,
            myStocks : myStock
           
        },
        computed:{
            totalFunds(){
                return this.$store.getters.totalFunds;
            }
        }
      
    }
</script>

<style scoped>
    .tabb:hover{
        background-color: rgb(187, 186, 186);
        cursor:pointer;
    }

</style>
