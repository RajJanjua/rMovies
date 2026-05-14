const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'cb15fc356cc44bd575f52e8dfe59854f',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
