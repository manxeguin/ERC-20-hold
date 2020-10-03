const POST = "POST";
const GET = "GET";

const getJsonHeaders = () => ({
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

const getMethod = (methodValue) => {
  return {
    method: methodValue,
  };
};

const getBody = (requestParams) => {
  return {
    body: JSON.stringify(requestParams),
  };
};

const request = (url, params) => window.fetch(url, params).then((response) => response.json());

const get = (url) => {
  const getParams = { ...getMethod(GET), ...getJsonHeaders() };

  return request(url, getParams);
};

const post = (url, params) => {
  const postParams = {
    ...getMethod(POST),
    ...getBody(params),
    ...getJsonHeaders(),
  };

  return request(url, postParams);
};

export { get, post };
