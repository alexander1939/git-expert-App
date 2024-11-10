import { Gifltem } from "./Gifltem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>

            {
                isLoading ? <h2>cargando...</h2> : null
            }

            <div className="card-grid">
                {images.map((images) => (
                    <Gifltem key={images.id}
                        {...images}

                    />
                ))}
            </div>
        </>

    )
}
