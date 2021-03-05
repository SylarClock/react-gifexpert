

export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=2qcaddK0enSMIUuvf6G82kFYu6V67Nyx`;
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url//el simbolo de interrogacion es para traer si tiene y si no tiene nada no hace nada
        }
    })

    return gifs;

}