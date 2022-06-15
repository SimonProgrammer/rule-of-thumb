<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'Banner',
  setup(){
    const { locale, t } = useI18n({
      inheritLocale: true
    })

    return { locale, t }
  },
  data:() => ({
    showElem: true
  })
})
</script>

<template>
    <div v-if="showElem" className="banner__page">
        <span className="banner__page-subtitle">{{ t('banner_label_speak_out') }}</span>
        <span className="banner__page-title">{{ t('banner_label_be_counted') }}</span>
        <p className="banner__page-description">{{ t('banner_label_rule_of_thumb_description') }}</p>
        <span className="banner__page-close">&times;</span>
    </div>
</template>

<style scoped>
.banner__page{
    display: grid;
    color: var(--color-black-1);
    background-color: var(--color-silver-1);
    grid-template-rows: repeat(2, auto);
}
.banner__page-subtitle,
.banner__page-description{
    font-family: Lato-Light;
}
.banner__page-subtitle{
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    place-self: flex-end;
    justify-self: center;
    text-align: center;
    line-height: 1;
}
.banner__page-title{
    font-family: Lato;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    font-weight: 700;
    justify-self: center;
    line-height: 1;
}
.banner__page-description{
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    margin: 0;
    place-self: center;
}
.banner__page-close{
    display: none;
    grid-column: 3 / 4;
    grid-row: 1 / 3;
    place-self: center;
}

@media screen and (min-width: 0) {
    .banner__page{
        margin: 1.5rem 1rem;
        padding: 0.75rem;
        grid-template-columns: 35% 60%;
        column-gap: 5%;
    }
    .banner__page-subtitle{
        font-size: 3.25vw;
    }
    .banner__page-title{
        font-size: 5.5vw;
    }
    .banner__page-description{
        font-size: 3.75vw;
    }
}
@media screen and (min-width: 414px) {
    
}
@media screen and (min-width: 768px) {
    .banner__page{
        margin: 1.75rem 1.25rem;
        padding: 1rem;
        grid-template-columns: 25% 73%;
        column-gap: 2%;
    }
    .banner__page-subtitle{
        font-size: 2.5vw;
    }
    .banner__page-title{
        font-size: 4.25vw;
    }
    .banner__page-description{
        font-size: 2.75vw;
    }
}
@media screen and (min-width: 1024px) {
    .banner__page{
        margin: 2.25rem 1.75rem;
        grid-template-columns: 22% 76%;
    }
    .banner__page-subtitle{
        font-size: 2vw;
    }
    .banner__page-title{
        font-size: 3.5vw;
    }
    .banner__page-description{
        font-size: 2.25vw;
    }
}
@media screen and (min-width: 1280px) {
    .banner__page{
        width: 78vw;
        margin: 2.25rem auto;
        grid-template-columns: 15% 78% 5%;
        column-gap: 1%;
    }
    .banner__page-subtitle{
        font-size: 1.25vw;
    }
    .banner__page-title{
        font-size: 2.15vw;
    }
    .banner__page-description{
        font-size: 1.45vw;
    }
    .banner__page-close{
        display: block;
        font-size: 3vw;
    }
}
@media screen and (min-width: 1536px) {
    .banner__page{
        width: 72vw;
    }
    .banner__page-subtitle{
        font-size: 0.95vw;
    }
    .banner__page-title{
        font-size: 1.5vw;
    }
    .banner__page-description{
        font-size: 1vw;
    }
    .banner__page-close{
        display: block;
        font-size: 3vw;
    }
}
</style>
