const getMovie = (title: string) => {
  return fetch(`http://www.omdbapi.com/?t=${title}&apikey=${process.env.REACT_APP_API_KEY}`)
          .then((result: Response) => result.json())
          .catch((error: Error) => console.error(error));
}

const SearchServices = {
  getMovie,
}

export default SearchServices;