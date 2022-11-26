import axios from 'axios'

const movieRequest = axios.create({
  baseURL: process.env.REACT_APP_MOVIE_API,

  headers: {
    lang: 'en',
    versioncode: '11',
    clienttype: 'ios_jike_default',
  },
})

movieRequest.interceptors.response.use(
  (response) => {
    if (response && response.data && response.data.data) {
      return response.data.data
    } else if (response && response.data) {
      return response.data
    }
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default movieRequest
