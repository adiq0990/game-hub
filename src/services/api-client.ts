import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '01291db0600846928d100a6e0274aec6'
  }
})