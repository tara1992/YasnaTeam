<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col lg="8" md="8" sm="12" class="content">
          <div class="top-pic hideDesktop">
            <img src="@/assets/img/res-pic.png" alt="image"/>
          </div>
          <h1> {{post.title}} </h1>
          <div class="position-res d-flex mt-4">
            <p>
              <b-icon icon="calendar2" aria-hidden="true"></b-icon>
              <span>
                {{ post.published_at | convertDate }}
              </span>
            </p>
            <p class="me-5">
              <b-icon icon="clock" aria-hidden="true"></b-icon>
              <span>خواندن این مطلب 4 دقیقه زمان میبرد</span>
            </p>
          </div>
          <div class="text">
            <div class="description">
              <p>
                {{post.synopsis}}
              </p>
            </div>
            <img
                v-if="post.image"
                :src='post.image.link'
                :alt="post.title"
            />
            <img
                v-else
                src='@/assets/img/card-1.jpg'
                :alt="post.title"
            />

            <div class="video">
              <h2> ویدئو طرز تهیه خورش قیمه</h2>
              <div class="c-video ">
                <video ref="video" src="@/assets/img/video-1.mp4" poster="@/assets/img/single-big-pic.png"
                       controls></video>
                <div class="controls">
                  <button ref="btnPlay" class="btn-play" @click="togglePlayPause()">
                    <img src="@/assets/img/btnvideo.png"/>
                  </button>
                </div>
              </div>
            </div>
            <div class="tag">
              <h3>تگ ها: </h3>
              <div v-for="tag in post.tags" :key="tag.id">
                <a href="#">{{ tag.title }}</a>
              </div>
            </div>
            <hr/>
            <div class="connection">
              <div class="short-link">
                <span>لینک کوتاه </span>
                <a href="">https://rby.com/features</a>
                <b-icon icon="files" aria-hidden="true"></b-icon>
              </div>
              <div class="share">
                <h4>اشتراک گذاری </h4>
                <ul>
                  <li><a href="">
                    <b-icon icon="facebook" aria-hidden="true"></b-icon>
                  </a></li>
                  <li><a href="">
                    <b-icon icon="whatsapp" aria-hidden="true"></b-icon>
                  </a></li>
                  <li><a href="">
                    <b-icon icon="files" aria-hidden="true"></b-icon>
                  </a></li>
                  <li><a href="">
                    <b-icon icon="twitter" aria-hidden="true"></b-icon>
                  </a></li>
                  <li><a href="">
                    <b-icon icon="telegram" aria-hidden="true"></b-icon>
                  </a></li>
                </ul>
              </div>
            </div>
            <div class="writer-post">
              <div class="user">
                <img src="@/assets/img/avatar-1.svg" alt="user"/>
                <h5>لادن مینایی</h5>
              </div>
              <p>
                دانشجوی ژنتیک دانشگاه اصفهان - عاشق روانشناسی و نویسندگی
                من خستگی ناپذیرم، خستگی ناپذیر از سفر کردن، دیدن چیزهای جدید و نوشتن
              </p>
            </div>
          </div>
        </b-col>
        <b-col lg="4" md="4" sm="12">
          <div class="single-category">
            <h1>دسته بندی</h1>
            <div class="category-container">
              <div class="">
                <div class="mini-card" v-for="category in categories" :key="category.id">
                  <img
                      v-if="category.image"
                      :src="category.image[0].link"
                      alt="image"
                  />
                  <img
                      v-else
                      src="@/assets/img/mini-card-1.jpg"
                      alt="image"
                  />
                  <div class="text">
                    <p>{{ category.title }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "SingleBlog",
  components: {},
  computed: {
    ...mapGetters({
      categories: 'categories',
      posts: 'posts',
    }),
  },
  data() {
    return {
      videoPause: false,
      videoPlay: false,
      post: {},

    }
  },
  filters: {
    convertDate: function(value) {
      value = new Date(value);
      value = value.getDate() + '/' + value.getMonth() + '/' + value.getFullYear();
      return value;
    }
  },
  watch: {
    posts() {
      this.post = this.posts.find(e => e.id == this.$route.params.id);
    }
  },
  methods: {
    togglePlayPause() {
      var video = this.$refs.video;
      var btnPlay = this.$refs.btnPlay;

      if (video.paused) {
        this.videoPause = !this.videoPause
        video.play();
        btnPlay.style.opacity = '0';
        video.style.filter = 'brightness(100%)';
      } else {
        video.pause();
        btnPlay.style.opacity = '1';
        video.style.filter = 'brightness(80%)';
      }
    }
  },
  beforeCreate() {
    this.$store.dispatch('getCategories');
    this.$store.dispatch('getPosts');
  }

}
</script>

