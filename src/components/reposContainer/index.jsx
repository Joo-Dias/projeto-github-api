import { context } from '../../context';
import './styles.scss';

const ReposContainer = props => {

    return (
        <section className="Section">
            <h1 className="Title">Repositórios de {(props.name)?.split(' ')[0]}</h1>
            <h1 className="ListOfReposContainer">
                {(props?.repos).map(repo => (
                    <h2 className="Repo" onClick={() => window.location.href(repo?.html_url)} key={repo?.id}>
                        <h2>{repo?.name}</h2>
                        <p>{repo?.description}</p>
                    </h2>
                ))}
            </h1>
        </section>
    );
}

export default ReposContainer;