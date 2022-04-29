<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="12" class="category-title">
          <h1> دسته بندی ها</h1>
        </b-col>
      </b-row>
      <div class="category-container">
        <div class="d-flex justify-content-around">
          <div class="mini-card" v-for="image in images" :key="image.id">
            <a href="#"><img :src="image.pic" alt="image"/></a>
            <div class="text">
              <p>{{ image.caption }}</p>
            </div>
          </div>
        </div>
      </div>
      <!--   with api -->
      <!--      <div class="category-container">-->
      <!--        <div class="d-flex justify-content-around">-->
      <!--          <div class="mini-card" v-for="category in categories" :key="category.id">-->
      <!--            <img :src="category[0].link" alt="image"/>-->
      <!--            <div class="text">-->
      <!--              <p>{{ category.title }}</p>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <b-row>
        <b-col lg="4" md="6" sm="1" v-for="card in cardBody" :key="card.id" class="custom-card">
          <b-card>
            <div class="header">
              <b-link :to="{name: 'SingleBlog', params:{'id': card.id}}">
              <img :src='card.pic' alt="card"/>
              </b-link>
              <div class="tag">
                <span>آشپزی</span>
              </div>
            </div>
            <div class="card-text">
              <div>
                <b-link :to="{name: 'SingleBlog', params:{'id': card.id}}">
                <h3>
                  {{ card.title }}
                </h3>
                </b-link>
                <p>{{ card.text }}</p>
              </div>
            </div>
            <div class="row user">
              <b-col cols="8">
                <b-link :to="{name: 'SingleBlog', params:{'id': card.id}}">
                <div class="d-flex">
                  <img :src="card.avatar" alt="user"/>
                  <h5>{{ card.name }}</h5>
                </div>
                </b-link>
                <p>{{ card.date }}</p>
              </b-col>
              <b-col cols="4" class="comment">
                <a href="">
                <b-icon icon="chat-left" aria-hidden="true"></b-icon>
                <span>{{ card.comment }}</span>
                </a>
              </b-col>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Blog',
  components: {},
  computed: {
    ...mapGetters({
      categories: 'categories',
      posts: 'posts',
    }),
  },
  data() {
    return {
      images: [
        {id: 1, pic: require('@/assets/img/mini-card-1.jpg'), caption: 'آشپزی'},
        {id: 2, pic: require('@/assets/img/mini-card-2.jpg'), caption: 'سبک زندگی'},
        {id: 3, pic: require('@/assets/img/mini-card-3.jpg'), caption: 'سلامت'},
        {id: 4, pic: require('@/assets/img/mini-card-4.jpg'), caption: 'دانستنی'},
        {id: 5, pic: require('@/assets/img/mini-card-5.jpg'), caption: 'اخبار ترخینه'},
        {id: 6, pic: require('@/assets/img/mini-card-6.jpg'), caption: 'تازه ها'},
      ],
      cardBody: [
        {
          id: 1, pic: require('@/assets/img/card-2.jpg'), title: 'خواص گوشت بوقلمون',
          text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با...',
          avatar: require('@/assets/img/avatar-1.svg'),
          name: 'مهتاب میکائیلی',
          date: '1400/07/29',
          comment: '5 دیدگاه'
        },
        {
          id: 2, pic: require('@/assets/img/card-5.jpg'), title: 'خواص گوشت بوقلمون',
          text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با...',
          avatar: require('@/assets/img/avatar-2.svg'),
          name: 'علی رضوانی',
          date: '1400/07/29',
          comment: '55 دیدگاه'
        },
        {
          id: 3, pic: require('@/assets/img/card-3.jpg'), title: 'خواص گوشت بوقلمون',
          text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با...',
          avatar: require('@/assets/img/avatar-3.svg'),
          name: 'لادن مینایی',
          date: '1400/07/29',
          comment: '5 دیدگاه'
        },
        {
          id: 3, pic: require('@/assets/img/card-1.jpg'), title: 'خواص گوشت بوقلمون',
          text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با...',
          avatar: require('@/assets/img/avatar-2.svg'),
          name: 'علی رضوانی',
          date: '1400/07/29',
          comment: '21 دیدگاه'
        },
        {
          id: 3, pic: require('@/assets/img/card-4.jpg'), title: 'خواص گوشت بوقلمون',
          text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با...',
          avatar: require('@/assets/img/avatar-1.svg'),
          name: 'مهتاب میکائیلی',
          date: '1400/07/29',
          comment: '27 دیدگاه'
        },
        {
          id: 3, pic: require('@/assets/img/card-5.jpg'), title: 'خواص گوشت بوقلمون',
          text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با...',
          avatar: require('@/assets/img/avatar-3.svg'),
          name: 'لادن مینایی',
          date: '1400/07/29',
          comment: '95 دیدگاه'
        },
        {
          id: 3, pic: require('@/assets/img/card-1.jpg'), title: 'خواص گوشت بوقلمون',
          text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با...',
          avatar: require('@/assets/img/avatar-2.svg'),
          name: 'علی رضوانی',
          date: '1400/07/29',
          comment: '30 دیدگاه'
        },
        {
          id: 3, pic: require('@/assets/img/card-4.jpg'), title: 'خواص گوشت بوقلمون',
          text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با...',
          avatar: require('@/assets/img/avatar-1.svg'),
          name: 'مهتاب میکائیلی',
          date: '1400/07/29',
          comment: '53 دیدگاه'
        },
        {
          id: 3, pic: require('@/assets/img/card-5.jpg'), title: 'خواص گوشت بوقلمون',
          text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با...',
          avatar: require('@/assets/img/avatar-2.svg'),
          name: 'علی رضوانی',
          date: '1400/07/29',
          comment: '5 دیدگاه'
        },
      ]
    }
  },
  beforeCreate(){
    this.$store.dispatch('getCategories');
    this.$store.dispatch('getPosts');
  }
}
</script>
