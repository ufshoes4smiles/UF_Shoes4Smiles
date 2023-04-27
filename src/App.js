import React, { useState, useEffect } from 'react';
import Layout from './Layout/Layout';
import BarLoader from 'react-spinners/BarLoader';
import image from './assets/footer.png';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1700);
  }, []);
  return (
    <div className="bg-[#060229] overflow-hidden	">
      {loading ? (
        <div className=" w-full h-[100vh] pb-14 overflow-x-hidden overflow-y-hidden flex flex-col justify-center bg-[#0d013b] items-center ">
          <img
            src={image}
            alt=""
            className="lg:w-[550px] lg:h-[400px] w-[300px] h-[218px] md:w-[400px] md:h-[290px]"
          />
          <BarLoader
            color="#36d7b7"
            loading={loading}
            height={20}
            width={289}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <Layout />
      )}
    </div>
    // <div>helo</div>
  );
}

export default App;
