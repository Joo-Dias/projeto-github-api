import './styles.scss';

const UserPicture = props => (
    <div className="Container-userPicture">
        <img className="ProfilePicture" src={props.url} alt="" />
    </div>
);

export default UserPicture;