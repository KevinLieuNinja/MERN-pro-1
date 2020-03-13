import React, { useState } from 'react'
import axios from 'axios';
export default ( ) => {
    // const [title, setTitle] = useState('');
    // const [price, setPrice] = useState('');
    // const [description, setDescription] = useState('');
    const [inputState, setInputState] = useState({
        title:'',
        price:0,
        description:'',
    })

    const onChangeHandler = e =>{
        setInputState({
            ...inputState,
            [e.target.name]:e.target.value
        })
    }

    const onSubmitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', inputState
        )
            .then(res => console.log(inputState))
            .catch(err => console.log(err))
    }
    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label>
                <input type='text' name='title' onChange = {onChangeHandler}></input>
            </p>
            <p>
                <label>Price</label>
                <input type='text' name='price' onChange = {onChangeHandler}></input>
            </p>
            <p>
                <label>Description</label>
                <input type='text' name='description' onChange = {onChangeHandler}></input>
            </p>
            <input type='submit'/>
        </form>
    )
}