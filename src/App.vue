<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <named-slot>
      <template v-slot:foo>
        <h1>should be an h1 showing up!</h1>
      </template>
    </named-slot>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NamedSlot from './NamedSlot.js'

export default {
  name: 'app',
  components: {
    HelloWorld,
    NamedSlot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
