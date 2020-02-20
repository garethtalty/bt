class ApiService {
  constructor() {
    this.base = 'http://localhost:3000';
  }
  get = path =>
    fetch(`${this.base}${path}`).then(response => {
      return response.json();
    });
}

const apiService = new ApiService();

export { apiService };
