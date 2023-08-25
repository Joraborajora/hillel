import './style.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

const FormLogin = () => {
    return (
        <form className='Login-Form'>
            <Input type='text' name='userName' placeholder='User Name' className="input-login" />
            <div className='password-block'>
                <Input type='password' name='password' placeholder='Password' className='input-login' />
            </div>
            <Button type='button' text='Login' />
        </form>
    )
}

export default FormLogin;