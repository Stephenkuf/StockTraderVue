<template>
    <div>
         <!-- this loads the array of portfolio from the store a as its being bought   -->
    <single-portfolio  v-for="(item , i) in portfolio "  :key="i" :item="item"></single-portfolio>
  
    <h1>{{ portfolio }}</h1>
    </div>
    
</template>
  

<script>
    //this is the portfolio page , loading from sinfle portfilio.vue
    //   v-for="(item , i) in stockArray "  :key="i" :item="item"
    import {mapGetters} from 'vuex';
    //this brings in the single portfolio component
    import singlePortfolio from './singlePortfolio.vue'
    export default {
        components:{
            singlePortfolio:singlePortfolio
        }, 
        //this gets the state of portfolio from the srore
        computed: mapGetters({
            portfolio:'portfolio'
        })
    }
</script>

<style scoped>

</style>
