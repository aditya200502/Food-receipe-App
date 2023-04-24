import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Input() {

    const [input, setinput] = useState("");

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        navigate('/search/' + input);
    }
    return (
        
        <Form onSubmit={handlesubmit}>
            <h1 className='header'>Food-Recipe App</h1>
            <div>
                <FaSearch className='iicon'></FaSearch>
                <input onChange={(e) => setinput(e.target.value)} type='text' value={input} />
            </div>
        </Form>
    )
}

const Form = styled.form`

    .header{
        color:brown;
        margin-bottom: 1rem;
        text-align: center;
    }

    margin-top: 3rem;
    div{
        
        position: relative;
        width: 100%;
    }
    input{
        border:none;
        background-color:#494949;
        font-size: 1.5rem;
        color: white;
        padding: 1rem 1rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width:100%;
    }
    svg{
        position:absolute;
        top:50%;
        left:0%;
        transform: translate(100%,-50%);
        color:white;

    }
    .iicon{
        left:88%;
    }
`;
export default Input
