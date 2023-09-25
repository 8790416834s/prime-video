const MovieItem = props => {
  const {movieDetails} = props
  const {categoryId, thumbnailUrl} = movieDetails
  console.log(movieDetails)

  return (
    <div>
      <img src={thumbnailUrl} alt={categoryId} />
    </div>
  )
}
export default MovieItem
