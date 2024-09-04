import {v4} from 'uuid';

const tokenGenerator = () => {
    return v4();
};

export default tokenGenerator;