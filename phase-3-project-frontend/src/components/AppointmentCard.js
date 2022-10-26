import React from "react";

function AppointmentCard({ date, dog, walker, id, onDeleteAppointment }) {
  function handleDeleteClick() {
    fetch(`http://localhost:9292/appointments/${id}`, {
      method: "DELETE",
    });
    onDeleteAppointment(id);
  }
  return (
    <div className="appt-card">
      <p>Walker: {walker?.name}</p>
      <p>Dog: {dog?.name}</p>
      <p>Date: {date}</p>
      <button onClick={handleDeleteClick}>X</button>
    </div>
  );
}

export default AppointmentCard;
