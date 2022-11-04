import PlayerCard from "./player-card";
import AdminCard from "./admin-card";
import { CardWrapper } from "../../../consts/styles/card/card-wrapper";

const UserCard = props => {
  const card = ('email' in props.user) ? <PlayerCard player={props.user} /> : <AdminCard admin={props.user} />;

  return <CardWrapper>{card}</CardWrapper>
}

export default UserCard;