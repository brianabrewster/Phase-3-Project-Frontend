import React from "react";

function AppointmentCard({date, dog_id, dog, walker}) {
    return (
        <div>
            <p>Walker: {walker?.name}</p>
            <p>Dog: {dog?.name}</p>
            <p>Date: {date}</p>
        </div>
    )
}

export default AppointmentCard;