import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const ItemList = ({itemList}) => {
    const[items, setItems] = useState(itemList);

   const history = useHistory();
   
     const handleDelete = (inventory_id) => {
         console.log('inventory_id is',inventory_id);
    fetch('http://localhost:5000/inventories/'+ inventory_id, {
        method: 'DELETE',   
    })
    .then(res => {
        if(!res.ok) {
            throw Error('Could not delete');
        }
        return res.json();
    }).then(data=>{
        console.log(data);
    
        setItems(items.filter(item => item.inventory_id !== inventory_id));
        console.log('my items', items)
    }).catch(err =>{
        console.log(err.message);
    });
    }

    const handleEdit = (item) => {
        history.push('/create',{item});  

        // fetch(`http://localhost:5000/inventories/${item.inventory_id}`,{
        //     method: "PUT",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(item)
        // }).then(() => {
        //     console.log('item edited');
                
        //   })

        }

    return (
        <div className="item-list" >
            {/* <h2> {name} </h2> */}
            <table >
                
                <tr className="item-lists">
                    <th><p>ID</p></th>
                    <th><p>Item name:</p> </th>
                    <th><p>Name of Asset</p> </th>
                    <th><p>Serial Number: </p></th>
                    <th><p>Quantity:  </p></th>
                    <th><p>Item Location: </p></th>
                    <th><p>Department </p></th>
                    <th><p>Recieved date:  </p></th>
                    <th><p>Edit</p></th>
                    <th><p>Delete</p></th>
                </tr>
               
                {items.map((item) => (
                <tr className="item-preview" key={item.inventory_id} >
                    <td><p>{item.inventory_id}</p></td>
                    <td> <h2>{item.name}</h2></td>
                    <td> <p>{item.name_of_asset}</p></td>
                    <td><p>{item.serial_number}</p></td>
                    <td> <p>{item.quantity}</p></td>
                    <td><p> {item.item_location} </p></td>
                    <td> <p> {item.department} </p></td>
                    <td><p>{item.received_date} </p></td>
                    <td><button onClick={() => handleEdit(item)}><MdEdit /></button></td>
                    <td><button onClick={() => handleDelete(item.inventory_id)}><MdDelete /></button></td>
                </tr>
                ))}
            </table>

        </div>
    );
}

export default ItemList;

