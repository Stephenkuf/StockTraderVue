<template>
    <div>
        <div class="col-lg-6">  
            <div class="panel panel-success">
        <div class="panel-heading"><b>{{item.name}}</b> <small>(Price: {{ item.price }} )</small>  </div>
                <div class="panel-body">                   
                    <div class="col-lg-6" >
                        <input type="number" v-model="quantity" placeholder="Quantity"  class="form-control"  aria-describedby="sizing-addon3">
                    </div>       
                  
                     <button 
                        @click="buyStock(item.id) && display()"
                        :disabled="this.quantity <= 0 "    
                        class="btn btn-success"
                                              
                        style="float:right">
                        Buy
                    </button> 
                    <!-- <h1>{{  totalFunds }} this </h1> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //this imports the actions module from vuestore 
    //to enable us to dispatch actions from this component 
    import {mapActions, mapGetters } from 'vuex'
    //  

    export default {
        props: ['item'], 

        data(){
            return{ 
               quantity:0,
            }        
        },
       
        methods:{           
            buyStock(){          
                 const bought =  {
                    quantity: this.quantity,
                    id : this.item.id,
                    name : this.item.name,
                    price :this.item.price,
                    amount :this.item.price * this.quantity,
                   
                 }     
             //   the if statement makes sure one cant buy more than funds avalainle 
               if(bought.amount <= this.totalFunds){
                    this.$store.dispatch('addPortfolioItem', bought)            
               }            
               else{
                   alert("Insufficient Funds ")
                        //  :disabled="btn" this ensure
                   
               }                     
            },
           

         },
            computed:{
           ...mapGetters([
                'getArray',
                'totalFunds',
             
                ])               
            
        },
      
   
  
    }
</script>

<style scoped>

</style>
