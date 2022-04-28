<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'devextreme/dist/css/dx.light.css'
import 'vue-select/dist/vue-select.css'

export default {
  name: 'App',
}
</script>

<style lang="scss">
  @import '@/assets/css/style';
</style>
