import ThemeAndVideoContext from './context/ThemeAndVideoContent'

import {
  ItemLink,
  GamingListItem,
  GamingThumbNailImage,
  GamingContentSection,
  GamingTitle,
  GamingViewAndDate,
} from './styledComponents'
import {className} from 'postcss-selector-parser'

const VideoCard = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <ItemLink to={`/videos/${id}`} className="link">
            <GamingThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
            <GamingContentSection>
              <GamingTitle color={textColor}> {title}</GamingTitle>
              <GamingViewAndDate color={textColor}>
                {viewCount} Watching Worldwide
              </GamingViewAndDate>
            </GamingContentSection>
          </ItemLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default VideoCard
