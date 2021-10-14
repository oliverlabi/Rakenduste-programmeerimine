import Category from "./Category";

function CategoryList(props) {
    return (
        <div>
            {props.categories.map(category=> (
                <Category 
                key={category.id} 
                name={category.name} 
                category={category.type} />
            ))}
        </div>
    );
}

export default CategoryList