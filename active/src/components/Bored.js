import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
//import axios from 'axios'
import { activities } from '../actions';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Bored = (props) => {
    const [options, setOptions] = useState([
        'recreational',
        'education',
        'social',
        'relaxation',
        'cooking',
        'busywork',
        'music',
        'diy',
    ], []);

    useEffect(() => {
        props.activities();
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        props.activities();
    };

    const currentOption = useState(options);
    ///Fix onSelect 
    const onSelect = (evt) => {
        console.log("🚀 ~ file: Bored.js ~ line 33 ~ onSelect ~ evt", evt);
        //evt.target
        props.activities(evt);
        setOptions(props.activities(evt));
    };

    return (
        <form>
            <h1>Want something to do and can't figure out what to do??</h1>
            {/* <Dropdown options={options}
                onChange={onSelect} value={currentOption}
                placeholder="Select an option" /> */}
            <select value={options} onChange={onSelect}>
                <option value='social'>
                    social
                </option>
                <option value='relaxation'>
                    relaxation
                </option>
            </select>
            <section>
                <p>Activity: {props.task.activity}</p>
                <p>Type of activity: {props.task.type}</p>
                <p>Participants: {props.task.participants}</p>
                {props.task.link !== '' ?
                    <p>Link:<a href={props.task.link}> {props.task.link}</a></p> : <></>}
            </section>
            <button onClick={handleClick}>New Idea??</button>
        </form>
    );
};
const mapStateToProps = state => {
    return {
        task: state.task,
        isFetching: state.isFetching,

    };
};

export default connect(mapStateToProps, { activities })(Bored);