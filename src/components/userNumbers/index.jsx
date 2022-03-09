import React from 'react';
import { useHistory } from 'react-router-dom';

import "./styles.scss";

const UserNumbers = props => {
    const history = useHistory();
    const handleOnClick = route => history.push(route);

    return (
        <div className="Container-userNumbers">
            <div className="NumberContainer" onClick={() => handleOnClick('/repos')}>
                <h1>{props?.repos}</h1>
                <h2>Repositórios</h2>
            </div>

            <div className="NumberContainer">
                <h1>{props?.followers}</h1>
                <h2>Seguidores</h2>
            </div>

            <div className="NumberContainer">
                <h1>{props?.following}</h1>
                <h2>Seguindo</h2>
            </div>
        </div>
    );
}

export default UserNumbers;