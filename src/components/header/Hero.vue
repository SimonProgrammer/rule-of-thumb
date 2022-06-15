<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import Navbar from './Navbar.vue'
import FeatureCard from './FeatureCard.vue'

export default defineComponent({
  name: 'Hero',
  components:{
    Navbar,
    FeatureCard
  },
  setup(){
    const { locale, t } = useI18n({
      inheritLocale: true
    })
    return { locale, t }
  },
  data: () => ({
    daysAmount: 22
  }),
})
</script>

<template>
  <section className="hero">
    <navbar />
    <div className="hero__closing-feature">
      <feature-card />
    </div>
    <footer className="hero__closing-gauge">
      <article className="closing-gauge__left">
        <span className="closing-gauge__title">{{ t('hero_bottom_closing_label') }}</span>
      </article>
      <article className="closing-gauge__right">
        <span className="closing-gauge__number">{{ daysAmount }}</span>
        <span className="closing-gauge__desc">{{ t('hero_bottom_days_label') }}</span>
      </article>
    </footer>
  </section>
</template>

<style scoped>
  .hero{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-size: cover;
    background-position: center;
  }
  .hero__closing-feature{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
  .hero__closing-gauge{
    font-family: Lato;
    display: flex;
    flex-direction: row;
    background-color: var(--color-light-background);
  }
  .closing-gauge__left{
    font-family: Lato-Light;
    position: relative;
    display: flex;
    background-color: var(--color-dark-background);
    justify-content: flex-end;
    align-items: center;
  }
  .closing-gauge__left:after {
    position: absolute;
    right: -.5rem;
    display: block;
    width: 0;
    height: 0;
    border-top: 0.25rem solid transparent;
    border-bottom: 0.25rem solid transparent;
    border-left: 0.5rem solid var(--color-dark-background);
    content: ' ';
  }
  .closing-gauge__title{
    text-transform: uppercase;
    color: var(--color-white);
    font-weight: 300;
  }
  .closing-gauge__right{
    display: flex;
    color: var(--color-black-1);
    flex-basis: 70%;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem 1rem;
    font-size: 36px;
  }
  .closing-gauge__number{
    font-weight: 400;
  }
  .closing-gauge__desc{
    font-family: Lato-Light;
    font-weight: 300;
  }
@media screen and (min-width: 0) {
  .hero{
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.698864) 0%, rgba(0, 0, 0, 0.0001) 25%), url(@/assets/images/pope-bg-mobile.svg);
    row-gap: 1rem;
  }
  .hero__closing-feature{
    margin-left: 1rem;
  }
  .closing-gauge__left{
    padding: 0 0.5rem;
    flex-basis: 30%;
    font-size: 4vw;
  }
  .closing-gauge__right{
    padding: 0.75rem 1rem;
    flex-basis: 70%;
    font-size: 5.5vw;
  }
}
@media screen and (min-width: 414px) {
  .closing-gauge__left{
    flex-basis: 35%;
  }
  .closing-gauge__right{
    flex-basis: 65%;
  }
}
@media screen and (min-width: 768px) {
  .hero{
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.698864) 0%, rgba(0, 0, 0, 0.0001) 25%),url(@/assets/images/pope-bg-tablet.svg);
  }
  .closing-gauge__left{
    font-size: 2.5vw;
  }
  .closing-gauge__right{
    font-size: 3.5vw;
  }
}
@media screen and (min-width: 1024px) {
  .hero{
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.698864) 0%, rgba(0, 0, 0, 0.0001) 30%),url(@/assets/images/pope-bg-desktop.svg);
  }
  .hero__closing-feature{
    margin-left: 0;
  }
  .hero__closing-feature .feature__card{
    grid-column-start: 2;
    grid-column-end: 12;
  }
  .closing-gauge__left{
    font-size: 2vw;
  }
  .closing-gauge__right{
    padding: 0.5rem 1rem;
    font-size: 3vw;
  }
}
@media screen and (min-width: 1280px) {
  .hero{
    row-gap: 1.5rem;
  }
  .closing-gauge__left{
    font-size: 1.75vw;
  }
  .closing-gauge__right{
    padding: 0.5rem 1.25rem;
    font-size: 2.75vw;
  }
}
@media screen and (min-width: 1536px) {
  .hero{
    min-height: 85vh;
  }
  .closing-gauge__left{
    font-size: 1.5vw;
  }
  .closing-gauge__right{
    font-size: 2.25vw;
  }
}
</style>
