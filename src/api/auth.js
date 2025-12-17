const BASE_URL = "http://127.0.0.1:8000/api"; 

export async function registerHawkerUser(data) {
  const res = await fetch(`${BASE_URL}/hawker/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function loginHawkerUser(data) {
  const res = await fetch(`${BASE_URL}/hawker/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

const BASE_URL = "http://127.0.0.1:8000/api"; 

export async function registerVendorUser(data) {
  const res = await fetch(`${BASE_URL}/vendor/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function loginVendorUser(data) {
  const res = await fetch(`${BASE_URL}/vendor/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

