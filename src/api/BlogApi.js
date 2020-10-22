import axios from 'axios';

export function getAllBlogs() {
    try {
      return axios.get('https://5f55a98f39221c00167fb11a.mockapi.io/blogs');
    } catch (error) {
      console.error(error);
    }
  }