import styles from './Headline.module.css';
import PropTypes from 'prop-types';

export function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>
        {props.page} page!
			</h1>

			<p className={styles.description}>
				Get started by editing{' '}
				{props.children}
			</p>
		</div>
	);
}

Headline.propTypes = {
	page: PropTypes.string,
  title: PropTypes.string,
	description: PropTypes.string,
	children: PropTypes.element
};