<template>
  <div id="app">
    <router-view/>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
  import HelloWorld from "./components/HelloWorld.vue"
  export default {
    components:{
      HelloWorld
    }

  }
</script>

<style>

</style>
