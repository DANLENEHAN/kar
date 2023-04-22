import axios from "axios";

const BASE_URL = "http://localhost:5000";

interface ServerResponse {
  data: ServerData;
  status: number;
  statusText: string;
}

type ServerData = {
  [key: string]: any;
};

function handleErrors(response: ServerResponse): ServerData {
  const errorResponse: ServerData = {
    data: {},
  };
  errorResponse.data["name"] = "CustomError";
  if (!response.data) {
    errorResponse.data["form"] = response.statusText;
  } else {
    const data = response.data;
    if (response.status === 400) {
      if (typeof data === "string") {
        errorResponse.data["form"] = data;
      } else if (data && Object.keys(data).length > 0) {
        const keys = Object.keys(data);
        keys.forEach((key) => {
          if (typeof data[key] === "string") {
            errorResponse.data[key] = [data[key]];
          } else if (Array.isArray(data[key])) {
            errorResponse.data[key] = data[key];
          }
        });
      }
    }
  }
  return errorResponse;
}

function post(url: string, payload: Object) {
  const response = axios
    .post(`${BASE_URL}/${url}`, payload)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return handleErrors(error.response);
    });
  return response;
}

const get = (url: string) => {
  const response = axios
    .get(`${BASE_URL}/${url}`)
    .then((response) => {
      return response;
    })
    .catch((error) => console.log(error));
  return response;
};

export { post, get };
