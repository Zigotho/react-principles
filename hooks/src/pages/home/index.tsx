import { Link } from 'react-router-dom';

type Pages = {
    label: string;
    path: string;
}

export const Home = () => {
  const AllPages: Pages[] = [
    { label: 'UseEffect', path: '/useEffect' },
    { label: 'UseState', path: '/useState' }
  ];
  return (
    <div className="App">
      <div className="card">
        <h1>Home</h1>
        <p>
          This is the home page. It is site to use all react principles.
        </p>
        <ul>
          {AllPages.map((page) => (
            <li key={page.path}>
              <Link to={page.path}>{page.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
