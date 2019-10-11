<template>
    <div>
    <single-stock  v-for="(item , i) in stockArray "  :key="i" :item="item"></single-stock>
   
    
    </div>
    
</template>


<script>
    //this gets its view from singlestock.vue 
    import singleStock from './singleStock.vue'
    //this  gets the states from the store to be used in  this simponrnt 
    import { mapGetters } from 'vuex'

    export default {
        data(){
            return{
               
            }
        },
        //this loads the single stock component
        components:{
            singleStock:singleStock
        }, 

        //collects the values from map Getters
        computed: mapGetters ({
            //    message: 'logMessage',
               number: 'logNumber',
               stockArray: 'getArray', 
            //    portfolio: 'portfolio'      
     }),
     methods:{
         
     }
    }
</script>

<style scoped>

</style>

