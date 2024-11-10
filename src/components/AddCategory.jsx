import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setinputValue] = useState('')


    //para poder escribir en el input
    const onInputChange = ({ target }) => {
        setinputValue(target.value)
    }

    //para cuando le de enter mantega los cambios que escribiS
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;//esto es para que no se agrege vacio
        //setCategories(categories => [inputValue, ...categories]);//para agregar y mantener las categorias anterior
        setinputValue('');
        onNewCategory(inputValue.trim())//lo manda para agregar
    }

    return (
        <form action="" onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gits"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
