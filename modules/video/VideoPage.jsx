import React from 'react'
import PropTypes from 'prop-types'
import EmbedVideoPlayer from './components/EmbedVideoPlayer'
import EmbedLiveChat from './components/EmbedLiveChat'

const VideoPage = ({videoId}) => {
  return (
    <div>
        <EmbedVideoPlayer videoId={videoId}/>
        <EmbedLiveChat videoId={videoId}/>
    </div>
  )
}

VideoPage.propTypes = {
    videoId : PropTypes.string
}

export default VideoPage