import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const ProtectedRoute = async () => {
  const session = await getServerSession();

  if (!session || !session.user) {
    redirect('/api/auth/signin');
  }

  return <div>This is a protected route.</div>;
};

export default ProtectedRoute;
