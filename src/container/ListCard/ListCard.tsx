import { useContext } from 'react';
import {PersonContext} from '../../context/PersonContext';
import Card from '../../component/Card/Card';
import './listCard.scss';

const ListCard: React.FC = () =>{
    const { persons } = useContext(PersonContext);


    return(
        <div className="content-listCard">
            {
                persons.map(person =>
                <Card person={person}  />
                )
            }
           
        </div>
    )
}

export default ListCard
