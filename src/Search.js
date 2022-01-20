import React from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const Search = () => {
    const [data, setData] = useState(null);

    function search(query) {
        fetch('http://localhost:8000/items?name='+query, {
            method: 'GET',
            headers: {"Content-Type": "application/json"},
        }).then(res => {
            if(!res.ok) {
                throw Error ('could not fetch the data for that resource')
            }
            return res.json();
        })
        .then(data => {
            console.log('data is...');
            console.log(data);
            console.log(data.length);
            setData(data);
        })
        .catch(err => {
            console.log('There is an error');
            console.log(err);
        });
}

return (
    <div className = "search">
        <h1>Search Filter</h1>
        <input style={{width:"25%", height: "25px", color: "black"}}
        type="text"
        placeholder= "Search..."
        onKeyDown={(e) => search (e.target.value)}/>

        {data && <ItemList items={data} title="Available Items"/>}
    </div>
)
}

export default Search;