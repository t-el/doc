<template>

  <v-container>
    <div style="position:relative;">
       <center>
         <p style="font-size:50pt;">
         Web 3.0 
       </p><span>.</span>
       </center>
   <div style="">
                
      <v-text-field
      rounded
      solo
      label="Search ... "
      ></v-text-field>

   </div>
<h4>Top Articles About Web3 </h4>
       
        <Articles />
    </div>

  

  </v-container>
</template>

<script>

 import Articles from "../components/Articles.vue"
  export default {
    name: 'Main',
     components : {
      Articles
     },
    data: () => ({
         
    })
  }
</script>

<style scoped>

</style>
