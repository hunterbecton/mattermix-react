export const apiLogin = async (email) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/users/authLogin`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const apiVerify = async (token) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/users/authVerify/${token}`,
      {
        method: 'POST',
        credentials: 'include',
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const apiLogout = async () => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/users/logout`,
      {
        method: 'POST',
        credentials: 'include',
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const apiIsLoggedIn = async () => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/users/isLoggedIn`,
      {
        method: 'GET',
        credentials: 'include',
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
};
