<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'EnrollCandidate',
  setup(){
    const { locale, t } = useI18n({
      inheritLocale: true
    })

    return { locale, t }
  },
})
</script>

<template>
    <section className="enroll__candidate">
        <span className="enroll__candidate-title">{{ t('enroll_candidate_label_add') }}</span>
        <button className="enroll__candidate-button">{{ t('enroll_candidate_label_submit') }}</button>
    </section>
</template>

<style scoped>
.enroll__candidate{
    background-size: cover;
    background-position: center;
    font-family: Lato;
    display :flex;
}
.enroll__candidate-title{
    color: var(--color-black-1);
    text-align: center;
}
.enroll__candidate-button{
    background-color: var(--color-transparent);
    color: var(--color-black-2);
    border: 2px solid var(--color-black-2);
}
@media screen and (min-width: 0) {
    .enroll__candidate{
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 1.5rem;
        background-image: url(@/assets/images/people-bg-mobile.svg);
        padding: 1rem 1.5rem;
        row-gap: 0.75rem;
    }
    .enroll__candidate-title{
        font-size: 1.35rem;
    }
    .enroll__candidate-button{
        font-size: 1rem;
        padding: 0.75rem ;
        width: 100%;
    }
}
@media screen and (min-width: 768px) {
    .enroll__candidate{
        flex-direction: row;
        padding: 1.5rem 1.75rem;
        background-image: url(@/assets/images/people-bg-desktop.svg);
    }
    .enroll__candidate-button{
        font-size: 1.3rem;
        padding: 0.75rem 1.8rem;
        width: auto;
    }
}
@media screen and (min-width: 1024px) {
    .enroll__candidate{
        padding: 2rem 1.75rem;
    }
    .enroll__candidate-title{
        font-size: 1.8rem;
    }
    .enroll__candidate-button{
        font-size: 1.75rem;
        padding: 1.25rem 2.5rem;
    }
}
@media screen and (min-width: 1280px) {
    .enroll__candidate{
        padding: 1.25rem 2rem;
    }
    .enroll__candidate-title{
        font-size: 2rem;
    }
    .enroll__candidate-button{
        font-size: 1.75rem;
        padding: 1rem 4rem;
    }
}
</style>
