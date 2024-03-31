import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchCocktails } from '../store/cocktailSlice';

function Button({ type, value, inputRef }) {
    const dispatch = useDispatch();

    function handleClick() {
        switch (type) {
            case "random":
                dispatch(fetchCocktails({ type: "random" }));
                break;
            case "search":
                if (value) {
                    dispatch(fetchCocktails({ type: "search", value }));
                } else {
                    inputRef.current.style.animation = 'empty 0.5s ease-in-out';
                    setTimeout(() => {
                        inputRef.current.style.animation = '';
                    }, 500);
                }
                break;

            default:
                break;
        }
    }

    return (
        <button
            onClick={handleClick}
        >
            {type === 'search' ? 'Search' : 'Random'}
        </button>
    )
}

export default Button