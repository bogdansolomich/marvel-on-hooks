import './appHeader.scss';

const AppHeader = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        <p>
          <span>Marvel</span> information portal
        </p>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <p>Characters</p>
          </li>
          /
          <li>
            <p>Comics</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
