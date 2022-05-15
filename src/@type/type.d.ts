
export interface Person {
    name: string
    lastName: string
    age: number
    employed: boolean
    description?: string,
    avatar: string
}

export interface PersonContextType{
    persons: Array<Person>
    deletePerson: (name: string) => void
    addPerson: (person: Person) => void
}