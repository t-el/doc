<template>
 <div>
  
       <div class =""  v-for="article in articles" :key="article._id">
         
              <div class ="card ma-3 pa-3"  v-for="art in article" :key="art._id">
              <div v-html="art.body"></div>
             </div>

       </div> 
 </div>

 
</template>

<script>


export default {
  name: 'Articles',

    components: {
      
    },
  data: () => ({
    //
    articles : {}
  }),

mounted()  {
 this.get()
},

  methods : {
     async get(){
              let res = await fetch("http://localhost:3000/posts",{
                method: 'GET',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                }); 

                this.articles = await res.json();
         },
  }

};
</script>