import { useParams } from "react-router-dom";

export function User() {
    let { userId } = useParams<{userId: string}>();
    return (
        <h1>User - {userId}</h1>
    )
}