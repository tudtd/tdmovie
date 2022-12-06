import movieRequest from './axios'

export const getHome = (page) =>
  movieRequest.get('homePage/getHome', {
    params: {
      page: page,
    },
  })

export const getMovie = async (category, id, episode) => {
  const detail = await movieRequest.get('movieDrama/get', {
    params: {
      category: category, // movie = 0, tv = 1
      id: id,
    },
  })

  let episodeId
  episode ? (episodeId = episode) : (episodeId = detail.episodeVo[0].id)

  const definition = detail.episodeVo[0].definitionList[0].code

  const media = await movieRequest.get('media/previewInfo', {
    params: {
      category: category,
      contentId: id,
      episodeId: episodeId,
      definition: definition,
    },
  })

  // const media = {}

  const subtitles = await detail.episodeVo.filter(
    (movie) => parseInt(movie.id) === parseInt(episodeId)
  )

  console.log('Movie detail: ', detail)
  console.log('Movie media: ', media)
  console.log('Movie subtitles: ', subtitles)

  return { detail, media, subtitles }
}

export const search = async (
  keyword,
  size = 50,
  sort = '',
  searchType = ''
) => {
  const response = await movieRequest.post('search/v1/searchWithKeyWord', {
    searchKeyWord: keyword,
    size: size,
    sort: sort,
    searchType: searchType,
  })

  const searchResults = await response.searchResults.map((movie) => {
    if (movie.domainType === 1) {
      return { ...movie, contentType: 'DRAMA' }
    } else if (movie.domainType === 0) {
      return { ...movie, contentType: 'MOVIE' }
    } else {
      return movie
    }
  })
  return searchResults
}
// export const search = (keyword, size = 50, sort = '', searchType = '') =>
//   movieRequest.post('search/v1/searchWithKeyWord', {
//     searchKeyWord: keyword,
//     size: size,
//     sort: sort,
//     searchType: searchType,
//   })

export const searchSuggestion = (keyword) =>
  movieRequest.post('search/searchLenovo', {
    searchKeyWord: keyword,
    size: 10,
  })

export const topSearch = async () => {
  const response = await movieRequest.get('search/v1/searchLeaderboard')
  const topMovies = await response.list.map((movie) => {
    if (movie.domainType === 1) {
      return { ...movie, contentType: 'DRAMA' }
    } else if (movie.domainType === 0) {
      return { ...movie, contentType: 'MOVIE' }
    } else {
      return movie
    }
  })
  return topMovies
}
