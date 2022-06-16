<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import Hero from './components/header/Hero.vue'
import BodyPage from './components/body/BodyPage.vue'
export default defineComponent({
  name: 'App',
  components:{
    Hero,
    BodyPage
  },
  setup(){
    const { locale, t } = useI18n({
      inheritLocale: true
    })
    return { locale, t }
  },
  beforeCreate(){
    document.title = this.t('hero_title_site')
  }
})
</script>

<template>
  <hero />
  <body-page />
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
