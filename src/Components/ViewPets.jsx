import React from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { useState, useEffect } from 'react'

const ViewPets = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.post('http://localhost:3000/view-pets').then(
            (response) => {
                changeData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
                alert("Error fetching data")
            }
        )
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <div>
            <NavBar />
            <h2 className="text-center p-5">View Pets</h2>
            <div className="container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Booking ID</th>
                            <th scope="col">Pet Name</th>
                            <th scope="col">Pet Type</th>
                            <th scope="col">Breed</th>
                            <th scope="col">Age</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Vaccination Status</th>
                            <th scope="col">Owner Name</th>
                            <th scope="col">Owner Phone</th>
                            <th scope="col">Owner Email</th>
                            <th scope="col">Check-in Date</th>
                            <th scope="col">Check-out Date</th>
                            <th scope="col">Kennel Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(
                            (value, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{value.bookingId}</th>
                                        <td>{value.petName}</td>
                                        <td>{value.petType}</td>
                                        <td>{value.breed}</td>
                                        <td>{value.age}</td>
                                        <td>{value.weight}</td>
                                        <td>{value.vaccinationStatus}</td>
                                        <td>{value.ownerName}</td>
                                        <td>{value.ownerPhone}</td>
                                        <td>{value.ownerEmail}</td>
                                        <td>{value.checkInDate}</td>
                                        <td>{value.checkOutDate}</td>
                                        <td>{value.kennelNumber}</td>
                                    </tr>
                                )
                            }
                        )}                                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewPets