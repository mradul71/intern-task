import React from 'react'

function Parcel({todos}) {

    return todos.map((todo) => (
            <div key={todo.id}>
                info:{todo.info}<br />
                cost:{todo.cost}<br />
                starting_location:{todo.starting_location}<br />
                ending_location:{todo.ending_location}<br />
                sender_name:{todo.sender_name}<br />
                sender_address:{todo.sender_address}<br />
                sender_phone:{todo.sender_phone}<br />
                reciever_name:{todo.reciever_name}<br />
                reciever_address:{todo.reciever_address}<br />
                reciever_phone: {todo.reciever_phone}<br />
            </div>
    ));
}

export default Parcel