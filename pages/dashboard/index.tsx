import useAuth from "../../hooks/useAuth";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { useLogout } = useAuth();
  const mutation = useLogout();
  const { push } = useRouter();

  const handleLogout = useCallback(() => {
    mutation.mutate(void null, {
      onSuccess: () => {
        push("/login");
      },
    });
  }, [mutation, push]);

  return <button onClick={handleLogout}>Logout</button>;
};

export async function getStaticProps() {
  return {
    props: {
      protectedRoute: true,
    },
  };
}

export default Dashboard;
