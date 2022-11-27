const login = async () => {
  try {
    const result = await fetch(`${process.env["NEXT_PUBLIC_API_URL"]}/login`!, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Origin: process.env["NEXT_PUBLIC_API_ORIGIN"]!,
      },
    });

    return result.json();
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  try {
    return await fetch(`${process.env["NEXT_PUBLIC_API_URL"]}/logout`!, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Origin: process.env["NEXT_PUBLIC_API_ORIGIN"]!,
      },
    });
  } catch (error) {
    throw error;
  }
};

const getUser = async (
  userId: string
): Promise<{ userId: string } | unknown> => {
  try {
    const request = await fetch(
      `${process.env["NEXT_PUBLIC_API_URL"]}/user/${userId}`!,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Origin: process.env["NEXT_PUBLIC_API_ORIGIN"]!,
        },
      }
    );

    if (!request.ok) {
      throw new Error("Fetching user failed");
    }

    return await request.json();
  } catch (error) {
    throw error;
  }
};

export {login, logout, getUser};
