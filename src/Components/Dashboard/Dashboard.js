import React, {useEffect} from 'react';
import {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addLogAC} from "../../store/actionCreators";
import Cards  from '../Card/Card'
import { v4 as uuidv4 } from 'uuid';
import {Button, Card, Form, ListGroup} from "react-bootstrap";
import './Dashboard.css'

function Dashboard(props) {
    const [but, setBut] = useState(false)

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
    const dispatch = useDispatch()

    const submitHandler = (e) =>{
        e.preventDefault()
        const userName = e.target.user.value
        const eventName = e.target.event.value
        const time = e.target.time.value
        const log = {
            user_name: userName,
            user_id: uuidv4(),
            event_name: eventName,
            event_time: time,
        }

        dispatch(addLogAC(log))
    }
//получить все логи из стейта(редакс)(useeeffect)

    const data = useSelector(state => state.logs)

    return (
        <div className='main'>
        <Card variant='dark'>
            <Button variant={"outline-secondary"} block onClick={()=>setBut(!but)}>{!but?'Add':'Hide'}</Button>
            {but ? <Form onSubmit={submitHandler}>
                <Form.Control as="select" name="user">
                    {users.map((el) => <option value={el.firstName}>{el.firstName}</option>)}
                </Form.Control>
                <Form.Control as="select" name="event">
                    {log_events.map((el) => <option value={el.name}>{el.name}</option>)}
                </Form.Control>
                <Form.Control type="date" name='time' placeholder='enter time of event'/>
                <Button variant={"outline-secondary"} block  type="submit" >Add new user</Button>
            </Form> : null}
            {data && data.map((e) => <Cards log={e}/>)}
        </Card>
        </div>
    );
}

export default Dashboard;
