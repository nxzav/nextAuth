'use client';

import axios, { AxiosError } from 'axios';
import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    if (res?.error) return setError(res.error as string);

    if (res?.ok) return router.push('/dashboard/profile');

    console.log(res);
  };

  return (
    <div className="justify-center h-[calc(100vh-4rem)] flex flex-col items-center">
      <form className="bg-slate-800 px-8 py-10 w-11/12 md:w-96 rounded-lg text-white" onSubmit={handleSubmit}>
        {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
        <h1 className="text-4xl font-bold mb-7 text-center">Log in</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="bg-neutral-100 px-4 py-2 block mb-2 w-full rounded text-black"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="bg-neutral-100 px-4 py-2 block mb-2 w-full rounded text-black"
        />
        <button className="bg-blue-700 px-4 py-2 rounded">Log in</button>
      </form>
      <p className='mt-5'>Don't have an account? <Link href="/register" className='text-blue-500'>Sign up</Link></p>
    </div>
  );
}
