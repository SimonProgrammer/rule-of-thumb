<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '../../stores/person'
import Banner from './Banner.vue'
import VoteHeader from './VoteHeader.vue'
import VoteList from './VoteList.vue'
import EnrollCandidate from './EnrollCandidate.vue'
import FooterPage from './FooterPage.vue'
import personsManagment from '../../mixins/personsManagment'

export default defineComponent({
  name: 'BodyPage',
  mixins: [personsManagment],
  setup() {
    const store = useStore()
    return {
      store,
    }
  },
  components:{
    Banner,
    VoteHeader,
    VoteList,
    EnrollCandidate,
    FooterPage
  },
  data:() => ({
    theme: 'list'
  }),
  beforeMount(){
    this.getListPersons();
  },
  methods:{
    changeTheme(theme: string){
        this.theme = theme;
    },
    async getListPersons(){
        const list = await this.getPersons();
        const { store } = this;
        store.$patch({
            list
        });
    }
  }
})
</script>

<template>
    <section className="body__page">
        <banner />
        <vote-header @selected="changeTheme" />
        <vote-list :theme="theme" />
        <enroll-candidate />
        <footer-page />
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
