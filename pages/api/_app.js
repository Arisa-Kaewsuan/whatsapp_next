import { useAuthState } from "react-firebase-hooks";
import { auth, db } from "../firebase";
import { Login } from "@mui/icons-material";

function MyApp() {
  const [user] = useAuthState(auth);

  if (!user) return <Login />;
  return;
}

export default MyApp;
