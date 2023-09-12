import { headers } from 'next/headers';

const ProtectedServerApiPage = async () => {
  const resp = await fetch('http://localhost:3000/api/whoAmI', {
    headers: headers(),
  }).then((res) => res.json());

  return (
    <div>
      <h1>API route from client</h1>
      <p>Name: {resp?.name}</p>
    </div>
  );
};

export default ProtectedServerApiPage;
