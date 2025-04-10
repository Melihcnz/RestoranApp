const API_BASE_URL = 'https://multi-api-qsav.onrender.com/api';

export async function fetchWithAuth(endpoint, options = {}) {
  const token = localStorage.getItem('token');
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    if (response.status === 401) {
      // Token geçersiz veya süresi dolmuş
      localStorage.removeItem('token');
      localStorage.removeItem('companyData');
      window.location.href = '/login';
    }
    throw new Error(data.message || 'Bir hata oluştu');
  }

  return data;
}

export const api = {
  login: async (credentials) => {
    return fetchWithAuth('/companies/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  getCompanyProfile: async () => {
    return fetchWithAuth('/companies/profile');
  },

  updateCompanyProfile: async (data) => {
    return fetchWithAuth('/companies/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  // Diğer API endpoint'leri buraya eklenebilir
}; 