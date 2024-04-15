import PropTypes from 'prop-types';

function Movie({id, coverImage, title, summary, genres}) {
  return (
    <div>
    <img src={coverImage} />
    <p><a href={`/movie?id=${id}`}>{title}</a></p>
    <p>{summary}</p>
    <ul>
      {genres.map((genre, index) =>
        <li key={index}>{genre}</li>
      )}
    </ul>
  </div>
  )
}

Movie.propTypes = {
  coverImage : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
