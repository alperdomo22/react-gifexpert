import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async (category) => {
        const getGifsQuery = await getGifs(category);
        setImages(getGifsQuery);
        setIsLoading(false);
    };

    useEffect( () => {
        getImages(category);
    }, []);

    return {
        images,
        isLoading
    }
}
