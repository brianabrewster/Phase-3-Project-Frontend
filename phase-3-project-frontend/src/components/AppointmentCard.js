import React from "react";

function AppointmentCard({ date, dog_id, walker_id }) {
  return (
    <div>
      <p>Walker: {walker_id}</p>
      <p>Dog: {dog_id}</p>
      <p>Date: {date}</p>
    </div>
  );
}

export default AppointmentCard;
