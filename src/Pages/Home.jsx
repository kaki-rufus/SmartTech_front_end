import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchBgImage = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/home/');
        const data = response.data;
        setImage(data[0].bg_image); // Assuming the response is an array with a single object
      } catch (error) {
        console.error('Error fetching background image:', error);
      }
    };

    fetchBgImage();
  }, []);

  const backgroundStyle = {
    backgroundImage: `url('${image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    // opacity: '0',
    height: '100vh',
  };

  return <div style={backgroundStyle}>
    <h1 className='name-comp'><span>Smart</span>Tech</h1>
  </div>;
};

export default Home;

