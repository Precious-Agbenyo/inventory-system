import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState(' ');
    const [name_of_asset, setName_of_Asset] = useState('');
    const [serial_number, setSerial_Number] = useState('');
    const [quantity, setQuantity] = useState('');
    const [item_location, setItem_Location] = useState('');
    const [department, setDepartment] = useState('');
    const [received_date, setReceived_date] = useState('');
    const [isPending, setIsPending] = useState( false);
    const history = useHistory();
    const location = useLocation();
    var item;
    console.log('ddddd',location);

    if(location.state){//if location.state !== undefined
      item = location.state.item;
    }
    
        useEffect(() => {
            if (item) {
        setName(item.name)
        setName_of_Asset(item.name_of_asset)
        setSerial_Number(item.serial_number)
        setQuantity(item.quantity)
        setItem_Location(item.item_location)
        setDepartment(item.department)
        setReceived_date(item.received_date)
        
        } 

        }, [item]) 

        const handleSubmit = (e) => {
        e.preventDefault();
        const body = {name, name_of_asset, serial_number, quantity, item_location, department, received_date};
 
        setIsPending(true);
        
        fetch("http://localhost:5000/inventories", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            }).then(() => {
                console.log('new item added');
                setIsPending (false);
                history.push('/');
            })
        }


    return (
        <div className="create">
            <h2>Add new Item</h2>
            <form onSubmit={handleSubmit}>
                <label>Item Name:</label>
                <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                />

                <label>Choose an asset:</label>
                <select 
                onChange={(e) => {
                    const selectedAsset = e.target.value;
                    setName_of_Asset(selectedAsset);
                }}
                >
                <option value="furniture">Furniture</option>
                <option value="electronics">Electrical Gadget</option>
                </select>

                <label>Serial Number:</label>
                <textarea
                required
                value={serial_number}
                onChange={(e) => setSerial_Number(e.target.value)}
                ></textarea>

                <label for="tentacles">Item qty:</label>
                  <input type="number" id="tentacles"
                required
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                />

                 <label>Item Location:</label>
                <textarea
                required
                value={item_location}
                onChange={(e) => setItem_Location(e.target.value)}
                ></textarea>

                <label>Department:</label>
                <textarea 
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                ></textarea>

                <label for="start">Recieved Date:</label>
                <input type="date" id="start"
                required
                value={received_date}
                onChange={(e) => setReceived_date(e.target.value)}
                ></input>

                {!isPending && <button>Add Item</button>}
                {isPending && <button disabled>Adding Item...</button>}
            </form>
        </div>
    );
}

export default Create;
