import { useState, useContext, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

import { BsGithub } from "react-icons/bs";

import "./styles.scss";

import client from "../../services/client";

import { context } from "../../context";

const Header = (props) => {
    const ctx = useContext(context);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        (async function getUserData() {
            try {
                const response = await client.get(`/${props.username}`);
                const repos = await client.get(`/${props.username}/repos`);

                ctx.setUserData(response.data);
                ctx.setUserRepos(repos.data);
            } catch (err) {
                console.log(err);
            }
        })();
    }, [props.username]);

    return (
        <header className="HeaderSection">
            <div className="box">
                <BsGithub className="github-icon" />
                <h1 className="HeaderTitle">Github Profile</h1>
                <div className="HeaderInputContainer">
                    <input
                        className="input"
                        placeholder="Procure seu perfil"
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />

                    <Link
                        className="SearchButton"
                        to={`/?username=${searchValue}`}
                    >
                        <FiSearch />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
