<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="12" class="category-title">
          <h1> دسته بندی ها</h1>
        </b-col>
      </b-row>
      <!--   with api -->
      <div class="category-container">
        <div class="d-flex justify-content-around">
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
      <b-row>
        <b-col lg="4" md="6" sm="1"
               v-for="post in posts"
               :key="post.id"
               class="custom-card"
        >
          <b-card>
            <div class="header">
              <b-link :to="{name: 'SingleBlog', params:{'id': post.id, 'url': post.url_encode}}">
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

              </b-link>
              <div class="tag">
                <span>{{ post.tags[0].title }}</span>
              </div>
            </div>
            <div class="card-text">
              <div>
                <b-link :to="{name: 'SingleBlog', params:{'id': post.id, 'url': post.url_encode}}">
                <h3>
                  {{ post.title }}
                </h3>
                </b-link>
                <div v-if=" post.synopsis">
                  <p>{{ post.synopsis }}</p>
                </div>
                <div v-else>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با...
                  </p>
                </div>

              </div>
              <div class="row user">
                <b-col cols="8">
                  <b-link :to="{name: 'SingleBlog', params:{'id': post.id}}">
                    <div class="d-flex">
                      <img src="@/assets/img/avatar-1.svg" alt="user"/>
                      <h5>مهتاب میکائیلی</h5>
                    </div>
                  </b-link>
                  <p>{{ post.published_at | convertDate }}</p>
                </b-col>
                <b-col cols="4" class="comment">
                  <a href="">
                    <b-icon icon="chat-left" aria-hidden="true"></b-icon>
                    <span>5 دیدگاه</span>
                  </a>
                </b-col>
              </div>
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

    }
  },
  filters: {
    convertDate: function(value) {
      value = new Date(value);
      value = value.getDate() + '/' + value.getMonth() + '/' + value.getFullYear();
      return value;
    }
  },
  beforeCreate(){
    this.$store.dispatch('getCategories');
    this.$store.dispatch('getPosts');
  }
}
</script>
