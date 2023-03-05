const config = {
    development: {
      backendUrl: 'http://localhost:8000'
    },
    production: {
      backendUrl: 'https://mern-agri-market-app-api.onrender.com'
    }
  };
  
  export default config[process.env.NODE_ENV || 'development'];
  