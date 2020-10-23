export const apiGetSession = async (productId, customer, url) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/stripe/checkout-session`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, customer, url }),
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
};
export const apiGetPortalSession = async (customer) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/stripe/portal-session/${customer}`,
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

export const apiGetNewCustomerId = async () => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/stripe/customer`,
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
