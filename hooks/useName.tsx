import { TwitterContext } from "@/context/context.action";
import axiosHook from "@/helpers/axiosHook";
import { Result } from "@/interfaces/resultType";
import { useContext } from "react";
import { useQuery } from "react-query";

export default function useName(name: string) {
  const { getData, getError, getLoading } = useContext(TwitterContext);
  return useQuery<Result>(
    ["name", name],
    () => axiosHook.get(`/users/by?usernames=${name}`),
    {
      cacheTime: 1000 * 60 * 60,
      staleTime: Infinity,
      enabled: name !== "",
      onSuccess: (data) => {
        getData(data);
      },
      onError: (error) => {
        getError(error);
      },
    }
  );
}
