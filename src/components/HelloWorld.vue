<template>
  <div class="hello">
    <h1>{{data}}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    mounted(){
      this.$store.dispatch("getData")
    },
    computed: {
      ...mapState(["data"])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
