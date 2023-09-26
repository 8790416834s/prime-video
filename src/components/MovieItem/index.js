import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'

const MovieItem = props => {
  const {movieDetails} = props
  const {videoUrl, thumbnailUrl} = movieDetails
  console.log(videoUrl)

  return (
    <div>
      <Popup
        modal
        trigger={
          <button type="button" className="thumbnail-btn">
            <img src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
      >
        {close => (
          <>
            <button
              type="button"
              className="popup-close-btn"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ReactPlayer url={videoUrl} controls />
          </>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
