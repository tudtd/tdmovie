import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Image = ({ src, width, height, alt, ...props }) => (
  <LazyLoadImage
    src={src}
    alt={alt}
    height={height}
    width={width}
    {...props}
    effect="opacity"
  />
)

export default Image
