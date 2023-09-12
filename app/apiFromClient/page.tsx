'use client';

import {
  useEffect,
  useState,
} from 'react';

const ProtectedApiPage = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    fetch('/api/whoAmI')
      .then((res) => res.json())
      .then((data) => setName(data.name));
  }, []);

  return (
    <div>
      <h1>API route from client</h1>
      <p>Name: {name}</p>
    </div>
  );
};

export default ProtectedApiPage;
