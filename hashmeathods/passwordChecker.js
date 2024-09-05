import bcrpyt from 'bcrypt';

const passwordChecker = async (password, hash) => {
    const status = await bcrpyt.compare(password, hash);
    return status;
}

export default passwordChecker;