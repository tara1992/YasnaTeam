<template>
  <div dir="rtl">


          <b-container fluid>
            <transition name="fade" mode="out-in">
              <router-view :key="$route.path"></router-view>
            </transition>
          </b-container>


  </div>
</template>

<script>

export default {
  name: 'TheContainer',
  components: {

  },
}
</script>

<style lang="scss">
  @import '@/assets/css/style';
</style>
