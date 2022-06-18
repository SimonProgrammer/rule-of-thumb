<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'VoteHeader',
  setup(){
    const { locale, t } = useI18n({
      inheritLocale: true
    });

    let selectedKey: String = 'list';
    let selectedLabel: String = '';

    return { locale, t, selectedKey, selectedLabel };
  },
  data:() => ({
    showList: false
  }),
  computed: {
    selectItem(){
        const { showList }:{showList: Boolean} = this;
        const classOpen: String = `${showList ? 'vote__header-item--selected--open' : ''}`;
        return `vote__header-item vote__header-item--selected ${classOpen}`;
    }
  },
  beforeMount(){
    this.prepareSelectedItem();
  },    
  methods:{
    prepareSelectedItem(){
        this.selectedLabel = this.t('vote_label_list_type.label');
    },
    changeStatusList(){
        const { showList } = this;
        this.showList = !showList;
    },
    setSelectItem(key: string, label: string){
        this.selectedLabel = label;
        this.selectedKey = key;
        this.changeStatusList();
        this.$emit('selected', key);
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
                <span>{{ selectedLabel }}</span>
            </article>
            <div v-if="showList" className="vote__header-list">
                <article 
                    className="vote__header-item"
                    @click="setSelectItem(t('vote_label_list_type.key'), t('vote_label_list_type.label'))">
                    <span>{{ t('vote_label_list_type.label') }}</span>
                </article>
                <article 
                    className="vote__header-item"
                    @click="setSelectItem(t('vote_label_grid_type.key'), t('vote_label_grid_type.label'))">
                    <span>{{ t('vote_label_grid_type.label') }}</span>
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
    background-color: var(--color-white);
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
        font-size: 24px;
    }
}
@media screen and (min-width: 768px) {
    .vote__header-select{
        display: block;
    }
    .vote__header-item{
        width: 10.5rem;
        padding: 0.65rem 0;
    }
    .vote__header-item > *{
        font-size: 15px;
    }
}
@media screen and (min-width: 1024px) {
    .vote__header-item{
        width: 13rem;
    }
}
@media screen and (min-width: 1280px) {
    .vote__header-title{
        font-size: 35px;
    }
    .vote__header-item{
        padding: 0.5rem 0;
        width: 12rem;
    }
    .vote__header-item > *{
        font-size: 17px;
    }

}
@media screen and (min-width: 1536px) {
    .vote__header-item{
        padding: 0.35rem 0;
    }
    .vote__header-item{
        width: 11rem;
    }
}
</style>
