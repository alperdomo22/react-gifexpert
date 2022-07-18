import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if (newInputValue <= 1) return;
        
        // setCategory(categories => [inputValue, ...categories]);
        onNewCategory(newInputValue)
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
