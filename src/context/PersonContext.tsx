import { createContext, ReactNode, useState} from "react";
import {Person, PersonContextType} from '../@type/type';

export const PersonContext = createContext<PersonContextType>({} as PersonContextType);

const INITIAL_STATE: Array<Person> = [
    {
      name: 'Harry',
      lastName: 'Barzola',
      age: 35,
      employed: true,
      avatar: 'https://i.pravatar.cc/150?u=sergio_serrano'
    },
    {
      name: 'Lore',
      lastName: 'Barzola',
      age: 35,
      employed: true,
      avatar: 'https://i.pravatar.cc/150?u=sergio_serrano'
    },
    {
      name: 'Ana',
      lastName: 'Barzola',
      age: 35,
      employed: true,
      avatar: 'https://i.pravatar.cc/150?u=sergio_serrano'
    },
  
  ]

export const PersonProvider = ({children}:{children:ReactNode}) => {

    const [persons, setPersons] = useState <Array<Person>>(INITIAL_STATE)

    const deletePerson = (name: string) => {
        const filteredPerson = persons.filter(person => person.name !== name);
        setPersons(filteredPerson);
    }
    
    const addPerson = (person: Person): void => {
        setPersons([...persons, person]);
    }

    return(
        <PersonContext.Provider value={{persons, deletePerson, addPerson}}>
            {children}
        </PersonContext.Provider>
    )
}

 