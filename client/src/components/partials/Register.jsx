import {
  useState, useEffect
} from 'react';

import {
  Card,
  Modal,
  Form
} from 'react-bootstrap';

const Register = ({ registerModalOpen, openRegisterModal }) => {

  let [show, setShow] = useState(false);

  useEffect(() => {
    setShow(registerModalOpen);
  }, [registerModalOpen]);

  const [registerInput, setRegisterInput] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const {
    first_name,
    last_name,
    email,
    password
  } = registerInput;


  const handleChange = e => {
    const {
      name, value
    } = e.target;

    setRegisterInput({ ...registerInput, [name]: value });
  };

  const handleRegisterSubmit = e => {

    // disable default behavior.
    e.preventDefault();
    if (first_name && last_name && email && password) {

    }
  };

  return (
    <>
      <Modal show={show} onHide={() => { setShow(false); openRegisterModal(false); }}>
        <Modal.Body>
          <Modal.Header closeButton></Modal.Header>
          <Card>
            <Card.Body>
              <Card.Title className="text-uppercase text-center">Register</Card.Title>
              <Form onSubmit={handleRegisterSubmit}>
                <div className="form-group">

                  <div className="row">
                    <div className="col-lg-6">

                      <input className="form-control" name="first_name" type="text" placeholder="First name" onChange={handleChange} value={first_name} />

                    </div>
                    <div className="col-lg-6">

                      <input className="form-control" name="last_name" type="text" placeholder="Last name" onChange={handleChange} value={last_name} />

                    </div>
                  </div>

                </div>
                <div className="form-group">
                  <input className="form-control" name="email" type="email" placeholder="Email" onChange={handleChange} value={email} />
                </div>
                <div className="form-group">
                  <input className="form-control" name="password" type="password" placeholder="Password" onChange={handleChange} value={password} />
                </div>
                <div className="form-group">
                  <button className="btn btn-block btn-primary">
                    Sign Up User
                  </button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );

};

export { Register };
