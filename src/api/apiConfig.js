const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '61bf12fe7bae6b1472c886246bf147dc',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;