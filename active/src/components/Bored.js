import React, { useEffect } from 'react'
import { connect } from 'react-redux'
//import axios from 'axios'
import { activities } from '../actions'


const Bored = (props) => {
    useEffect(() => {
        props.activities()
    }, [])

    const handleClick = () => {
        props.activities()
    }

    return (
        <div>
            <h1>Want something to do and can't figure out what to do??</h1>
            {/* <p>Drop down</p> */}
            <section>
                <p>Activity: {props.task.activity}</p>
                <p>Type of activity: {props.task.type}</p>
                <p>Participants: {props.task.participants}</p>
                {props.task.link !== '' ?
                    <p>Link:<a href={props.task.link}> {props.task.link}</a></p> : <></>}
            </section>
            <button onClick={handleClick}>New Idea??</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        task: state.task,
        isFetching: state.isFetching,

    }
}

export default connect(mapStateToProps, { activities })(Bored)