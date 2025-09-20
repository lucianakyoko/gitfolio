import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com',
});

export const internalApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || "",
});