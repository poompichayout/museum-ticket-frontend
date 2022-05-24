import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SignUp() {
  return (
    <div className='sign-up'>
        <div className='row'>
            <div className='col'></div>
            <div className='col-3'>
                <div className='row text-center justify-content-center hello'>
                    <div className='col-12 font-25 font-w-500 mt-5'>Hello, welcome!</div>
                    <div className='col-6 font-12 mb-4'>Enter your personal detail and start journery with us</div>
                    <div className='col-12'><Button className='px-5'>Sign in</Button></div>
                    <div className='col-12 mt-auto text-right font-rufi font-08'>DONJAI ALL</div>
                </div>
            </div>
            <div className='col-4'>
                <div className='row text-center create-account'>
                    <div className='col-12 font-25 font-w-500 header pt-5'>Create Account</div>
                    <div className='col-12 d-flex justify-content-center mb-4'>
                        <div className='svg-border'><FontAwesomeIcon icon="fa-brands fa-facebook" /></div>
                        <div className='svg-border'><FontAwesomeIcon icon="fa-brands fa-google" /></div>
                        <div className='svg-border'><FontAwesomeIcon icon="fa-brands fa-linkedin" /></div>
                    </div>
                    <div className='col-12 text mb-1'>Or use your email for registration:</div>
                    <div className='col-8 mb-2'><input type="text" name="name" placeholder='&#xf007;  Name' className='form-control'/></div>
                    <div className='col-8 mb-2'><input type="text" name="email" placeholder='&#xf0e0;  Email' className='form-control'/></div>
                    <div className='col-8 mb-5'><input type="text" name="password" placeholder='&#xf023;  Password' className='form-control'/></div>
                    <div className='col-8 pb-5'><Button className='px-5'>Sign up</Button></div>
                </div>
            </div>
            <div className='col'></div>
        </div>
    </div>
  );
}

export default SignUp;
