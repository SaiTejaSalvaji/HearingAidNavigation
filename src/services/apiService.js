import axios from 'axios';

const BASE = process.env.REACT_APP_API_URL || '';

export async function fetchMetroUpdates() {
  const { data } = await axios.get(`${BASE}/api/metro-updates.json`);
  return data;
}
