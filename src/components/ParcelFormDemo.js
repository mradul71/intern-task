import { Button, Modal } from 'bootstrap';
import React, { useState } from 'react'
import './parcelForm.css'

function ParcelFormDemo({onsubmit, changeShow, show}) {

    const [info, setinfo] = useState("");
    const [cost, setcost] = useState("");
    const [starting_location, setStarting_location] = useState("");
    const [ending_location, setEnding_location] = useState(""); 
    const [sender_name, setSender_name] = useState("");
    const [sender_address, setSender_address] = useState("");
    const [sender_phone, setSender_phone] = useState("");
    const [reciever_name, setReciever_name] = useState("");
    const [reciever_address, setReciever_address] = useState("");
    const [reciever_phone, setReciever_phone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        onsubmit({
          info: info,
          cost: cost,
          starting_location: starting_location,
          ending_location: ending_location,
          sender_name: sender_name,
          sender_address: sender_address,
          sender_phone: sender_phone,
          reciever_name: reciever_name,
          reciever_address: reciever_address,
          reciever_phone: reciever_phone
        });
        setEnding_location("");
        setReciever_address("");
        setReciever_name("");
        setReciever_phone("");
        setSender_address("");
        setSender_name("");
        setSender_phone("");
        setStarting_location("");
        setcost("");
        setinfo("");
    }

    return (
<>
        <Modal
            show={show}
            onHide={() => changeShow(false)}    
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>Add Parcel</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <form className="todo-form" onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder='Add a name'
            value={info}
            name='text'
            className='todo-input'
            onChange={(e) => setinfo(e.target.value)}
          />
          <input
            type="text"
            placeholder='Add a year'
            value={cost}
            name='text'
            className='todo-input'
            onChange={(e) => setcost(e.target.value)}
          />
            <input
            type="text"
            placeholder='Add a name'
            value={starting_location}
            name='text'
            className='todo-input'
            onChange={(e) => setStarting_location(e.target.value)}
          />
            <input
            type="text"
            placeholder='Add a name'
            value={ending_location}
            name='text'
            className='todo-input'
            onChange={(e) => setEnding_location(e.target.value)}
          />
            <input
            type="text"
            placeholder='Add a name'
            value={sender_name}
            name='text'
            className='todo-input'
            onChange={(e) => setSender_name(e.target.value)}
          />
            <input
            type="text"
            placeholder='Add a name'
            value={sender_phone}
            name='text'
            className='todo-input'
            onChange={(e) => setSender_phone(e.target.value)}
          />
            <input
            type="text"
            placeholder='Add a name'
            value={sender_address}
            name='text'
            className='todo-input'
            onChange={(e) => setSender_address(e.target.value)}
          />
            <input
            type="text"
            placeholder='Add a name'
            value={reciever_name}
            name='text'
            className='todo-input'
            onChange={(e) => setReciever_name(e.target.value)}
          />
            <input
            type="text"
            placeholder='Add a name'
            value={reciever_phone}
            name='text'
            className='todo-input'
            onChange={(e) => setReciever_phone(e.target.value)}
          />
            <input
            type="text"
            placeholder='Add a name'
            value={reciever_address}
            name='text'
            className='todo-input'
            onChange={(e) => setReciever_address(e.target.value)}
          />
          <button className='todo-button'>
            Add todo
          </button>
        </form>
            </Modal.Body>

            <Modal.Footer>
            <Button variant="secondary" onClick={() => changeShow(false)}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>

        
        </>
    )
}

export default ParcelFormDemo