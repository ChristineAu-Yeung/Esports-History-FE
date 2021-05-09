import React, { useState } from "react";
import axios from 'axios';
import Card from './card'

const apiKey = process.env.API_KEY

function Navbar() {
    const [username, setUserName] = useState("");
    const [data, setData] = useState([]);
    const handleSearch = async (value) => {
        console.log(value)
        let url = `http://localhost:5000?summonerName=${value}`
        const res = await axios.get(url)
        console.log(res)
        setData(res.data)
    }

    return (
        <div className={'navbar'}>
            <div className={'title'}>
                Esports History
            </div>
            <div>
                <textarea placeholder="Enter username" value={username} onChange={e => setUserName(e.target.value)}>
                </textarea>
                <button onClick={(e) => handleSearch(username)}>
                    Search
                </button>
            </div>
            <div> 
                {console.log(data)}
                {data.map(entry =>
                    // console.log(entry) {`${entry.winLose}`}
                    <Card data={entry}/>
                )}
            </div>
        </div>
    );
}

export default Navbar;