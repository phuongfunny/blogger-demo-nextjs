import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};
export default MyApp;
