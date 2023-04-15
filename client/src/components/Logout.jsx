import { useHistory } from 'react-router-dom';
import Modal from './Modal';
import Portal from './Portal';
import axios from 'axios';
import UserContext from '../context/UserContext';
import React, { useContext } from 'react';

const Logout = ({ isOpen, setIsOpen }) => {
  const history = useHistory();
  const [user, setUser] = useContext(UserContext);

  const logoutHandler = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/auth/signout`)
      .then((res) => {
        if (res.status) {
          setUser(null);
          history.push('/');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {isOpen === true ? (
        <Portal>
          <Modal
            message={'로그아웃 하시겠습니까?'}
            setIsOpen={setIsOpen}
            callback={logoutHandler}
          />
        </Portal>
      ) : null}
    </>
  );
};

export default Logout;
