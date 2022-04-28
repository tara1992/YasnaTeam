<template>
  <div class="container d-flex align-items-center min-vh-100">
    <div class="row w-100 justify-content-center text-center">
      <div class="col-6">
        <div class="w-100 e404">
          <img src="@/assets/img/website-security-403.png" width="700px" alt="IMG" >
        <div class="clearfix">
          <h1 class="display-3 mr-4 n404 text-white">403</h1>
          <h4 class="pt-3 n404 fs20">Oops! You dont have permision to see that...</h4>
          <p class="fs20" dir="rtl">دسترسی شما برای مشاهده این صفحه محدود شده است ...</p>
        </div>
        <b-button @click="$router.go(-2)" variant="secondary" class="me-3">
          <b-icon
          icon="arrow-left"
          scale="0.8"
          color="#fff"
          class="align-middle me-1"
          />
          بازگشت
        </b-button>
        <b-button to="/" variant="light">
          صفحه اصلی
          <b-icon
          icon="house"
          scale="0.8"
          color="#000"
          class="align-middle ms-1"
          />
        </b-button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page404'
}
</script>
