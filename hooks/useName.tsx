import { TwitterContext } from "@/context/context.action";
import { instance } from "@/helpers/axiosHook";
import { Result, TwitterResult } from "@/interfaces/resultType";
import { useContext } from "react";
import { useQuery } from "react-query";

export default function useName(name: string) {
  const { getData, getError } = useContext(TwitterContext);
  return useQuery<TwitterResult[]>(["name", name], () => instance.get(name), {
    cacheTime: 1000 * 60 * 60,
    staleTime: Infinity,
    enabled: name !== "",
    onSuccess: (data) => {
      getData({ data });
    },
    onError: (error) => {
      getError(error);
    },
  });
}
