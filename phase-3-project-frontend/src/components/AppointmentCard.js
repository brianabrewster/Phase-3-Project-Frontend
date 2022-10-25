import React from "react";

function AppointmentCard({ date, dog, walker }) {
  return (
    <div className="appt-card">
      <p>Walker: {walker?.name}</p>
      <p>Dog: {dog?.name}</p>
      <p>Date: {date}</p>
    </div>
  );
}

export default AppointmentCard;
