import React, { useEffect, useState } from "react";
import WalkerCard from "./WalkerCard";

function Walkers({ walkers }) {

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