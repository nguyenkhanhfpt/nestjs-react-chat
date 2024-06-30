import { useUser } from "../context/UserContext";
import { Chat } from "./Chat";
import { SignInPage } from "./SignInPage";

export function Render() {
  let user = useUser();

  return <>{user?.id ? <Chat></Chat> : <SignInPage></SignInPage>}</>;
}
