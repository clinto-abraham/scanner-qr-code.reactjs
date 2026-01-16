import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "../../api";
// import { axiosClient } from "../../api/apiAxios";

export function useEvents() {
  return useQuery({
    queryKey: ["events", "all"],
    queryFn: async () => {
      const res = await axiosClient.post("/mongo/events/get/all", {
        payload: {
          page: 1,
          limit: 10,
        },
      });
      return res?.data?.data;
    },
    staleTime: 1000 * 60 * 10, // 10 min fresh
    cacheTime: 1000 * 60 * 30, // 30 min in memory
    refetchOnWindowFocus: false,
  });
}
