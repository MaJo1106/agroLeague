const getMovie = (title: string) => {
  return fetch(`http://www.omdbapi.com/?t=${title}&apikey=26fc991f`)
          .then((result: Response) => result.json())
          .catch((error: Error) => console.error(error));
}

const SearchServices = {
  getMovie,
}

export default SearchServices;