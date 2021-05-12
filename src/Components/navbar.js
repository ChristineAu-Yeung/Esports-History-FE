import React, { useState } from "react";
import axios from 'axios';
import Card from './card'

const apiKey = process.env.API_KEY

function Navbar() {
    const [username, setUserName] = useState("");
    const [data, setData] = useState([]);
    const handleSearch = async (value) => {
        if(!value || value === "") return alert("Please enter a valid username"); 
        // console.log(value)
        let url = `http://localhost:5000?summonerName=${value}`
        const res = await axios.get(url)
        // console.log(res)
        if(res.status !== 200 || !Array.isArray(res.data)) return alert("Please enter a valid username"); 
        setData(res.data)
    }

    return (
        <div className={'navbar'}>
            <div className={'title'}>
                Esports History <center className={'nameLeague'}>League of Legends</center>
            </div>
            <div className={'userName'}>
                <textarea className={'userTextArea'} placeholder="Enter username" value={username} onChange={e => setUserName(e.target.value)}>
                </textarea>
                <button className={'searchButton'} value = 'Search' onClick={(e) => handleSearch(username)}>
                   Search
                </button>
            </div>
            <div> 
                {data.map(entry =>
                    // console.log(entry) {`${entry.winLose}`}
                    <Card data={entry}/>
                )}
            </div>
        </div>
    );
}

export default Navbar;