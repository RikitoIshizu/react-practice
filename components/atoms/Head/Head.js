import Head from 'next/head';
import PropTypes from 'prop-types';

export function HeadMeta(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

HeadMeta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};