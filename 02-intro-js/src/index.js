


const getImagenAsync = async () => {
    const Api_Key = 'WPTjtac6xUXce6CFVKeFkxmAWZYyiFUO';
    const Api_Response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${Api_Key}`);
    const {data} = await Api_Response.json()


    const {url} = data.images.original 
    const img = document.createElement('img');
    img.src = url
    document.body.append(img)

    console.log(data)
    
}


getImagenAsync()





// const Api_Key = 'WPTjtac6xUXce6CFVKeFkxmAWZYyiFUO';
// const Api_Request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${Api_Key}`);
// Api_Request
//     .then(response => response.json()
//     .then(({data}) => {
//         const {url} = data.images.original 
//         const img = document.createElement('img');
//         img.src = url
//         document.body.append(img)
//     })
//     .catch(console.log)
// )