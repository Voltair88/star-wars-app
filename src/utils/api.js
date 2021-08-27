
export const urls = [
    "https://swapi.dev/api/people/1",
    "https://swapi.dev/api/people/2",
    "https://swapi.dev/api/people/3",
    "https://swapi.dev/api/people/4",
    "https://swapi.dev/api/people/5",
  ];
    
  export const fetchData = async () => {
    try {
      const response = await Promise.all(
        urls.map(url => fetch(url).then(res => res.json()))
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log('Error', error);
    }
  };