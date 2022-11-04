import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { CardContainer } from "../../../consts/styles/card/card-wrapper";
import UserCard from "./card";

function GetUser({ getUser }) {
    const [user, setUser] = useState([]);
    const params = useParams();

    useEffect(() => {
        getUser(params.id).then(user => {
            setUser(user);
        }).catch(x => console.log(x));
    }, [params])

    return <CardContainer> <UserCard user={user} /> </CardContainer>
}

export default GetUser;