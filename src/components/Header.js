import React, { useEffect } from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUserLogin, setSignOut } from '../actions';
import { useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();
  const userName = useSelector((state) => state.user.name);
  const userPhoto = useSelector((state) => state.user.photo);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            email: user.email,
            name: user.displayName,
            photo: user.photoURL,
          })
        );
        history.push('/');
      }
    });
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      dispatch(
        setUserLogin({
          email: user.email,
          name: user.displayName,
          photo: user.photoURL,
        })
      );
      history.push('/');
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push('/login');
    });
  };
  return (
    <Nav>
      <Link to="/">
        <Logo src="/images/logo.svg" />
      </Link>
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <Link to="/">
              <img src="/images/home-icon.svg" alt="" />
              <span>HOME</span>
            </Link>
            <Link to="#">
              <img src="/images/search-icon.svg" alt="" />
              <span>SEARCH</span>
            </Link>
            <Link to="3">
              <img src="/images/watchlist-icon.svg" alt="" />
              <span>WATCHLIST</span>
            </Link>
            <Link to="#">
              <img src="/images/original-icon.svg" alt="" />
              <span>ORIGINALS</span>
            </Link>
            <Link to="#">
              <img src="/images/movie-icon.svg" alt="" />
              <span>MOVIES</span>
            </Link>
            <Link to="#">
              <img src="/images/series-icon.svg" alt="" />
              <span>SERIES</span>
            </Link>
          </NavMenu>

          <UserImg onClick={signOut} src={userPhoto}></UserImg>
          {/* <SignOut className="logout">logout</SignOut> */}
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;
      color: white;

      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        right: 0;
        left: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.button`
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  text-transform: uppercase;
  transition: all 0.2s ease 0s;
  letter-spacing: 1.5px;

  &:hover {
    background-color: #f9f9f9;
    color: black;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

// const UserButton = styled.div`
//   display: flex;
//   align-items: center;
//   width: 48px;
//   transition: width 0.35s;
//   &:hover .logout {
//     display: block;
//   }
//   &:hover {
//     width: 150px;
//   }
// `;

// const SignOut = styled.button`
//   margin-left: 12px;
//   cursor: pointer;
//   background-color: rgba(0, 0, 0, 0.6);
//   color: white;
//   border: 1px solid #f9f9f9;
//   padding: 8px 16px;
//   border-radius: 4px;
//   text-transform: uppercase;
//   transition: all 0.3s;
//   letter-spacing: 1.5px;
//   display: none;
// `;
