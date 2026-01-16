// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Helper function for API calls
const apiCall = async (method, endpoint, data = null, token = null) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const options = {
    method,
    headers,
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Design APIs
export const designAPI = {
  getAll: (category = null) => {
    const query = category ? `?category=${category}` : '';
    return apiCall('GET', `/designs${query}`);
  },
  getById: (id) => apiCall('GET', `/designs/${id}`),
  create: (data, token) => apiCall('POST', '/designs', data, token),
  update: (id, data, token) => apiCall('PUT', `/designs/${id}`, data, token),
  delete: (id, token) => apiCall('DELETE', `/designs/${id}`, null, token),
};

// User APIs
export const userAPI = {
  register: (data) => apiCall('POST', '/users/register', data),
  login: (data) => apiCall('POST', '/users/login', data),
  getProfile: (token) => apiCall('GET', '/users/profile', null, token),
  updateProfile: (data, token) => apiCall('PUT', '/users/profile', data, token),
};

// Contact APIs
export const contactAPI = {
  submit: (data) => apiCall('POST', '/contact/submit', data),
  getMessages: (token) => apiCall('GET', '/contact/messages', null, token),
  getMessage: (id, token) => apiCall('GET', `/contact/message/${id}`, null, token),
  updateMessageStatus: (id, status, token) => 
    apiCall('PUT', `/contact/message/${id}`, { status }, token),
};

// Portfolio APIs
export const portfolioAPI = {
  getAll: (featured = false) => {
    const query = featured ? '?featured=true' : '';
    return apiCall('GET', `/portfolio${query}`);
  },
  getById: (id) => apiCall('GET', `/portfolio/${id}`),
  create: (data, token) => apiCall('POST', '/portfolio', data, token),
  update: (id, data, token) => apiCall('PUT', `/portfolio/${id}`, data, token),
  delete: (id, token) => apiCall('DELETE', `/portfolio/${id}`, null, token),
};

// Token management
export const tokenAPI = {
  setToken: (token) => {
    localStorage.setItem('authToken', token);
  },
  getToken: () => {
    return localStorage.getItem('authToken');
  },
  removeToken: () => {
    localStorage.removeItem('authToken');
  },
  isLoggedIn: () => {
    return !!localStorage.getItem('authToken');
  },
};

export default {
  designAPI,
  userAPI,
  contactAPI,
  portfolioAPI,
  tokenAPI,
};
