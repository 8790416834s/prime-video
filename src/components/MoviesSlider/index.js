import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props
  const getActionMovies = () => {
    const actionMovies = moviesList.filter(movie =>
      movie.categoryId === 'ACTION' ? movie : '',
    )
    return actionMovies
  }

  const getComedyMovies = () => {
    const comedyMovies = moviesList.filter(movie =>
      movie.categoryId === 'COMEDY' ? movie : '',
    )
    return comedyMovies
  }

  console.log(getActionMovies())
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div>
      <h1>Action Movies</h1>
      <Slider {...settings}>
        {getActionMovies().map(each => (
          <MovieItem movieDetails={each} key={each.id} />
        ))}
      </Slider>
      <h1>Comedy Movies</h1>
      <Slider {...settings}>
        {getComedyMovies().map(each => (
          <MovieItem movieDetails={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
