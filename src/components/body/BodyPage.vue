<script lang="ts">
import { defineComponent } from 'vue'
import Banner from './Banner.vue'
import VoteHeader from './VoteHeader.vue'
import VoteList from './VoteList.vue'

export default defineComponent({
  name: 'BodyPage',
  components:{
    Banner,
    VoteHeader,
    VoteList
  },
  data:() => ({
    theme: 'list'
  }),
  methods:{
    changeTheme(theme: string){
        this.theme = theme;
    }
  }
})
</script>

<template>
    <section className="body__page">
        <banner/>
        <vote-header @selected="changeTheme"/>
        <vote-list :theme="theme"/>
    </section>
</template>

<style scoped>
.body__page{
    display: grid;
}
@media screen and (min-width: 0) {
    .body__page{
        grid-template-columns: repeat(24, 1fr);
    }
    .body__page > *{
        grid-column: 2 / 24;
    }
}
@media screen and (min-width: 1280px) {
    .body__page{
        grid-template-columns: repeat(12, 1fr);
    }
    .body__page > *{
        grid-column: 2 / 12;
    }
}
</style>
