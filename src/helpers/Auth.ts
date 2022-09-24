import Store from "./Store";

const Auth: any = {
  validate: async () => {
    const token = await Store.get("token");
    const response = await fetch(
      `${process.env.REACT_APP_API}/auth/validate-token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ token }),
      }
    );

    if (!response.ok) {
      return false;
    } else {
      return true;
    }
  },
};

export default Auth;
