const getMovie = (title: string) => {
  return fetch(`http://www.omdbapi.com/?t=${title}`)
          .then((result: Response) => result.json())
          .then((data: any) => console.log(data))
          .catch((error: any) => console.error(error));
}

const SearchServices = {
  getMovie,
}

export default SearchServices;