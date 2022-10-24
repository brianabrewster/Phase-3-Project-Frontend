import React, { useEffect, useState } from "react";
import WalkerCard from "./WalkerCard";

function Walkers() {
    const [walkers, setWalkers] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/walkers')
        .then((res) => res.json())
        .then((data) => setWalkers(data))
    }, [])

    const renderWalkers = walkers.map((walker) => {
        return <WalkerCard {...walker} key={walker.id}/>
    })

    return(
        <div>
            {renderWalkers}
        </div>
    )
}

export default Walkers;