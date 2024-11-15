export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=dw1xgaIQTV7MuribhkptRkuffodnPFEv&q=${category}&limit=20`;
    const resp = await fetch(url);

    const { data } = await resp.json()

    const gitfs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gitfs
}