import { getAdmin } from "../../services/user-service";
import GetUser from "./users/get-user";

const GetAdmin = () => <GetUser getUser={getAdmin} />;

export default GetAdmin;