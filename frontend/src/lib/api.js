const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const apiRequest = async (path, options = {}) => {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || 'Request failed');
  return data;
};

export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('userInfo') || 'null');
  return user?.token ? { Authorization: `Bearer ${user.token}` } : {};
};
