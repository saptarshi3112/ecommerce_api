import {
  useState,
  useEffect
} from 'react';

import {
  useDispatch
} from 'react-redux';

import {
  authAction
} from '../actions';

import { Register } from './partials/Register';

const Auth = () => {

  const dispatch = useDispatch();

  let [loginInput, setLoginInput] = useState({
    email: '',
    password: ''
  });

  let {
    email, password
  } = loginInput;

  const handleChange = e => {
    const {
      name, value
    } = e.target;

    setLoginInput({ ...loginInput, [name]: value });

  };

  const onSubmitLogin = e => {
    e.preventDefault();

    if (email && password) {
      dispatch(authAction.loginUser(email, password));
    }

  };

  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const openRegisterModal = (condition) => {
    setRegisterModalOpen(condition);
  }

  return (
    <>
      <Register { ...{registerModalOpen, openRegisterModal} } />
      <div className="container" style={{ "paddingTop": "5%" }}>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="card-title text-center text-uppercase">Login</div>
                <hr />
                <form onSubmit={onSubmitLogin}>
                  <div className="form-group">
                    <input className="form-control" name="email" type="email" placeholder="Email" onChange={handleChange} value={email} />
                  </div>
                  <div className="form-group">
                    <input className="form-control" name="password" type="password" placeholder="Password" onChange={handleChange} value={password} />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-block btn-primary">
                      Login
                  </button>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                Not an user? Register
                  <a onClick={() => setRegisterModalOpen(!registerModalOpen)} className="btn btn-secondary btn-sm">
                  here
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Auth };
