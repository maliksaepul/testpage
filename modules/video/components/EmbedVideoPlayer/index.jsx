import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'

const EmbedVideoPlayer = ({ videoId }) => {
    return (
        <div className={styles.video}>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                allowFullScreen={true}></iframe>
        </div>
    )
}

EmbedVideoPlayer.propTypes = {
    videoId: PropTypes.string
}

export default EmbedVideoPlayer