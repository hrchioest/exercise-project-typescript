
import React from 'react';
import Form from '../../component/Form/Form';
import ListCard from '../../container/ListCard/ListCard';
import './home.scss';

const Home = () => {
    return (
        <div className="container-list-form">
            <ListCard />
            <Form />
        </div>
    );
};

export default Home;