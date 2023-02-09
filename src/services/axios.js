import axios from 'axios'

const randomDeviceId = (length = 16) => {
  const hexCharacters = '0123456789abcdef'
  let deviceid = ''
  for (let i = 0; i < length; ++i) {
    deviceid += hexCharacters.charAt(Math.floor(Math.random() * 16))
  }
  return deviceid
}

const movieRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,

  headers: {
    lang: 'en',
    versioncode: '32',
    clienttype: 'android_tem3',
    deviceid: randomDeviceId(16),
    // 'user-agent':
    //   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.109 Safari/537.36 OPR/84.0.4316.52',
  },
})

// movieRequest.interceptors.request.use(
//   async (config) => {
//     const customConfig = {
//       ...config,
//       headers: {
//         lang: 'en',
//         versioncode: '32',
//         clienttype: 'android_tem3',
//         deviceid: randomDeviceId(16),
//         sign: randomDeviceId(32),
//         // 'user-agent':
//         //   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.109 Safari/537.36 OPR/84.0.4316.52',
//       },
//     }
//     return customConfig
//   },
//   (err) => {
//     return Promise.reject(err)
//   }
// )

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
