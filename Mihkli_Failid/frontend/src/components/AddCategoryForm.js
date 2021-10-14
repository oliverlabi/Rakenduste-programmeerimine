import './AddCategoryForm.css';
import { useRef } from 'react';

function AddCategoryForm(props){
    const nameInputRef = useRef();
    const typeInputRef = useRef();

    function formSubmitHandler(e) {
        e.preventDefault();
        const nameValue = nameInputRef.current.value;
        const typeValue = typeInputRef.current.value;
        console.log(typeInputRef.current.value);

        const category = {
            name: nameValue,
            category: typeValue,
        }

        props.onAddCategory(category);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <label>Kategooria nimi</label><br />
            <input type="text" placeholder="Nimi" required ref={nameInputRef} /><br />
            <label>Kategooria tüüp</label><br />
            <select type="text" placeholder="Kategooria" required ref={typeInputRef}>
                <option value="PREMIUM">Premium</option>
                <option value="DELUXE">Deluxe</option>
                <option value="BASIC">Basic</option>
            </select>
            <button>Sisesta uus ese</button>
        </form>
    );
}

export default AddCategoryForm;