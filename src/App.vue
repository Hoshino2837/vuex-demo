<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <RouterLink to="/">home</RouterLink>|
  <RouterLink to="/about">about</RouterLink>
  <RouterView/>
  <hr></hr>
  <button @click="countAdd">+1</button>
  <button @click="countDec">-1</button>
  <div> counter= {{ $store.state.counter }}</div>
  <div> {{ $store.getters.getCount }}</div>
  <p> {{ getCount }}</p>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import { mapGetters, mapState,mapMutations } from 'vuex';
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters(["getCount"]),
  },
  methods:{
     ...mapMutations(["addCount"]),
    countAdd(){
      this.addCount(1)
    },
    countDec(){
      this.$store.commit("decCount",1)
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
