import { useContext } from "react";
import { Person } from "../../@type/type"
import {PersonContext} from '../../context/PersonContext';
import './card.scss';


const Card = ({person}: {person:Person}): JSX.Element =>{

    const {deletePerson} = useContext(PersonContext);
    const handleDelete = () => {
        deletePerson(person.name)
    }
    
    return(
        <div className="card-style">
            <div className="content-img">
                <img src={person.avatar} alt={person.name} />
            </div>
            <div className="content-description-action">
                <div className="content-description">
                    <div>{person.name} {person.lastName}</div>
                    <div>{person.age} años</div>
                </div>
                <button onClick={handleDelete}>Delete</button>
            </div> 
        </div>
    )
}

export default Card;