<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'Navbar',
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
  <nav className="navbar">
    <h1 className="navbar__title">{{ t('hero_title_site') }}</h1>
    <div className="navbar__menu">
        <ul className="navbar__menu-list">
            <li 
                className="navbar__menu-item">
                {{ t('hero_menu_item_past_trial') }}
            </li>
            <li 
                className="navbar__menu-item">
                {{ t('hero_menu_item_how_works') }}
            </li>
            <li 
                className="navbar__menu-item">
                {{ t('hero_menu_item_login_signup') }}
            </li>
        </ul>
        <img 
            src="@/assets/icons/search.svg" 
            alt="search button"
            className="navbar__search-icon" 
        />
    </div>
    <img 
        src="@/assets/icons/hamburger_menu.svg" 
        alt="hamburguer menu"
        className="navbar__menu-icon" 
    />
  </nav>
</template>

<style scoped>
.navbar{
    display: flex;
    flex-direction: row;
}
.navbar__title{
    font-family: Lato;
    color: var(--color-white);
    font-weight: 400;
    margin: 0;
}
.navbar__menu{
    flex-direction: row;
    flex-wrap: wrap;
}
.navbar__menu-list{
    display: flex;
    list-style-type: none;
    padding: 0;
}
.navbar__menu-item{
    font-family: Lato-Light;
    color: var(--color-white); 
}
@media screen and (min-width: 0) {
    .navbar{
        justify-content: space-between;
        margin-left: 1rem;
        height: 3.5rem;
    }
    .navbar__title{
        align-self: flex-end;
        font-size: 6.5vw;
    }
    .navbar__menu{
        display: none;
    }
    .navbar__menu-icon{
        width: 25px;
        padding: 1.25rem 1.25rem 0 0;
        align-self: start;
    }
}
@media screen and (min-width: 414px) {
    .navbar{
        height: 4.25rem;
    }
    .navbar__title{
        font-size: 7vw;
    }
    .navbar__menu-icon{
        width: 30px;
        padding: 1.5rem 1.5rem 0 0;
    }
}
@media screen and (min-width: 768px) {
    .navbar{
        height: 4.75rem;
        margin-left: 1.25rem;
    }
    .navbar__title{
        font-size: 4vw;
    }
    .navbar__menu-icon{
        width: 35px;
        padding: 1.75rem 1.75rem 0 0;
    }
}
@media screen and (min-width: 1024px) {
    .navbar{
        height: auto;
        margin: 2rem 0 0;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
    }
    .navbar__title{
        font-size: 2.75vw;
        align-self: auto;
        grid-column-start: 2;
        grid-column-end: 6;
    }
    .navbar__menu{
        display: flex;
        column-gap: 1rem;
        justify-content: flex-end;
        grid-column-start: 7;
        grid-column-end: 11;
    }
    .navbar__menu-list{
        column-gap: 1.5rem;
    }
    .navbar__menu-item{
        font-size: 1.25vw;
    }
    .navbar__menu-icon{
        display: none;
    }
    .navbar__search-icon{
        width: 25px;
    }
}
@media screen and (min-width: 1280px) {
    .navbar__title{
        font-size: 2.25vw;
    }
    .navbar__menu{
        column-gap: 1.5rem;
    }
    .navbar__menu-item{
        font-size: 1.15vw;
    }
    .navbar__search-icon{
        width: 30px;
    }
}
@media screen and (min-width: 1536px) {
    .navbar{
        margin: 3rem 0 0;
    }
    .navbar__menu{
        column-gap: 1.75rem;
    }
    .navbar__menu-list{
        column-gap: 1.75rem;
    }
    .navbar__search-icon{
        width: 36px;
    }
}
</style>
