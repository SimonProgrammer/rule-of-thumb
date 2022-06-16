<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'VoteHeader',
  setup(){
    const { locale, t } = useI18n({
      inheritLocale: true
    });

    let selected: String = '';

    return { locale, t, selected };
  },
  data:() => ({
    showList: false
  }),
  created(){
    this.prepareSelectedItem();
  },
  computed: {
    selectItem(){
        const { showList }:{showList: Boolean} = this;
        const classOpen: String = `${showList ? 'vote__header-item--selected--open' : ''}`;
        return `vote__header-item vote__header-item--selected ${classOpen}`;
    }
  },
  methods:{
    prepareSelectedItem(){
        this.selected = this.t('vote_label_list_type');
    },
    changeStatusList(){
        const { showList } = this;
        this.showList = !showList;
    },
    setSelectItem(type: String){
        this.selected = type;
        this.changeStatusList();
    }
  }
})
</script>

<template>
    <div className="vote__header">
        <h3 className="vote__header-title">{{ t('vote_label_title_previous') }}</h3>
        <div className="vote__header-select">
            <article 
                :className="selectItem"
                @click="changeStatusList">
                <span>{{ selected }}</span>
            </article>
            <div v-if="showList" className="vote__header-list">
                <article 
                    className="vote__header-item"
                    @click="setSelectItem(t('vote_label_list_type'))">
                    <span>{{ t('vote_label_list_type') }}</span>
                </article>
                <article 
                    className="vote__header-item"
                    @click="setSelectItem(t('vote_label_grid_type'))">
                    <span>{{ t('vote_label_grid_type') }}</span>
                </article>
            </div>
        </div>
    </div>
</template>

<style scoped>
.vote__header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.vote__header-title{
    font-family: Lato-Light;
    color: var(--color-black-1);
    font-weight: 300;
    margin: 0;
}
.vote__header-select{
    display: none;
    position: relative;
}
.vote__header-item{
    text-align: center;
    position: relative;
    cursor: pointer;
}
.vote__header-list{
    position: absolute;
    z-index: 10;
}
.vote__header-item--selected{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
.vote__header-item--selected > *{
    grid-column-start: 2;
}
.vote__header-item--selected::after{
    position: absolute;
    content: "";
    top: 10px;
    bottom: 0;
    right: 20px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-color: var(--color-black-1) transparent transparent transparent;
    margin: auto;
}

.vote__header-item--selected--open::after{
    transform: rotate(180deg);
    top: 0;
    bottom: 10px;
}

.vote__header-item{
    font-family: Lato;
    border: 2px solid var(--color-darker-gray);
}

@media screen and (min-width: 0) {
    .vote__header-title{
        font-size: 7.5vw;
    }
}
@media screen and (min-width: 768px) {
    .vote__header-title{
        font-size: 3.75vw;
    }
    .vote__header-select{
        display: block;
    }
    .vote__header-item{
        width: 10.5rem;
        padding: 0.65rem 0;
    }
    .vote__header-item > *{
        font-size: 2.25vw;
    }
}
@media screen and (min-width: 1024px) {
    .vote__header-item{
        width: 13rem;
    }
}
@media screen and (min-width: 1280px) {
    .vote__header-title{
        font-size: 2.5vw;
    }
    .vote__header-item{
        padding: 0.5rem 0;
        width: 12rem;
    }
    .vote__header-item > *{
        font-size: 1.5vw;
    }

}
@media screen and (min-width: 1536px) {
   .vote__header-title{
        font-size: 2vw;
    }
    .vote__header-item{
        padding: 0.35rem 0;
    }
    .vote__header-item > *{
        font-size: 1.25vw;
    }
}
</style>
