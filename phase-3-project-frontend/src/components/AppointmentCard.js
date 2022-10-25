import React from "react";

function AppointmentCard({date, dog_id, walker_id, walker}) {
    return (
        <div>
            <p>Walker: {walker?.name}</p>
            <p>Dog: {dog_id}</p>
            <p>Date: {date}</p>
        </div>
    )
}

export default AppointmentCard;