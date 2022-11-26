const imageResizing = (url, w = 380, h = 532) =>
  `${url}?imageView2/1/w/${w}/h/${h}/format/webp/interlace/1/ignore-error/1/q/90!/format/webp`

export default imageResizing
