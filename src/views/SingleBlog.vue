<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col lg="8" md="8" sm="12" class="content">
          <div class="top-pic hideDesktop">
            <img src="@/assets/img/res-pic.png" alt="image"/>
          </div>
          <h1>این طرز تهیه خورشت قیمه را هیچ جا ندیده اید!</h1>
          <div class="position-res d-flex mt-4">
            <p>
              <b-icon icon="calendar2" aria-hidden="true"></b-icon>
              <span>1400/09/21</span>
            </p>
            <p class="me-5">
              <b-icon icon="clock" aria-hidden="true"></b-icon>
              <span>خواندن این مطلب 4 دقیقه زمان میبرد</span>
            </p>
          </div>
          <div class="text">
            <p>
              زنگ در خانه را می‌زنند. برایتان خورش قیمه نذری آورده‌اند.
              چه عطری! چه رنگی! چه طعمی! ولی حیف که خیلی کم است و در چشم‌به‌هم‌زدنی تمام می‌شود.
              شما شاهد آن هستید که چطور قیمه به آن خوشمزگی از گلوی اعضای خانواده پایین می‌رود
              و به شما فقط در حد یک یا دو قاشق قیمه می‌رسد؛ شما هنوز هم دلتان از آن قیمه نذری می‌خواهد!
              خوب ایرادی ندارد. خودتان دست‌به‌کار شوید و یک خورشت قیمه خوشمزه درست کنید.
              ما در این مقاله شما را با طرز تهیه خورش قیمه آشنا می‌کنیم و در ادامه از فوت‌وفن‌های آن صحبت خواهیم کرد.
            </p>
            <h2>طرز تهیه خورش قیمه خوشمزه</h2>
            <img src="@/assets/img/single-big-pic.png"/>
            <h2 class="mb-4">مواد لازم خورش قیمه</h2>
            <div class="mt-2" v-for="item in items" :key="item.id">
              <b-icon icon="circle-fill" aria-hidden="true"></b-icon>
              <span>{{ item.text }}</span>
            </div>
            <div class="description">
              <h2>طرز تهیه خورش قیمه</h2>
              <p>
                از حدود ۱۲ ساعت قبل، لپه‌ها را خیس کنید. <br/>
                گوشت‌ها را به‌صورت مکعبی خرد کنید.<br/>
                پیازها را برش بزنید و در کمی روغن تفت دهید.<br/>
                بعد از نیم‌پزشدن پیازها، گوشت را به آن اضافه کنید. <br/>
                کمی فلفل بزنید.<br/>
                لپه‌ها را اضافه کنید و تفت دهید.<br/>
                ۵ لیوان آب را به همراه چوب دارچین اضافه کنید. <br/>
                در قابلمه را بگذارید. <br/>
                مواد به حداقل ۲ ساعت زمان برای پخت نیاز دارند. <br/>
                بعد از آن که گوشت و لپه‌ها پختند، رب گوجه را تفت دهید. <br/>
                رب گوجه، نمک و لیمو‌عمانی را به خورشت قیمه اضافه کنید.<br/>
                حدود ۴۵ دقیقه بعد که لیمو‌ها نرم شدند، گلاب و زعفران را بیفزایید.<br/>
                کمی از خورشت قیمه را بچشید؛ اگر ترش نبود، مقداری آبلیمو اضافه کنید. <br/>
                خورشت قیمه شما در پانزده دقیقه دیگر باید آماده شده باشد.<br/>
              </p>
              <p>
                زمان پخت و آماده‌سازی این غذا در حدود ۳ ساعت و ۱۵ دقیقه است و برای پذیرایی از ۳ نفر کافی‌ست.
                البته اگر می‌خواهید دلی از عزا دربیاورید، آن را تنهایی بخورید و انتقام آن خورش قیمه نذری را بگیرید!
                راستی سیب‌زمینی‌های سرخ‌کرده را فراموش نکنید. آن‌ها را روی خورش قیمه بریزید و از طعم آن لذت ببرید.
              </p>
            </div>
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
              <div v-for="tag in tags" :key="tag.id">
                <a href="#">{{ tag.label }}</a>
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
                <div class="mini-card" v-for="image in images" :key="image.id">
                  <img :src="image.pic" alt="image"/>
                  <div class="text">
                    <p>{{ image.caption }}</p>
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
  data() {
    return {
      videoPause: false,
      videoPlay: false,
      post: {},

      items: [
        {id: 1, text: '1/2 لیوان لپه'},
        {id: 2, text: '2 عدد پیاز'},
        {id: 3, text: '300 گرم گوشت گوسفند'},
        {id: 4, text: '3 قاشق غذاخوری رب گوجه'},
        {id: 5, text: '5 لیوان آب'},
        {id: 6, text: ' 1 عدد چوب دارچین'},
        {id: 7, text: '2 عدد لیمو عمانی'},
        {id: 8, text: '2 قاشق چای خوری زعفران دم کرده'},
        {id: 9, text: '1 قاشق غذاخوری گلاب'},
        {id: 10, text: 'سیب زمینی سرخ کرده'},
      ],
      images: [
        {id: 1, pic: require('@/assets/img/mini-card-1.jpg'), caption: 'آشپزی'},
        {id: 2, pic: require('@/assets/img/mini-card-2.jpg'), caption: 'سبک زندگی'},
        {id: 3, pic: require('@/assets/img/mini-card-3.jpg'), caption: 'سلامت'},
        {id: 4, pic: require('@/assets/img/mini-card-4.jpg'), caption: 'دانستنی'},
        {id: 5, pic: require('@/assets/img/mini-card-5.jpg'), caption: 'اخبار ترخینه'},
        {id: 6, pic: require('@/assets/img/mini-card-6.jpg'), caption: 'تازه ها'},
      ],
      tags: [
        {id: 1, label: 'هشتگ اول،'},
        {id: 1, label: 'هشتگ سوم،'},
        {id: 1, label: 'هشتگ مرتبط،'},
        {id: 1, label: 'آشپزی،'},
        {id: 1, label: 'وبلاگ'}
      ],
    }
  },
  computed: {
    ...mapGetters({
      posts: 'posts',
    }),
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
    this.$store.dispatch('getPosts');
  }

}
</script>

