import CategoryList from "../components/CategoryList";
import { useState, useEffect } from 'react';

function ShowCategories(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedCategories, setLoadedCategories] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/category").then(res => { //võtab kauem aega, skript liigub edasi ehk asünkroonseks. vaja laadimist
                return res.json();
            }).then(data => {
                console.log(data);
                setIsLoading(false);
                setLoadedCategories(data);
            });
    },[])

    if (isLoading) {
        return (<div>Laeb...</div>);
    }

    return (
        <div>
            <h1>Kategooriate vaade</h1>
            <CategoryList categories={loadedCategories} />
        </div>
    )
}

export default ShowCategories;