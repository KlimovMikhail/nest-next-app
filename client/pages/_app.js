/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import 'antd/dist/antd.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;
