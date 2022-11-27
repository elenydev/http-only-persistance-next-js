import { memo, ReactElement, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/useAuth/useAuth";

type AuthHocProps = {
  children?: ReactElement;
};

const AuthHoc = ({ children }: AuthHocProps) => {
  const { push, pathname } = useRouter();
  const { useGetUser } = useAuth();
  const { isLoading, error, refetch, status } = useGetUser();

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (status === "idle" || status === "loading") {
    return <>Loading....</>;
  }

  if (!isLoading && children?.props.protectedRoute && error) {
    pathname !== "/login" && push("/login");
    return <></>;
  }

  return children!;
};

export default memo(AuthHoc);
