import { useQuery } from "react-query";
import api from "../utils/api";

export const useTasks = () => {
  return useQuery("tasks", async () => {
    const { data } = await api.get("/tasks");
    return data;
  });
};
