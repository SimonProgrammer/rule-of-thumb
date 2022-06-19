<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'FooterPage',
  setup(){
    const { locale, t } = useI18n({
      inheritLocale: true
    })

    return { locale, t }
  }
})
</script>

<template>
    <footer className="footer__page">
        <div className="footer__page-left">
            <span className="footer__page-link">{{ t('footer_page_label_terms_conditions') }}</span>
            <span className="footer__page-link">{{ t('footer_page_label_privacy_policy') }}</span>
            <span className="footer__page-link">{{ t('footer_page_label_contact_us') }}</span>
        </div>
        <div className="footer__page-right">
            <span className="footer__page-follow">{{ t('footer_page_label_follow_us') }}</span>
            <article className="footer__page-social">
                <img 
                    src="@/assets/icons/twitter.svg" 
                    alt="twitter icon"
                    className="footer__page-icon" 
                />
                <img 
                    src="@/assets/icons/facebook.svg" 
                    alt="facebook icon"
                    className="footer__page-icon" 
                />
            </article>
        </div>
    </footer>
</template>

<style scoped>
.footer__page{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: 2px dashed var(--color-black-1);
    font-family: Lato;
}
.footer__page-left,
.footer__page-right,
.footer__page-social{
    display: flex;
}
.footer__page-social{
    flex-direction: row;
}
@media screen and (min-width: 0) {
    .footer__page{
        margin: 1.25rem 0;
        padding-top: 1.25rem;
    }
    .footer__page-left{
        flex-direction: column;
        row-gap: 1rem;
    }
    .footer__page-right{
        flex-direction: column;
        row-gap: 0.5rem;
        align-self: flex-end;
    }
    .footer__page-left,
    .footer__page-right{
        font-size: 1rem;
    }
    .footer__page-social{
        justify-content: space-between;
    }
}
@media screen and (min-width: 768px) {
    .footer__page{
        margin: 2rem 0;
        padding-top: 3rem;
    }
    .footer__page-left,
    .footer__page-right{
        flex-direction: row;
        font-size: 1.05rem;
    }
    .footer__page-left{
        column-gap: 1.5rem;
    }
    .footer__page-right,
    .footer__page-social{
        column-gap: 0.75rem;
    }
}
@media screen and (min-width: 1024px) {
    .footer__page-left,
    .footer__page-right{
        font-size: 1.25rem;
    }
    .footer__page-left{
        column-gap: 1.75rem;
    }
    .footer__page-right,
    .footer__page-social{
        column-gap: 1rem;
    }
}
@media screen and (min-width: 1280px) {
    
}
@media screen and (min-width: 1536px) {
    
}
</style>
