import {User} from "../interfaces";

interface AllUsersCardProps {
    user: User,
}

export function FunctionMenuAllUsersCard(props: AllUsersCardProps) {
    return (
        <div className="card m-3" style={{width: "18rem"}}>
            <div className="card-body">
                <p className="card-title">id - {props.user.id}</p>
                <p className="card-subtitle mb-2 text-muted">name - {props.user.name}</p>
                <p className="card-subtitle mb-2 text-muted">surname - {props.user.surname}</p>
                <p className="card-subtitle mb-2 text-muted">roles:</p>
                {
                    props.user.roles.map(rol => <p> - {rol.name},</p>)
                }
            </div>
        </div>
    )
}