<template>
      <div>
      <b-card class="pf-vertical-card">
        <a herf="#" class="imgbox">
          <img :src="image" alt="Card image" />
        </a>
        <div class="title">
          <slot name="title">
          <h2 href="#">
            {{ title }}
          </h2>
          </slot>
          <p>
            دسته بندی اصلی : {{ category }}
          </p>
          <div class="d-flex justify-content-between pb-3">
            <h6>
              <i class="fas fa-dollar-sign pf-orange"></i>
              {{ price }} {{ typeprice }}
            </h6>
            <h6>
              <i class="fas fa-download pf-pink"></i>
             {{ download }}
            </h6>
          </div>
          <div class="pf-btn-card">
            <b-button class="preview">
              <i class="fas fa-desktop"></i>
              پیش نمایش
            </b-button>
            <b-button class="moredetials">
              <b-icon icon="justify-right" aria-hidden="true"></b-icon>
              مشاهده جزئیات
            </b-button>
          </div>
        </div>
      </b-card>
    </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String,
    image: String,
    category: String,
    price: String,
    typeprice: String ,
    download: String,
    version: String,
  },
  data() {
    return {

    }
  }
}
</script>
