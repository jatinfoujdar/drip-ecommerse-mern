const fetchProducts = () => {
    return new Promise((resolve, reject) => {
      const url = 'https://dummyjson.com/products';
  
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  };


