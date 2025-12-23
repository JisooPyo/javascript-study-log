const API_URL = "https://pokemon-api-ecru-eta.vercel.app/";

export const request = async (type, searchWord) => {
  try {
    let url = `${API_URL}`;
    if (type && type !== "All") {
      url += `${type}`;
    }
    if (searchWord) {
      url += `?search=${searchWord}`;
    }

    const response = await fetch(url);
    if (response) {
      let data = await response.json();

      return data;
    }
  } catch (err) {
    console.log(err);
  }
};
