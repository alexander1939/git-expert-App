import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GitExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;// no se agrega con numbre que ya exista
        setCategories([newCategory, ...categories])//agrega la categoria
    }
    return (
        <>
            <h1>GitExpertApp</h1>
            <AddCategory onNewCategory={onAddCategory} />
            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}
