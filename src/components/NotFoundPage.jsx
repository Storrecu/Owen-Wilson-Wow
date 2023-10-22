import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <h2>
        It seems you're lost... need some help? Turn back into the Home Page.
      </h2>
      <Link to="/">Back to Home Page</Link>
    </>
  );
};

export default NotFoundPage;
