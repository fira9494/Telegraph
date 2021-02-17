import React, {useState} from 'react';
import {addLogAC, deleteLogAC, updateLogAC} from "../../store/actionCreators";
import {useDispatch} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import {Button, Form, Card, ListGroup} from "react-bootstrap";


function Cards({log}) {
    const users = [
        {
            id: 1,
            firstName: 'Vova',
            lastName: 'Pupkin'
        },
        {
            id: 2,
            firstName: 'Vlad',
            lastName: 'Pupkin'
        },
        {
            id: 3,
            firstName: 'Lera',
            lastName: 'Pupkin'
        },
        {
            id: 4,
            firstName: 'Fira',
            lastName: 'Pupkin'
        },
        {
            id: 5,
            firstName: 'Vanya',
            lastName: 'Pupkin'
        },
    ]
    const log_events = [
        {
            id: 1,
            name: 'site'
        },
        {
            id: 2,
            name: 'app'
        },
        {
            id: 3,
            name: 'other'
        },
    ]
    const [state, setState] = useState(false)
    const dispatch = useDispatch()
    const updateHandler = (e) =>{
        e.preventDefault()
        const userId = e.target.user_id
        const userName = e.target.user.value
        const eventId = e.target.event.value
        const time = e.target.time.value
        const newLog = {
            user_id: e.target.id,
            user_name: userName,
            event_id: eventId,
            event_time: time,
        }

        dispatch(updateLogAC(newLog))
        setState(false)
    }
    const deleteHandler = () => {
        dispatch(deleteLogAC(log))
    }

    return (
        <Card >
            <ListGroup >
                <ListGroup.Item> <h2 style={{textAlign: "center"}} id={log.user_id}>{log.user_name}</h2>  <h2> {log.event_name}</h2>   <h2> {log.event_time}</h2></ListGroup.Item>
            <ListGroup.Item> <Button variant={"outline-secondary"} block onClick={deleteHandler} key={uuidv4()}>Delete</Button></ListGroup.Item>
            <ListGroup.Item><Button variant={"outline-secondary"} block onClick={() => setState(!state)} key={uuidv4()}>Edit</Button></ListGroup.Item>
            </ListGroup>
            {state ? <Form id={log.user_id} onSubmit={updateHandler}>
                <Form.Control  as="select" name="user">
                    {users.map((el) => <option key={uuidv4()} value={el.firstName}>{el.firstName}</option>)}
                </Form.Control>
                <Form.Control as='select' name="event">
                    {log_events.map((el) => <option key={uuidv4()} value={el.id}>{el.name}</option>)}
                </Form.Control>
                <Form.Control type="date" name='time' placeholder='enter time of event'/>
                <Button variant={"outline-secondary"} block type="submit" >Confirm changes</Button>'
            </Form> : null}


        </Card>
    );
}

export default Cards;