export const API_CONFIG = {
  BASE_URL: 'http://localhost:3000',
  ENDPOINTS: {
    AUTH: {
      REGISTER: '/auth/register',
      LOGIN: 'api/v1/auth/login',
    },
    USERS: {
      PROFILE: '/users/profile',
      UPDATE: (id) => `/users/${id}`,
    }
  }
};