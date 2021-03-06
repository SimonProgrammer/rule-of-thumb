<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'VoteItem',
  props: {
    theme: {
        type: String,
        default: 'grid'
    },
    info: {
        type: Object,
        default: () => {}
    }
  },
  data:() => ({
    selectType: '',
    tryAgain: false
  }),
  computed:{
    classItem(){
        const { theme }:{ theme: String } = this;
        return `vote__item-${theme}`;
    },
    leftPercentage(){
        const {info: { votes: { positive, negative } } }  = this;
        const result = (positive / (positive + negative) * 100).toFixed(1);
        return `${result}%`;
    },
    rightPercentage(){
        const {info: { votes: { positive, negative } } }  = this;
        const result = (negative / (positive + negative) * 100).toFixed(1);
        return `${result}%`;
    },
    imageClass(){
        const { theme }:{ theme: String } = this;
        return `vote__item-bg vote__item-bg--${theme}`;
    },
    positiveClass(){
        const { selectType } : { selectType : string } = this;
        return selectType === 'positive' ? 'vote__thumb vote__thumb--up vote__thumb--selected' : 'vote__thumb vote__thumb--up';
    },
    negativeClass(){
        const { selectType } : { selectType : string } = this;
        return selectType === 'negative' ? 'vote__thumb vote__thumb--down vote__thumb--selected' : 'vote__thumb vote__thumb--down';
    },
    timeAgo(){
        const { info: { lastUpdated } } = this;
        return this.calcDateTimeAgo(lastUpdated);
    },
    categoryPerson(){
        const { info: { category } } = this;
        const lower = category.toLowerCase();
        return category.charAt(0).toUpperCase() + lower.slice(1);
    }
  },
  setup(){
    const { locale, t } = useI18n({
      inheritLocale: true
    });

    return { locale, t };
  },
  methods:{
    selectVoteType(type: string){
        this.selectType = type;
    },
    sendVote(){
        const { info: { code }, selectType: type, tryAgain } = this;
        if(!tryAgain){
            this.$emit('vote',{
                code,
                type
            });
            this.tryAgain = true;
            this.selectVoteType('');
        }
        else{
            this.tryAgain = false;
        }
    },
    calcDateTimeAgo(timestamp: Date){
        let value;
        const diff = (new Date().getTime() - new Date(timestamp).getTime()) / 1000;
        const minutes = Math.floor(diff / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);
        const rtf = new Intl.RelativeTimeFormat('en', { numeric: "auto" });

        if (years > 0) {
            value = rtf.format(0 - years, "year");
        } else if (months > 0) {
            value = rtf.format(0 - months, "month");
        } else if (days > 0) {
            value = rtf.format(0 - days, "day");
        } else if (hours > 0) {
            value = rtf.format(0 - hours, "hour");
        } else if (minutes > 0) {
            value = rtf.format(0 - minutes, "minute");
        } else {
            value = rtf.format(0 - diff, "second");
        }
        return value;
    }
  }
})
</script>

<template>
    <div :className="classItem">
        <img :className="imageClass" :src="theme === 'grid' ? info.pictureGrid : info.pictureList" :alt="info.name" />
        <article v-if="theme === 'list'" className="vote__item-gradient"></article>
        <div className="vote__item-header">
            <template v-if="info.votes.positive > info.votes.negative">
                <article className="vote__thumb vote__thumb--up">
                    <img 
                        src="@/assets/icons/thumbs-up.svg"
                        alt="thump up icon"
                        className="vote__thumb-icon"
                    />
                </article>
            </template>
            <template v-else>
                <article className="vote__thumb vote__thumb--down">
                    <img 
                        src="@/assets/icons/thumbs-down.svg" 
                        alt="thump up down"
                        className="vote__thumb-icon"
                    />
                </article>
            </template>
            <span className="vote__item-title">{{ info.name }}</span>
        </div>
        <article className="vote__item-description">{{ info.description }}</article>
        <article className="vote__item-status">{{ tryAgain ? t('vote_list_cta_thanks')  : `${timeAgo} in ${categoryPerson}`}}</article>
        <div className="vote__item-cta">
            <article v-if="!tryAgain" :className="positiveClass" @click="selectVoteType('positive')">
                <img 
                    src="@/assets/icons/thumbs-up.svg" 
                    alt="thump up icon"
                    className="vote__thumb-icon"
                />
            </article>
            <article v-if="!tryAgain" :className="negativeClass" @click="selectVoteType('negative')">
                <img 
                    src="@/assets/icons/thumbs-down.svg" 
                    alt="thump up down"
                    className="vote__thumb-icon"
                />
            </article>
            <button 
                className="vote__button" 
                @click="sendVote"
                :disabled="selectType == '' && !tryAgain">
                {{ tryAgain ? t('vote_list_cta_vote_again') :  t('vote_list_cta_vote_now') }}
            </button>
        </div>
        <footer className="vote__item-footer">
            <div className="vote__footer-left" :style="{flexBasis: leftPercentage}"></div>
            <div className="vote__footer-right" :style="{flexBasis: rightPercentage}"></div>
            <article className="vote__footer-vote vote__footer-vote--left">
                <img 
                    src="@/assets/icons/thumbs-up.svg" 
                    alt="search button"
                />
                <span>{{ leftPercentage }}</span>
            </article>
            <article className="vote__footer-vote vote__footer-vote--right">
                <span>{{ rightPercentage }}</span>
                <img 
                    src="@/assets/icons/thumbs-down.svg" 
                    alt="search button"
                />
            </article>
        </footer>
    </div>
</template>

<style scoped>
.vote__item-grid{
    position: relative;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.6) 100%);
    display: grid;
}
.vote__item-bg{
    position: absolute;
    z-index: -1;
    height: 100%;
    object-fit: cover;
}
.vote__item-grid .vote__item-bg{
    width: 100%;
}
.vote__item-list .vote__item-bg{
    left: 0;
}
.vote__item-footer{
    display: flex;
    flex-direction: row;
    position: relative;
    grid-column: 1 / -1;
}

.vote__footer-left{
    background-color: var(--color-green-bg);
}
.vote__footer-right{
    background-color: var(--color-yellow-bg);
}
.vote__footer-vote{
    color: var(--color-white);
    font-family: Lato;
    display: flex;
    flex-direction: row;
    column-gap: 0.25rem;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
}

.vote__item-cta{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
}

.vote__button{
    font-family: Lato;
    border: 1px solid var(--color-white);
    background-color: var(--color-darker-background);
    color: var(--color-white);
    cursor: pointer;
}

.vote__thumb{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.vote__thumb--up{
    background-color: var(--color-green-positive);
}
.vote__thumb--down{
    background-color: var(--color-yellow-negative);
}

.vote__thumb--selected{
    border: 1px solid var(--color-white);
}

.vote__item-status{
    font-family: Lato;
    font-weight: 700;
    color: var(--color-white);
    text-align: right;
}

.vote__item-description{
    font-family: Lato;
    font-weight: 400;
    font-size: 15px;
    color: var(--color-white);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
}
.vote__item-header{
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: end;
}

.vote__item-title{
    font-family: Lato;
    color: var(--color-white);
    font-weight: 400;
    line-height: 1; 
}
.vote__item-grid .vote__item-title{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
}
.vote__item-list .vote__item-title{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.vote__item-list{
    display: grid;
    position: relative;
}

.vote__item-list .vote__item-gradient{
    position: absolute;
    right: 0;
    height: 100%;
    width: 100%;
    margin: auto;
    z-index: -1;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.0001) 0%, #888888 19.79%, #666666 50%, rgba(51, 51, 51, 0.6) 71.88%);
}

@media screen and (min-width: 0) {
    .vote__item-grid{
        row-gap: 0.75rem;
        grid-template-columns: repeat(8, 1fr);
        place-content: end;
    }
    .vote__item-grid .vote__item-header{
        grid-column: 1 / 8;
    }
    .vote__item-grid .vote__item-cta{
        grid-column: 2 / 8;
    }
    .vote__item-grid .vote__item-status,
    .vote__item-grid .vote__item-description{
        grid-column: 2 / 8;
    }
    .vote__item-footer{
        height: 36px;
    }

    .vote__item-footer .vote__footer-vote--left{
        left: 0.5rem;
    }
    .vote__item-footer .vote__footer-vote--right{
        right: 0.5rem;
    }
    .vote__footer-vote{
        font-size: 4.75vw;
    }
    .vote__item-grid .vote__thumb{
        min-width: 30px;
        height: 30px;
    }
    .vote__item-grid .vote__thumb-icon{
        width: 16px;
        height: 16px;
    }

    .vote__item-grid .vote__item-cta{
        column-gap: 0.75rem;
    }

    .vote__item-grid .vote__button{
        font-size: 15px;
        width: 107px;
        height: 38px;
    }
    .vote__item-status{
        font-size: 12px;
    }
    .vote__item-header{
        padding-right: 1.75rem;
        column-gap: 0.25rem;
    }
    .vote__item-title{
        font-size: 30px;
    }
}
@media screen and (min-width: 768px) {
    .vote__item-list{
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(3, auto);
    }
    .vote__item-list .vote__item-footer{
        grid-row: 3 / 4;
    }
    .vote__item-list .vote__item-header{
        grid-column: 4 / 9;
        grid-row: 1 / 2;
        margin: 0.5rem 0 1.5rem 0;
    }
    .vote__item-list .vote__item-header .vote__thumb{
        top: 0;
        left: 0;
        position: absolute;
    }
    .vote__item-list .vote__thumb{
        min-width: 30px;
        height: 30px;
    }
    .vote__item-list .vote__item-description{
        grid-column: 4 / 9;
        grid-row: 2 / 3;
        margin-bottom: 1.5rem;
        font-size: 14px;
    }
    .vote__item-list .vote__item-status{
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
    }
    .vote__item-list .vote__item-cta{
        grid-column: 9 / 13;
        grid-row: 1 / 3;
        column-gap: 0.75rem;
        padding-right: 0.5rem;
    }
    .vote__item-list .vote__button{
        font-size: 15px;
         min-width: 107px;
        height: 38px;
    }
    .vote__footer-vote{
        font-size: 18px;
    }
    .vote__item-grid .vote__thumb-icon{
        width: 16px;
        height: 16px;
    }
    .vote__item-list .vote__item-bg{
        width: 30%;
        object-position: initial;
        object-fit: cover;
    }
    .vote__item-list .vote__item-gradient{
        width: 90%;
    }
    .vote__item-list .vote__item-title{
        font-size: 28px;
    }
}
@media screen and (min-width: 1024px) {
    .vote__item-list .vote__item-bg{
        width: 25%;
        object-position: top;
    }
    .vote__item-list .vote__item-gradient{
        width: 95%;
    }
}
@media screen and (min-width: 1280px) {
    .vote__item-list .vote__item-gradient{
        width: 100%;
    }
    .vote__item-list .vote__item-header{
        grid-column: 4 / 10;
        margin: 0.75rem 0 1rem 0;
    }
    .vote__item-list .vote__item-title{
        font-size: 36px;
    }
    .vote__item-list .vote__item-description{
        margin-bottom: 0.75rem;
    }
    .vote__item-list .vote__item-bg{
        width: 20%;
        object-position: top;
    }
}
@media screen and (min-width: 1536px) {
    .vote__item-list .vote__item-header{
        margin: 1.5rem 0 1.75rem 0;
    }
    .vote__item-list .vote__item-description{
        margin-bottom: 1.5rem;
    }
}
</style>
