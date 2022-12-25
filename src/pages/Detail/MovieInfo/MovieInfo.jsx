import { Link } from 'react-router-dom'
import { MdPlaylistAdd as AddIcon } from 'react-icons/md'
import { MdPlaylistAddCheck as DoneIcon } from 'react-icons/md'

import styles from './MovieInfo.module.scss'
import ReadMore from '../../../components/ReadMore/ReadMore'

const MovieInfo = ({
  detail,
  media,
  isFavorited,
  addToFavorites,
  removeFromFavorites,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>{detail.name}</div>

      {media.mediaUrl && (
        <div className={styles.actions}>
          {isFavorited ? (
            <div className={styles.actionBtn} onClick={removeFromFavorites}>
              <DoneIcon className={styles.favIcon} />
              <span>My list</span>
            </div>
          ) : (
            <div className={styles.actionBtn} onClick={addToFavorites}>
              <AddIcon className={styles.favOutlineIcon} />
              <span>My list</span>
            </div>
          )}
        </div>
      )}

      <ul className={styles.tags}>
        {detail.tagList?.map((tag) => (
          <li key={tag.id}>{tag.name}</li>
        ))}
      </ul>
      <div className={styles.info}>
        <div className={styles.rating}>
          {detail.score && `${detail.score} IMDb`}
        </div>

        {detail.areaNameList && <div className={styles.divider} />}

        <div className={styles.region}>
          {detail.areaNameList && detail.areaNameList[0]}
        </div>

        {detail.year && <div className={styles.divider} />}

        <div className={styles.release}>{detail.year}</div>
      </div>
      <div className={styles.star}>
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
      <div className={styles.introduction}>
        {detail.introduction && (
          <ReadMore length={350}>{detail.introduction}</ReadMore>
        )}
      </div>
      {detail.episodeCount && (
        <div className={styles.episode}>
          <h3 className={styles.episodeCount}>
            Episodes:
            <span>
              {`${
                detail.episodeVo.indexOf(
                  detail.episodeVo.find((el) => el.id === +media.episodeId)
                ) + 1
              }/${detail.episodeCount}`}
            </span>
          </h3>

          <ul className={styles.episodeList}>
            {detail.episodeVo &&
              detail.episodeVo.map((item, index) => (
                <Link key={item.id} to={`?episode=${item.id}`}>
                  <li
                    className={
                      detail.episodeVo.indexOf(
                        detail.episodeVo.find(
                          (el) => el.id === +media.episodeId
                        )
                      ) === index
                        ? styles.episodeActive
                        : ''
                    }
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
