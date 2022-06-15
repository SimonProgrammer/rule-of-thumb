<script lang="ts">
import { defineComponent } from 'vue'

import Hero from './components/header/Hero.vue'
export default defineComponent({
  name: 'App',
  components:{
    Hero
  }
})
</script>

<template>
  <hero />
</template>

<style>
#app {
  width: 100%;
  height: 100%;
}
body{
  margin: 0;
}
</style>
