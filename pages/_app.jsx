import PublicLayout from "@/components/PublicLayout";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <PublicLayout>
      <Component {...pageProps} />;
    </PublicLayout>
  );
};

export default App;
