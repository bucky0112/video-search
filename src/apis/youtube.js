import axios from 'axios'

const KEY = 'AIzaSyBJR5W3L2odEkj5F3mpD3Wt2nWvcj1uU1A'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})
