const subtitleConvert = (url) =>
  `${process.env.REACT_APP_SUBTITLE_CONVERTER}?url=${encodeURIComponent(url)}`

export default subtitleConvert
