import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  display: flex !important;
  align-items: center !important;
  cursor: pointer;
`

const Image = styled.img`
  max-width: 180px;
`

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Content onClick={() => onVideoSelect(video)} className='video-item item'>
      <Image
        alt={video.snippet.title}
        className='ui image'
        src={video.snippet.thumbnails.medium.url}
      />
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </Content>
  )
}

export default VideoItem
