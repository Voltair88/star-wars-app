import urls from "./urls";

export const fetchData = async () => {
  try {
    const response = await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json()))
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log("Error", error);
  }
};
