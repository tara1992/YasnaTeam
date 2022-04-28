import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export default {

  getCategories({ commit }) {
    axios
    .get('tagging-labels?slug=blog-category&including[]=image&including[]=title&including[]=slug')
    .then(res => {
      commit('setCategories', res.data.results)
    })
    .catch(error => {
      console.log(error);
    })
  },

  getPosts({ commit }) {
    axios
    .get('content-post-lists?type=blog&including[]=id&including[]=title&including[]=image&including[]=synopsis&including[]=published_at&including[]=tagging_labels:tags&including[]=url_encode&including[]=slug&limit=10&locale=fa')
    .then(res => {
      commit('setPosts', res.data.results)
    })
    .catch(error => {
      console.log(error);
    })
  },


}
