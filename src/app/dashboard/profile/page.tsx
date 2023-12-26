'use client';

import { signOut, useSession } from 'next-auth/react';

export default function ProfilePage() {
  const { data: session, status } = useSession();
  console.log(session, status);

  return (
    <div className="justify-center h-[calc(100vh-4rem)] w-11/12 flex flex-col gap-y-5 items-center box-border mx-auto">
      <h1 className="font-bold text-3xl">Profile</h1>

      <pre className="bg-zinc-800 p-4 box-border w-full overflow-x-scroll">
        <p className='text-sm'>
          {JSON.stringify(
            {
              session,
              status,
            },
            null,
            2
          )}
        </p>
      </pre>
      <button
        className="bg-red-700 px-4 py-2 block mb-2 rounded"
        onClick={() => signOut()}
      >
        Log out
      </button>
    </div>
  );
}
