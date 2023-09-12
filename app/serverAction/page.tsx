import { getServerSession } from 'next-auth';

import { WhoAmIButton } from '@/components/WhoAmIButton';

const page = () => {
  const whoAmI = async () => {
    'use server';
    const session = await getServerSession();
    return session?.user?.name ?? 'Not logged In';
  };

  return (
    <div>
      <WhoAmIButton whoAmIAction={whoAmI} />
    </div>
  );
};

export default page;
