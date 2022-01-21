import { useDispatch, useSelector } from "react-redux";
import { refreshUsersList } from "./redux/userSlice";

const styles = require("./UserList.module.scss");

export function UserList() {
  const userList = useSelector((state) => state.user.userList);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(refreshUsersList([{ id: 1, name: "tomy" }]));
  };

  const renderContent = () => {
    if (userList.length > 0) {
      return JSON.stringify(userList);
    } else {
      return "La lista está vacía";
    }
  };

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Usuarios</h1>
      {(!userList || userList.length <= 0) && (
        <button
          className={styles.fetchButton}
          aria-label="fetch users"
          onClick={handleClick}
        >
          GET
        </button>
      )}

      <div className={styles.list}>{renderContent()}</div>
    </div>
  );
}
