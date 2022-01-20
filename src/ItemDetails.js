import { useParams } from "react-router";
import useFetch from "./useFetch";

const ItemDetails = () => {
    const {id} = useParams();
    const {data: item, error, isPending} = useFetch('http://localhost:5000/inventories/' + id);

    if(item){
        console.log(item);
    }
    return (
        <div className="item-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {item && (
                <p>{item.description}</p>   
            )}

        </div>
    );
}

export default ItemDetails;