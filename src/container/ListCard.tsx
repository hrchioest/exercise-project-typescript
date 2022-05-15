import { useContext } from 'react';
import {PersonContext} from '../context/PersonContext';
import Card from '../component/Card';
import Form from '../component/Form';

const ListCardForm: React.FC = () =>{
    const { persons } = useContext(PersonContext);


    return(
        <div>
            {
                persons.map(person =>
                <Card person={person}  />
                )
            }
            <Form />
        </div>
    )
}

export default ListCardForm
