import Link from 'next/link';
import { getServerSession } from 'next-auth';

export default async function Navbar() {
  const session = await getServerSession();

  return (
    <nav className="bg-slate-900 p-4 text-white">
      <div className="flex justify-between container mx-auto">
        <Link href="/">
          <h1 className="font-bold text-2xl">NextAuth.js</h1>
        </Link>

        <ul className="flex gap-x-1">
          {session ? (
            <li className="px-1 py-1 text-lg">
              <Link href="/dashboard/profile">Profile</Link>
            </li>
          ) : (
            <>
              <li className="px-1 py-1 text-lg">
                <Link href="/about">About</Link>
              </li>
              <li className="px-1 py-1 text-lg">
                <Link href="/login">Log in</Link>
              </li>
              <li className="px-1 py-1 text-lg">
                <Link href="/register">Sign up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
