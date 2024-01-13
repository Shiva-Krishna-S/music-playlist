import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const PlaylistItem = props => {
  const {songDetails, onDeleteListItem} = props
  const {id, imageUrl, name, genre, duration} = songDetails
  const onClickDelete = () => {
    onDeleteListItem(id)
  }

  return (
    <li className="list-item">
      <div className="song-details">
        <img src={imageUrl} alt="track" className="song-image" />
        <div>
          <p className="song-name">{name}</p>
          <p className="song-genre">{genre}</p>
        </div>
      </div>
      <div className="duration-and-delete-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          aria-label="delete-button"
          onClick={onClickDelete}
          className="delete-button"
          data-testid="delete"
        >
          <AiOutlineDelete size={25} color="#ffffff" />
        </button>
      </div>
    </li>
  )
}

export default PlaylistItem
