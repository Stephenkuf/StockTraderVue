<template>
    <div>
        <div class="col-lg-6">  
            <div class="panel panel-info">
        <div class="panel-heading"><b>{{item.name}}</b> <small>(Price: {{ item.price }} || Quantity: {{ item.quantity }})</small>  </div>
                <div class="panel-body">                   
                    <div class="col-lg-6" >
                        <input type="number" v-model="quantity" placeholder="Quantity"  class="form-control"  aria-describedby="sizing-addon3">
                    </div>       
                  
                     <button 
                        @click="buyStock(item.id)"               
                        class="btn btn-danger"
                        :disabled="Number(quantity) <= 0"
                        style="float:right">
                        Sell
                    </button> 
                        <!-- <p>{{ current[0]['name'] }}</p>                  -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import {mapActions} from 'vuex'
    //  this is the single view for the portfolio view ,  props
    //are sent  to my stocks to enable it load from here

    export default {
        props: ['item'], 

        data(){
            return{ 
            
            }        
        },


    }
</script>

<style scoped>

</style>
