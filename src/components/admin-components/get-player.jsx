import { getPlayerByAdmin } from "../../services/user-service";
import GetUser from "./users/get-user";

const GetPlayerByAdmin = () => <GetUser getUser={getPlayerByAdmin} />; 

export default GetPlayerByAdmin;