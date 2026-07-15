import React from 'react'
import NavBar from './NavBar'
import { useState } from 'react'
import axios from 'axios'

const AddPet = () => {

    const [input, changeInput] = useState(
        {
            bookingId: "",
            petName: "",
            petType: "",
            breed: "",
            age: "",
            weight: "",
            vaccinationStatus: "",
            ownerName: "",
            ownerPhone: "",
            ownerEmail: "",
            checkInDate: "",
            checkOutDate: "",
            kennelNumber: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        axios.post('http://localhost:3000/add-pet', input).then(
            (response) => {
                console.log(response.data)
                alert("Pet added successfully")
            }
        ).catch(
            (error) => {
                console.log(error)
                alert("Error adding pet")
            }
        )
    }

    return (
        <div>
            <NavBar />
            <h2 className="text-center p-5">Add Pet</h2>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Booking ID</label>
                                <input type="text" className="form-control" name="bookingId" value={input.bookingId} onChange={inputHandler} placeholder="Enter Booking ID" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Pet Name</label>
                                <input type="text" className="form-control" name="petName" value={input.petName} onChange={inputHandler} placeholder="Enter Pet Name" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Pet Type</label>
                                <input type="text" className="form-control" name="petType" value={input.petType} onChange={inputHandler} placeholder="Enter Pet Type" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Breed</label>
                                <input type="text" className="form-control" name="breed" value={input.breed} onChange={inputHandler} placeholder="Enter Breed" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Age</label>
                                <input type="text" className="form-control" name="age" value={input.age} onChange={inputHandler} placeholder="Enter Age" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Weight</label>
                                <input type="text" className="form-control" name="weight" value={input.weight} onChange={inputHandler} placeholder="Enter Weight" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Vaccination Status</label>
                                <input type="text" className="form-control" name="vaccinationStatus" value={input.vaccinationStatus} onChange={inputHandler} placeholder="Enter Vaccination Status" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Owner Name</label>
                                <input type="text" className="form-control" name="ownerName" value={input.ownerName} onChange={inputHandler} placeholder="Enter Owner Name" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Owner Phone</label>
                                <input type="text" className="form-control" name="ownerPhone" value={input.ownerPhone} onChange={inputHandler} placeholder="Enter Owner Phone" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Owner Email</label>
                                <input type="email" className="form-control" name="ownerEmail" value={input.ownerEmail} onChange={inputHandler} placeholder="Enter Owner Email" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Check-in Date</label>
                                <input type="date" className="form-control" name="checkInDate" value={input.checkInDate} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Check-out Date</label>
                                <input type="date" className="form-control" name="checkOutDate" value={input.checkOutDate} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Kennel Number</label>
                                <input type="number" className="form-control" name="kennelNumber" value={input.kennelNumber} onChange={inputHandler} placeholder="Enter Kennel Number" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-dark" onClick={readValue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddPet