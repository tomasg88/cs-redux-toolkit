import "./styles.css";
import { UserList } from "./modules/User/UserList";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div className="grid">
        <div className="user-container">
          <UserList />
        </div>
      </div>
    </div>
  );
}
