import React, { useState, useEffect } from "react";
import AppointmentCard from "./AppointmentCard";

function Appointments() {

    const [appointments, setAppointments] = useState([])

    const [walkerId, setWalkerId] = useState(0)
    const [dogId, setDogId] = useState(0)
    const [date, setDate] = useState("")

    useEffect(() => {
        fetch('http://localhost:9292/appointments')
        .then((res) => res.json())
        .then((data) => setAppointments(data))
    }, [])

    const renderAppointments = appointments.map((appointment) => {
        return <AppointmentCard {...appointment} key={appointment.id}/>
    })

    function addNewAppointment(newAppointment) {
        setAppointments([...appointments, newAppointment])
      }

    function handleSubmit(e) {
        e.preventDefault();
        const newAppointment = {
            walkerId: walkerId,
            dogId: dogId,
            date: date
        }
        fetch('http://localhost:4000/appointments', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(newAppointment)
        })
        .then((res) => res.json())
        .then(() => addNewAppointment(newAppointment))

        setWalkerId(0)
        setDogId(0)
        setDate("")
    }


    return(

        <div>
        {renderAppointments}

        <div className="form">
           <h2>Make An Appointment</h2>
           <form onSubmit={handleSubmit}>
            <label>Choose a Walker</label>
            <select>
               <option value="Steve">Steve</option>
               <option value="Rachel">Rachel</option>
               <option value="Caroline">Caroline</option>
            </select>
            <label>Choose a Dog</label>
            <select>
               <option value="Rex">Rex</option>
               <option value="Pugsly">Pugsly</option>
               <option value="Lassie">Lassie</option>
               <option value="Fido">Fido</option>
               <option value="Skip">Skip</option>
               <option value="Lady">Lady</option>
               <option value="Gidget">Gidget</option>
               <option value="Chase">Chase</option>
            </select>
            <input value={date} onChange={(e) => setDate(e.target.value)} type="text" name="date" placeholder="Date" />
               <button id="submit_button" type="submit">Create Appointment</button>
            </form> 
        </div>
        </div>
       )
}

export default Appointments;