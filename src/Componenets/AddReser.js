import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {XMarkIcon} from "@heroicons/react/20/solid";
const clients = [
    { id: 1, name: 'Client 1' },
    { id: 2, name: 'Client 2' },
    { id: 3, name: 'Client 3' },
    { id: 4, name: 'Client 4' },
];


function AddReservation() {
    const [client, setClient] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());

    function handleClientChange(event) {
        setClient(clients.find(client => client.id === parseInt(event.target.value)));
    }

    function handleDateChange(date) {
        setSelectedDate(date);
    }
    return (
        <div className="fixed top-0 right-0 w-1/3 h-full bg-gray-200 p-8 overflow-y-scroll">
            <div className="flex my-4 items-center justify-between">
                <h2 className="text-gray-800  font-medium text-sm">
                            AJOUTER UNE RESERVATION
                </h2>

                        <XMarkIcon className="h-6 w-6 cursor-pointer text-black "/>
                    </div>
                    <hr className="border-t-2 border-gray-500 my-4" />

                    <form className="space-y-4">
                        <div className="mb-3">
                            <label htmlFor="client" className="form-label">Client</label>
                            <select id="client" className="form-select" onChange={handleClientChange}>
                                <option value="">Choisir un client</option>
                                {clients.map(client => (
                                    <option key={client.id} value={client.id}>{client.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date</label>
                            <div>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    dateFormat="dd/MM/yyyy"
                                />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Ajouter Gestionnaire</button>
                        </div>                    </form>
                </div>
    );
}

export default AddReservation;
