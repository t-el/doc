<template>
<div>
  <v-container>
    <ul>
      <li>  <router-link to="/" >Stake</router-link></li>
     
      <li style="float:right">
        <div style="padding:3px;" class="active">
            <router-link to="/write" >Add Article</router-link>
          
  
        </div>
      </li>
    </ul>

   
  </v-container>
 

</div>
</template>

<script>
  export default {
    name: 'Nav',

    data: () => ({
      
    })
  }
</script>


<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

}

li {
  float: left;
}

li a {
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  color: black;
}

li a:hover:not(.active) {
  background-color: rgb(219, 219, 219);
}

.active {
  background-color: #ffffff;
}
</style>