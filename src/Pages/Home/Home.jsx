import React, { use } from 'react';
import SkilloraContext from '../../Context/SkilloraContext';

const Home = () => {
    const {name}=use(SkilloraContext)
    return (
        <div>
                this is home for{name}
        </div>
    );
};

export default Home;