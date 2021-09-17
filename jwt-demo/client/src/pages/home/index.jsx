import React, { useEffect } from 'react';
import { home } from '../../api/user'

const Home = () => {
  useEffect(() => {
    home()
  }, []);
  return (
    <div>Home</div>
  )
}

export default Home