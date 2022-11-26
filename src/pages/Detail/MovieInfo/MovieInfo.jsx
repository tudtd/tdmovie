import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import { MdPlaylistAdd as AddIcon } from 'react-icons/md'
import { MdPlaylistAddCheck as DoneIcon } from 'react-icons/md'

import styles from './MovieInfo.module.scss'
import ReadMore from '../../../components/ReadMore/ReadMore'

const cx = classNames.bind(styles)

const MovieInfo = ({
  detail,
  media,
  isFavorited,
  addToFavorites,
  removeFromFavorites,
}) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('name')}>{detail.name}</div>

      {media.mediaUrl && (
        <div className={cx('actions')}>
          {isFavorited ? (
            <div className={cx('action-btn')} onClick={removeFromFavorites}>
              <DoneIcon className={cx('fav-icon')} />
              <span>My list</span>
            </div>
          ) : (
            <div className={cx('action-btn')} onClick={addToFavorites}>
              <AddIcon className={cx('fav-outline-icon')} />
              <span>My list</span>
            </div>
          )}
        </div>
      )}

      <ul className={cx('tags')}>
        {detail.tagList?.map((tag) => (
          <li key={tag.id}>{tag.name}</li>
        ))}
      </ul>
      <div className={cx('info')}>
        <div className={cx('rating')}>
          {detail.score && `${detail.score} IMDb`}
        </div>

        {detail.areaNameList && <div className={cx('separate')} />}

        <div className={cx('region')}>
          {detail.areaNameList && detail.areaNameList[0]}
        </div>

        {detail.year && <div className={cx('separate')} />}

        <div className={cx('release')}>{detail.year}</div>
      </div>
      <div className="div cx('cas')">
        {detail.starList && (
          <ReadMore length={50}>
            {detail.starList
              ?.reduce(
                (starListString, star) => starListString.concat(star.localName),
                []
              )
              .join(', ')}
          </ReadMore>
        )}
      </div>
      <div className={cx('introduction')}>
        {detail.introduction && (
          <ReadMore length={350}>{detail.introduction}</ReadMore>
        )}
      </div>
      {detail.episodeCount && (
        <div className={cx('episode')}>
          <h3 className={cx('episode-count')}>
            Episodes:
            <span>
              {`${
                detail.episodeVo.indexOf(
                  detail.episodeVo.find((el) => el.id === +media.episodeId)
                ) + 1
              }/${detail.episodeCount}`}
            </span>
          </h3>

          <ul className={cx('episode-list')}>
            {detail.episodeVo &&
              detail.episodeVo.map((item, index) => (
                <Link key={item.id} to={`?episode=${item.id}`}>
                  <li
                    className={cx(
                      detail.episodeVo.indexOf(
                        detail.episodeVo.find(
                          (el) => el.id === +media.episodeId
                        )
                      ) === index
                        ? 'episode-active'
                        : ''
                    )}
                  >
                    {index + 1}
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default MovieInfo
