import { useContext } from "react";
import { Person } from "../@type/type"
import {PersonContext} from '../context/PersonContext';


const Card = ({person}: {person:Person}): JSX.Element =>{

    const {deletePerson} = useContext(PersonContext);
    const handleDelete = () => {
        deletePerson(person.name)
    }
    
    return(
        <>
            <div>Nombre: {person.name}</div>
            <div>Apellido: {person.lastName}</div>
            <div>Apellido: {person.age}</div>
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}

export default Card;