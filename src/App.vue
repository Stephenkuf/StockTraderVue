<template>
    <div class="container">
        <main-page class="main-cont"></main-page>
    </div>
</template>

<script>
import mainpages from '../src/p-mainpage.vue'


    export default {
        components:{
            mainPage: mainpages                    
        },
        computed:{
            getInitialArray(){
                return this.$store.getters.getArray;
            }
        },      
        
    }
</script>

<style scoped>
    .main-cont{
       padding-top: 10px;
    }

</style>
