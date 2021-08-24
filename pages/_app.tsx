import '../styles/site.scss';

function MyApp({ Component, pageProps }) {
    return (
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Component {...pageProps} />
      </>
    );
}

export default MyApp
