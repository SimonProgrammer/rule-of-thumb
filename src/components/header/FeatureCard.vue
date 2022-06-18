<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'FeatureCard',
  setup(){
    const { locale, t } = useI18n({
      inheritLocale: true
    })

    return { locale, t }
  },
})
</script>

<template>
    <div className="feature__card">
        <div className="feature__card-container">
            <article className="feature__card-header">
                <span className="feature__card-subtitle">{{ t('hero_feature_subtitle') }}</span>
                <h2 className="feature__card-title">{{ t('hero_feature_title') }}</h2>
            </article>
            <p className="feature__card-description">{{ t('hero_feature_description') }}</p>
            <div className="feature__card-more">
                <img src="@/assets/icons/wikipedia.svg" alt="wikipedia" />
                <a 
                    href="https://en.wikipedia.org/wiki/Pope_Francis" target="_blank">
                    {{ t('hero_feature_more_information') }}
                </a>
            </div>
            <span className="feature__card-veredict">{{ t('hero_feature_veredict') }}</span>
        </div>
        <div className="feature__card-buttons">
            <article className="feature__card-like">
                <img 
                    src="@/assets/icons/thumbs-up.svg" 
                    alt="search button"
                    className="navbar__thumb-icon" 
                />
            </article>
            <article className="feature__card-dislike">
                <img 
                    src="@/assets/icons/thumbs-down.svg" 
                    alt="search button"
                    className="navbar__thumb-icon" 
                />
            </article>
        </div>
    </div>
</template>

<style scoped>
.feature__card{
    display: flex;
    flex-direction: column;
    position: relative;
    color: var(--color-white);
    background-color: var(--color-dark-background);
}
.feature__card-container{
    display: flex;
    flex-direction: column;
}
.feature__card-header{
    display: flex;
    flex-direction: column;
    row-gap: 0.15rem;
}

.feature__card-subtitle,
.feature__card-description{
    font-family: Lato-Light;
    font-weight: 300;
}

.feature__card-title,
.feature__card-description{
    margin: 0;
}
.feature__card-title,
.feature__card-veredict{
    font-family: Lato;
}
.feature__card-more{
    display: none;
}
.feature__card-more > a{
    text-decoration: underline;
    color: var(--color-white);
    font-family: Lato-Light;
    font-weight: 300;
    text-underline-offset: 0.15rem;
    cursor: pointer;
}
.feature__card-veredict{
    font-weight: 700;
}
.feature__card-buttons{
    display: grid;
    grid-template-columns: repeat(2, 50%);
}
.feature__card-buttons > *{
    display: flex;
    justify-content: center;
}

.feature__card-like{
    background-color: var(--color-green-positive);
}

.feature__card-dislike{
    background-color: var(--color-yellow-negative);
}

.feature__card-dislike > *{
    transform: rotate(180deg);
}

@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
  .feature__card {
    -webkit-backdrop-filter: blur(4rem);
    backdrop-filter: blur(4rem);
  }
}

@media screen and (min-width: 0) {
    .feature__card{
        width: 12rem;
    }
    .feature__card-container{
        padding: 0.75rem;
        row-gap: 0.75rem;
    }
    .feature__card-subtitle{
        font-size: 3.5vw;
    }
    .feature__card-title{
        font-size: 9vw;
    }
    .feature__card-description{
        font-size: 3.5vw;
    }
    .feature__card-veredict{
        font-size: 4vw;
    }
    .feature__card-buttons > *{
        padding: 0.75rem 0;
    }
    .navbar__thumb-icon{
        width: 16px;
    }
}
@media screen and (min-width: 414px) {
    .feature__card{
        width: 13.5rem;
    }
}
@media screen and (min-width: 768px) {
    .feature__card{
        width: 24.5rem;
        margin-bottom: 0.75rem;
    }
    .feature__card-container{
        padding: 1.75rem 1.25rem;
        row-gap: 1.25rem;
    }
    .feature__card-subtitle{
        font-size: 2.25vw;
    }
    .feature__card-title{
        font-size: 4.5vw;
    }
    .feature__card-description{
        font-size: 2.5vw;
    }
    .feature__card-more{
        display: flex;
        flex-direction: row;
        align-content: center;
        column-gap: 0.5rem;
    }
    .feature__card-more > img{
        width: 25px;
    }

    .feature__card-more > a{
        font-size: 2.25vw;
    }
    .feature__card-veredict{
        font-size: 3vw;
    }
    .feature__card-buttons > *{
        padding: 1rem 0;
    }
    .navbar__thumb-icon{
        width: 21px;
    }
}
@media screen and (min-width: 1024px) {
    .feature__card{
        width: 33rem;
    }
}
@media screen and (min-width: 1280px) {
    .feature__card{
        width: 33rem;
    }
    .feature__card-subtitle{
        font-size: 1.75vw;
    }
    .feature__card-title{
        font-size: 3.5vw;
    }
    .feature__card-description{
        font-size: 1.75vw;
    }
    .feature__card-more > a{
        font-size: 1.5vw;
    }
    .feature__card-veredict{
        font-size: 1.75vw;
    }
    .feature__card-buttons > *{
        padding: 1.15rem 0;
    }
    .navbar__thumb-icon{
        width: 30px;
    }
}
@media screen and (min-width: 1536px) {
    .feature__card-subtitle{
        font-size: 1.5vw;
    }
    .feature__card-title{
        font-size: 3vw;
    }
    .feature__card-description{
        font-size: 1.25vw;
    }
    .feature__card-more > a{
        font-size: 1.25vw;
    }
    .feature__card-veredict{
        font-size: 1.5vw;
    }
}
</style>
