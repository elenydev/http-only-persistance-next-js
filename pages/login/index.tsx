import useAuth from "../../hooks/useAuth";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const { useLogin } = useAuth();
  const mutation = useLogin();
  const { push } = useRouter();

  const handleLoginClick = useCallback(() => {
    mutation.mutate(void null, {
      onSuccess: () => {
        push("/dashboard");
      },
    });
  }, [mutation, push]);

  return <button onClick={handleLoginClick}>Login</button>;
};

export default Login;
