import App from 'next/app'
import 'tailwindcss/tailwind.css'
import Layout from '@components/Layout';

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  const reqCategories = await fetch(process.env.NEXT_PUBLIC_API_URL + '/categories');
  const categories = await reqCategories.json();

  return { ...appProps, categories };
}

function MyApp({ Component, pageProps, categories }) {
  return (
    <Layout categories={categories}>
      <Component {...pageProps} />
    </Layout>
  );
}


export default MyApp
