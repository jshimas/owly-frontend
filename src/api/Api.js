import axios from 'axios'
import VueCookies from 'vue-cookies'

class Api {
  constructor(baseURL) {
    this.devolopmentURL = 'http://127.0.0.1:8080/api/v1'
    this.deployedURL = 'https://cooperative-attire-goat.cyclic.app/api/v1'
    this.client = axios.create({
      baseURL: this.devolopmentURL + baseURL,
      withCredentials: true,
      headers: { authorization: `Bearer ${VueCookies.get('jwt')}` }
    })

    this.clientMultiPart = axios.create({
      baseURL: this.devolopmentURL + baseURL,
      withCredentials: true,
      headers: {
        authorization: `Bearer ${VueCookies.get('jwt')}`,
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  async get(url) {
    return await this.client.get(url)
  }

  async post(url, data = {}) {
    return await this.client.post(url, data)
  }

  async delete(url) {
    return await this.client.delete(url)
  }

  async update(url, data = {}) {
    return await this.client.put(url, data)
  }

  async patch(url, data = {}) {
    return await this.client.patch(url, data)
  }

  async patchWithImages(url, formData = {}) {
    return await this.clientMultiPart.patch(url, formData)
  }
}

export default Api
