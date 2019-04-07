import axios from 'axios'

const apiKey = 'keylHmetNqcx8w1MI'
// const openload = {
//   uname : 'b523646e37b4975f',
//   key: 'kX3imzU2'
// }
const instance = axios.create({
  baseURL: 'https://api.airtable.com/v0/appcjFSBf64y4yO8w',
  timeout: 100000,
  headers: {'Authorization': 'Bearer keylHmetNqcx8w1MI'}
});

export default {
  getMovies: (category) => {
    let url = ''
    switch(category) {
      case 'latest':
          url = `/all?filterByFormula=AND({year} = '2019')`;
          break;
      case 'rated':
          url = `/all?filterByFormula=AND({rating} >= '7')`;
          break;
          default:
          url = `/all`;
    }
    
    return instance.get(url).then(info => info.data)
  },
  getSearch: (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`
    return axios.get(url).then(info => info.data)
  },
  getMovieById: (movieId) => {
    const url = `https://api.airtable.com/v0/appcjFSBf64y4yO8w/all/${movieId}?api_key=${apiKey}`
    return axios.get(url).then(info => info.data)
  },
  getMovieDownloadLink: (mUrl) => {
    const url = `https://www.saveoffline.com/process/?url=${mUrl}&type=json`;
    return axios.get(url).then(info => info.data);
  },
  getOpenloadDownloadLink(oId) {
    // const ticketUrl = `https://api.openload.co/1/file/dlticket?file=${oId}&login=${openload.uname}&key=${openload.key}`
    // const dlUrl = `https://api.openload.co/1/file/dl?file={oId}&ticket={ticket}&captcha_response={captcha_response}`
    // axios.get(ticketUrl).then(info => {
    //     console.log(info.data);
    // })
  }
}
