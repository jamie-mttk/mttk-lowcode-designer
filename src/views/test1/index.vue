<template>
  <el-color-picker v-model="color" show-alpha :predefine="predefineColors" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import vuetify from '../../vuetify/plugins/vuetify'

console.log(vuetify.theme.current.value.colors.primary)
const color = ref('rgba(255, 69, 0, 0.68)')
const predefineColors = ref([
vuetify.theme.current.value.colors.primary,
vuetify.theme.current.value.colors.secondary,
vuetify.theme.current.value.colors.success,
vuetify.theme.current.value.colors.warning,
vuetify.theme.current.value.colors.error,
vuetify.theme.current.value.colors.info,

])
</script>
