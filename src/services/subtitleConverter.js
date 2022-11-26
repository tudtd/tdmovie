const subtitleConvert = (url) =>
  `${process.env.REACT_APP_SUBTITLE_CONVERTER_API}?url=${encodeURIComponent(
    url
  )}`

export default subtitleConvert
