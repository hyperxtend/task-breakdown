import axios from 'axios';

export const handleOnSearch = async (setResults) => {
  const searchURL = `https://itunes.apple.com/search?term=${searchTerm}&limit=10&entity=${mediaType}`;

  const response = await axios
    .get(searchURL)
    .then((result) => setResults(result.json()))
    .catch((error) => error);

  return response;
};
