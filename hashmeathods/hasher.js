import bcrpyt from 'bcrypt';

const hasher = (str) => {
    const salt = bcrpyt.genSaltSync(10);
    return(bcrpyt.hashSync(str, salt));
};

export default hasher;