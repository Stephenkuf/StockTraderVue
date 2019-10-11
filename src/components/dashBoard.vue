<template>
    <div class="container-fluid main-cont">
        <h1>Trade or View your Portfolio</h1>
        <p><b>You may Save or Load your Data</b></p>
        <p><b> Click on "End day" to begin a New Day</b></p>
        <hr>
        <h3><b>Your Funds : ${{ totalFunds }} </b></h3>

         <hr>
    <!-- <button @click="getDetails()" >this is it</button>
    <button @click="submitDetails()" >submit data</button> -->
    </div>
   
</template>

<script>
    export default {
        data(){
            return{
               
                user:{
                    email:'steve@gmail,com',
                    name:'stephen'
                },
                userData:[]
            }
        },
        //this gets the total funds to be disaplayed here
        computed:{
            totalFunds(){
                 return this.$store.getters.totalFunds;
            }
        },
        
    }
</script>

<style scoped>
    .main-cont{
        border:2px solid rgb(180, 178, 178);
        width: 100%;
        height:fit-content;
        border-radius: 10px;
        padding: 20px;
    }

</style>
