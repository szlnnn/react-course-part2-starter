import { useContext } from "react";
import AuthContext from "./authContext";

const useAuths = () => useContext(AuthContext);

export default useAuths;
