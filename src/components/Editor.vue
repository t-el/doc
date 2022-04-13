<template>

<div>
    <mavon-editor codeStyle = "github" language = "en" v-model="markdown"/>
    <br>
    <hr>
  <v-btn
  @click="add()"
  >
    add
    </v-btn>
     
</div>
 
</template>

<script>

//import marked from 'marked';

export default {
  name: 'Editor',
   data(){
   return {
     markdown:  "# Hello World",
   
   }
   },



 methods : {
   async add(){
     
         if(this.markdown != "" ){
              await fetch("http://localhost:3000/insert",{
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({body:this.markdown})
                }); 
         }
            
         },

 },
 
}
</script>