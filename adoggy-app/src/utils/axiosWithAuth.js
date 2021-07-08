import axios from "axios";

const axiosWithAuth = () => {
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJwN3JORkkyZ1VJb1lIQ1dKTVVVQTVCQU9vaXJuU2ZQMzBEcG55OGM0YWpRRHRIUGt5ViIsImp0aSI6ImM2NmY5OGU0MjRmMzg2NTdmNmYxOTBkYzMyYzUyNTBjYTA4NjQ0NWFmZDJjY2YyMWRhY2NlMzhjYjAzMzBkNjY3NTY5OGFhYjYzYzYzOTgyIiwiaWF0IjoxNjI1MTI5MDY3LCJuYmYiOjE2MjUxMjkwNjcsImV4cCI6MTYyNTEzMjY2Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.rK8HaTtf8fjh_HlJt-7FqhGyCH-do0eAcDRe2N942rsaescrtPMSH4iMWP9gQBsFmVnfSRVJzJBwbz8aOnsWNKXWPJ_dCdn6RclqsIUxZzpUAWo1fQaAy3yUYVjWRFr0_K_XHsiAQJRUTY3H9Fa9Lsi5BtSt4J88PHL1BS7ftlAVGVG27SO0zMks-EFOpXFmevxfRad8WgfAY3suCOSfrUfVY0Ex2wV_oTdchOm-gnIGYo41l2Qx29Pb8mh_a3pnm5MeIJVwBgd8pe7wQ2LL4spYc9gITlBUY9FFMtz8BI236ibYZtnHQmfrmrQn8dUaPDMMAt1WE40TqridKNFshg"

  return axios.create({
    headers: {
      // baseURL: 'https://subreddit-post.herokuapp.com',
      Authorization: token
    }
  });
};

export default axiosWithAuth;