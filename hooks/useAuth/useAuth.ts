import { useMutation, useQuery } from "react-query";
import { getUser, login, logout } from "../../api";
import { queryClient } from "../../pages/_app";

const useLogin = () =>
  useMutation(login, {
    onSuccess: (data) => {
      window.sessionStorage.setItem("userId", data.userId);
      queryClient.setQueryData(["user"], { userId: data.userId });
    },
  });

const useLogout = () =>
  useMutation(logout, {
    onSuccess: () => {
      window.sessionStorage.removeItem("userId");
      queryClient.setQueryData(["user"], undefined);
    },
  });

export const useGetUser = () => {
  const userId =
    typeof window !== "undefined" && window.sessionStorage.getItem("userId");
  return useQuery(["user"], () => getUser(userId || ""), {
    onSuccess: (data) => console.log(data),
    retry: false,
    enabled: false,
  });
};

export const useAuth = () => ({ useLogin, useLogout, useGetUser });
