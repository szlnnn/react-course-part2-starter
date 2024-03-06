import useAuths from "./useAuths";

const LoginStatus = () => {
  //const [user, setUser] = useState('');
  const { username, dispatch } = useAuths();
  if (username)
    return (
      <>
        <div>
          <span className="mx-2">{username}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() =>
          dispatch({
            type: "LOGIN",
            username: "csortansz",
          })
        }
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
