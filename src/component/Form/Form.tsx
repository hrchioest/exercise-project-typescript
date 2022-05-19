import React,{useState, useContext} from 'react';
import { Person } from "../../@type/type";
import {PersonContext} from '../../context/PersonContext';
import './form.scss';

const INITIAL_STATE: Person = {
    name:'',
    lastName: '',
    age: 0,
    description: '',
    employed: false,
    avatar: ''
}

const Form = (): JSX.Element => {

    const [inputValue, setInputValue] = useState <Person>(INITIAL_STATE);
    const { addPerson } = useContext(PersonContext);


    const handleSubmit = () => {}
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue({
            ...inputValue,
            [evt.target.name]: evt.target.value
        })
    }

    const handleAddPerson = () =>{
        addPerson(inputValue);
        setInputValue(INITIAL_STATE);
    }
   
    return(
        <div className="content-form">
            <form onSubmit={handleSubmit}>
                <input 
                    value={inputValue.name} 
                    onChange={handleChange}
                    name='name' 
                    type='text' 
                    placeholder='Name'
                />
                <input 
                    value={inputValue.lastName} 
                    onChange={handleChange}
                    name='lastName' 
                    type='text' 
                    placeholder='LastName'
                />
                <input 
                    value={inputValue.age} 
                    onChange={handleChange}
                    name='age' 
                    type='number' 
                    placeholder='Age'
                />

            </form>
            <button onClick={handleAddPerson}>Add Person</button>
        </div>
    )
};

export default Form;