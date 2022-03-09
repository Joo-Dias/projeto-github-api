import './styles.scss';

const MainContainer = props => (
    <main className="Container">
        {props.children}
    </main>
);

export default MainContainer;