import axios from 'axios';
import Cookies from 'js-cookie';

const baseUrl = process.env.NEXT_PUBLIC_IEAPI_URL;

function getTokenFromStorage() {
  return Cookies.get('token');
}

export async function logIn(payload) {
  try {
    const response = await axios.post(`${baseUrl}/account/login`, payload);
    const { data } = response.data;
    return { data, status: response.status };
  } catch (error) {
    if (error.response) return { error };
  }
}

export async function signUp(payload) {
  try {
    const response = await axios.post(`${baseUrl}/account/register`, payload);
    const { data } = response.data;
    return { data };
  } catch (error) {
    if (error.response) return { error: error.response.data };
  }
}

export async function checkUserValidation(payload) {
  try {
    const response = await axios.post(`${baseUrl}/account/check`, payload);
    const { data } = response.data;
    return { data };
  } catch (error) {
    if (error.message) return { error };
  }
}

export async function createUserAuthPin(pin, anonymousToken) {
  try {
    const response = await axios.post(`${baseUrl}/account/pin-anonymous`, pin, {
      headers: {
        Authorization: `Bearer ${anonymousToken}`,
        'Content-Type': 'application/json',
      },
    });
    const { status } = response;
    return { status };
  } catch (error) {
    if (error.message) return { error };
  }
}

export async function getProviders() {
  try {
    const response = await axios.get(`${baseUrl}/provider`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { data } = response.data;
    return { data };
  } catch (error) {
    if (error.message) return { error };
  }
}

export async function getAccountToken(payload) {
  try {
    const response = await axios.post(`${baseUrl}/account/token`, payload);
    const { data } = response.data;
    return { data };
  } catch (error) {
    if (error.response) return { error: error.response.data };
  }
}

export async function createTransactionToken(payload) {
  try {
    const token = getTokenFromStorage();
    const response = await axios.post(`${baseUrl}/transaction/token/create`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const { data } = response.data;
    return { data };
  } catch (error) {
    if (error.response) return { error: error.response.data };
  }
}

export async function generateTranscationToken(payload, paymentToken) {
  try {
    const response = await axios.post(`${baseUrl}/transaction/token/generate`, payload, {
      headers: {
        Authorization: `Bearer ${paymentToken}`,
        'Content-Type': 'application/json',
      },
    });
    const { data } = response.data;
    return { data };
  } catch (error) {
    if (error.response) return { error: error.response.data };
  }
}

export async function getTransactionTokenStatus(reference, paymentToken) {
  try {
    const response = await axios.post(`${baseUrl}/transaction/token/${reference}`, {
      headers: {
        Authorization: `Bearer ${paymentToken}`,
        'Content-Type': 'application/json',
      },
    });
    const { data } = response.data;
    return { data };
  } catch (error) {
    if (error.response) return { error: error.response.data };
  }
}

export async function retryTransaction(reference) {
  try {
    const token = getTokenFromStorage();
    const response = await axios.post(`${baseUrl}/transaction/token/retry`, reference, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const { data } = response.data;
    return { data };
  } catch (error) {
    if (error.response) return { error: error.response.data };
  }
}

export async function getTransactionWalletStatus(reference) {
  try {
    const token = getTokenFromStorage();
    const response = await axios.post(`${baseUrl}/transaction/wallet/${reference}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const { data } = response.data;
    return { data };
  } catch (error) {
    if (error.response) return { error: error.response.data };
  }
}

export async function validateNewMeter(meter, providerId) {
  try {
    const token = getTokenFromStorage();
    const response = await axios.get(`${baseUrl}/meter/validate/${meter}/${providerId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const { data } = response.data;
    return { data };
  } catch (error) {
    if (error.response) return { error: error.response.data };
  }
}

export async function addNewMeter(payload) {
  try {
    const token = getTokenFromStorage();
    const response = await axios.post(`${baseUrl}/account/meter`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const { data } = response.data;
    return { data };
  } catch (error) {
    if (error.response) return { error: error.response.data };
  }
}

export async function getUserAccount() {
  try {
    const token = getTokenFromStorage();
    const response = await axios.get(`${baseUrl}/account/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const { data } = response.data;
    return { data };
  } catch (error) {
    if (error.response) return { error: error.response.data };
  }
}

export async function getUserMeters(skip, limit) {
  try {
    const token = getTokenFromStorage();
    const response = await axios.get(`${baseUrl}/meter/me?skip=${skip}&limit=${limit}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const { data } = response.data;
    return { data };
  } catch (error) {
    if (error.response) return { error: error.response.data };
  }
}

export async function getUserTransactions(skip, limit, anonymousToken) {
  try {
    const token = getTokenFromStorage();
    const response = await axios.get(`${baseUrl}/transaction/token/me?skip=${skip}&limit=${limit}`, {
      headers: {
        Authorization: `Bearer ${anonymousToken ?? token}`,
        'Content-Type': 'application/json',
      },
    });
    const { data } = response.data;
    return { data };
  } catch (error) {
    if (error.response) return { error: error.response.data };
  }
}

export async function createWalletTransaction(payload) {
  try {
    const token = getTokenFromStorage();
    const response = await axios.post(`${baseUrl}/transaction/wallet/create`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const { data } = response.data;
    return { data };
  } catch (error) {
    if (error.response) return { error: error.response.data };
  }
}

export async function fundWalletTransaction(payload) {
  try {
    const token = getTokenFromStorage();
    const response = await axios.post(`${baseUrl}/transaction/wallet/fund`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const { data } = response.data;
    return { data };
  } catch (error) {
    if (error.response) return { error: error.response.data };
  }
}

export async function getUserWalletBalance() {
  try {
    const token = getTokenFromStorage();
    const response = await axios.get(`${baseUrl}/account/wallet`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const { data } = response.data;
    return { data };
  } catch (error) {
    if (error.response) return { error: error.response.data };
  }
}

export async function getUserWalletTransactions(skip, limit) {
  try {
    const token = getTokenFromStorage();
    const response = await axios.get(`${baseUrl}/transaction/wallet/me?skip=${skip}&limit=${limit}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const { data } = response.data;
    return { data };
  } catch (error) {
    if (error.response) return { error: error.response.data };
  }
}

export async function sendEnquiry(payload) {
  try {
    const response = await axios.post(`${baseUrl}/enquiry`, payload);
    return { status: response.status };
  } catch (error) {
    if (error.response) return { error: error.response.data };
  }
}
