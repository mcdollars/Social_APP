export const fetcCurrenthUser = async () => {
  const response = await fetch(`${process.env.REACT_APP_API}/api/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": "test",
    },
  });
  const data = await response.json();
  console.log({ data });
};
