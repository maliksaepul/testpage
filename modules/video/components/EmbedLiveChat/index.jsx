import React from 'react'
import PropTypes from 'prop-types'

const EmbedLiveChat = ({videoId}) => {
  return (
    <div>
        <iframe width={"350px"} height={"500px"} src={`https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${process.env.APP_URL+'/video'}`}  ></iframe>
    </div>
  )
}

EmbedLiveChat.propTypes = {
    videoId : PropTypes.string
}

export default EmbedLiveChat