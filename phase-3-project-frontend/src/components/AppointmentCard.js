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
      <p className="appt-element">Walker: {walker?.name}</p>
      <p className="appt-element">Dog: {dog?.name}</p>
      <p className="appt-element">Date: {date}</p>
      <button className="appt-delete" onClick={handleDeleteClick}>
        Cancel
      </button>
    </div>
  );
}

export default AppointmentCard;
