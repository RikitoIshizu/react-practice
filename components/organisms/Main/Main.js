import styles from './Main.module.css';
import { Links } from '/components/organisms/Links/Links.js';
import { Headline } from '/components/organisms/Headline/Headline.js';
import PropTypes from 'prop-types';

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline
        page={props.page}
      >
        <code className={styles.code}>page/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}

Main.propTypes = {
  page: PropTypes.string
};