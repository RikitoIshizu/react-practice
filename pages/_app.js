import '/styles/globals.css';
import PropTypes from 'prop-types';

// eslint-disable-line　react/prop-types
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
};