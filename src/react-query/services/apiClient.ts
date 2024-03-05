import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

class ApiClient<T> {
  endpoint: string;
  params: {};

  constructor(endpoint: string, params: {} = {}) {
    this.endpoint = endpoint;
    this.params = params;
  }

  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
}

export default ApiClient;
