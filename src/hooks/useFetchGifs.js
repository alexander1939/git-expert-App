import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


//mi primera hook
export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages)//
        setIsLoading(false)
    }

    useEffect(() => {
        getImages();
        //getGifs(category).then(newImages => setImages(newImages))
    }, [])// para que solo el estado y se repita o aga peticiones cuando note algun cambio

    return {
        images,
        isLoading
    }
}
