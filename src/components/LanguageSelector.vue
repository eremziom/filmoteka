<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const i18n = useI18n()

function setLanguage(locale) {
    i18n.locale.value = locale
}

</script>

<template>
    <div class="lang">
        <button v-for="locale in $i18n.availableLocales" type="button" class="btn btn-secondary me-2 btn-sm" style="width: 35px" @click="setLanguage(locale)">{{ locale }}</button>
    </div>
</template>