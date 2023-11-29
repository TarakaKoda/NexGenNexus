import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "4c7a491654d74df6a4e4e966f3bafe27",
  },
});

export interface FetchResponse<T> {
  length: number;
  count: number;
  next: string | null;
  results: T[];
}

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
