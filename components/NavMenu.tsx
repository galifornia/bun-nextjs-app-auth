'use client';

import {
  signIn,
  signOut,
  useSession,
} from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ACTIVE_ROUTE = 'py-1 px-2 text-gray-300 bg-gray-700';
const INACTIVE_ROUTE =
  'py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700';

const AuthButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session?.user?.name}
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      <>
        Not signed in.
        <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    </>
  );
};

const NavMenu = () => {
  const pathname = usePathname();
  return (
    <div>
      <AuthButton />
      <hr className='my-4' />
      <ul>
        <Link href='/'>
          <li className={pathname === '/' ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
            HOME
          </li>
        </Link>
        <Link href='/protected'>
          <li
            className={
              pathname === '/protected' ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            PROTECTED
          </li>
        </Link>
        <Link href='/serverAction'>
          <li
            className={
              pathname === '/serverAction' ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            SERVER ACTION
          </li>
        </Link>
        <Link href='/apiFromClient'>
          <li
            className={
              pathname === '/apiFromClient' ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            PROTECTED API FROM CLIENT
          </li>
        </Link>
        <Link href='/apiFromServer'>
          <li
            className={
              pathname === '/apiFromServer' ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            PROTECTED API FROM SERVER
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavMenu;
