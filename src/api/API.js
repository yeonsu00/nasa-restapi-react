import axios from "axios";

// async function getData() {
//     try {
//       //응답 성공
//       const response = await axios.get('https://images-api.nasa.gov/search?q=apollo%2011...');
//       console.log(response);
//     } catch (error) {
//       //응답 실패
//       console.error(error);
//     }
//   }

const NasaApi = axios.create({
    baseUrl: 'https://images-api.nasa.gov/',
    // headers: {

    // },
});

// search movie api
export const movieSearch = (params) => {
    return NasaApi.get('https://images-api.nasa.gov/');
  };