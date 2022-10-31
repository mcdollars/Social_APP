import Store from "./Store";

const create = async (data: any) => {
  const token = await Store.get("token");
  const response = await fetch(
    `${process.env.REACT_APP_API}/api/group-experience`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": token,
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    return false;
  } else {
    return await response.json();
  }
};

const update = async (data: any) => {
  const token = await Store.get("token");
  const response = await fetch(
    `${process.env.REACT_APP_API}/api/group-experience/${data.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": token,
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    return false;
  } else {
    return await response.json();
  }
};

const show = async () => {
  const token = await Store.get("token");
  const response = await fetch(
    `${process.env.REACT_APP_API}/api/group-experience`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": token,
      },
    }
  );

  if (!response.ok) {
    return false;
  } else {
    return await response.json();
  }
};

export { create, update, show };
