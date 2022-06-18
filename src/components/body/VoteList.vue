<script lang="ts">
import { defineComponent } from 'vue'
import VoteItem from './VoteItem.vue'

export default defineComponent({
  name: 'VoteList',
  props: {
    theme: {
        type: String,
        required: true
    }
  },
  components:{
    VoteItem
  },
  data:() => ({
    list: [
        {
            title: 'Cristina Fernández de Kirchner',
            description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus.  Vestibulum diam ante, porttitor a odio eget, rhoncus.',
            lastDate: new Date(),
            goodVote: 10,
            badVote: 15,
            imageGrid: 'https://ik.imagekit.io/mz4piqzisj/grid/kanye_kBaWDp3tb.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1655354729750',
            imageList: 'https://ik.imagekit.io/mz4piqzisj/list/kanye-small__1__g7Ts7rd0p.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1655584472822'
        },
        {
            title: 'Kanye west',
            description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus.  Vestibulum diam ante, porttitor a odio eget, rhoncus.',
            lastDate: new Date(),
            goodVote: 10,
            badVote: 15,
            imageGrid: 'https://ik.imagekit.io/mz4piqzisj/grid/kanye_kBaWDp3tb.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1655354729750',
            imageList: 'https://ik.imagekit.io/mz4piqzisj/list/kanye-small__1__g7Ts7rd0p.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1655584472822'
        },
        {
            title: 'Kanye west',
            description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus.  Vestibulum diam ante, porttitor a odio eget, rhoncus.',
            lastDate: new Date(),
            goodVote: 10,
            badVote: 15,
            imageGrid: 'https://ik.imagekit.io/mz4piqzisj/grid/kanye_kBaWDp3tb.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1655354729750',
            imageList: 'https://ik.imagekit.io/mz4piqzisj/list/kanye-small__1__g7Ts7rd0p.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1655584472822'
        },
    ],
    screen: ''
  }),
  computed:{
    classItem(){
        const { screen, theme } : { screen:String, theme: String } = this;
        return screen === 'mobile' ? `vote__list vote__list--mobile` :  `vote__list vote__list--${theme}`;
    },
    themeConfig(){
        const { screen, theme } : { screen:String, theme: String } = this;
        return screen === 'mobile' ? `grid` : theme;
    }
  },
  created(){
    window.addEventListener('resize', this.changeStatus);
    this.changeStatus();
  },
  deactivated(){
    window.addEventListener('resize', this.changeStatus);
  },
  methods:{
    changeStatus(){
        this.screen = window.innerWidth < 768 ? 'mobile' : 'desktop'
    }
  }
})
</script>

<template>
    <section :className="classItem">
        <template v-if="list.length > 0">
            <vote-item 
                v-for="(item, index) in list" 
                :key="index" 
                :info="item" 
                :theme="themeConfig" 
            />
        </template>
    </section>
</template>

<style scoped>
.vote__list--grid{
    display: grid;
}
.vote__list--mobile{
    display: flex;
    width: 100%;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
}

.vote__list--list{
    display: flex;
    flex-direction: column;
}

@media screen and (min-width: 0) {
    .vote__list{
        margin-top: 1.5rem;
    }
    .vote__list--mobile{
        column-gap: 1rem;
    }
    .vote__list--mobile > *{
        min-width: 300px;
        height: 300px;
    }
}
@media screen and (min-width: 768px) {
    .vote__list{
        margin-top: 1.75rem;
    }
    .vote__list--grid{
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
    .vote__list--grid > *{
        height: 345px;
    }
    .vote__list--list{
        row-gap: 0.75rem;
    }
}
@media screen and (min-width: 1024px) {
    .vote__list--grid{
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }
    .vote__list--grid > *{
        height: 348px;
    }
}
@media screen and (min-width: 1280px) {
    .vote__list{
        margin-top: 2rem;
    }
    .vote__list--list{
        row-gap: 1rem;
    }
}
@media screen and (min-width: 1536px) {
    .vote__list--grid > *{
        height: 385px;
    }
}
</style>
