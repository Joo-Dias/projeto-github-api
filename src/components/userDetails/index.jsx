import './styles.scss';

const UserDetails = props => {
    return (
        <div className="Container-userDetails">
            <h1 className="Name">{props?.name}</h1>
            <h2 className="Username">{props?.login}</h2>
            <p className="Description">{props?.bio}</p>
        </div>
    );
}

export default UserDetails;