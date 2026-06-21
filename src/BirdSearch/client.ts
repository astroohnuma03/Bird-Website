import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const axiosWithCredentials = axios.create({ withCredentials: true });
const BIRDS_API = `${REMOTE_SERVER}/api/birds`;

export const get_bird = async (query: string) => {
  const { data } = await axiosWithCredentials.get(`${BIRDS_API}/${query}`);
  return data;
};