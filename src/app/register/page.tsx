'use client';

import axios, { AxiosError } from 'axios';
import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const [error, setError] = useState();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const signUpResponse = await axios.post('/api/auth/signup', {
        email: formData.get('email'),
        password: formData.get('password'),
        fullname: formData.get('fullname'),
      });
      console.log(signUpResponse);

      const res = await signIn('credentials', {
        email: signUpResponse.data.email,
        password: formData.get('password'),
        redirect: false,
      });

      if (res?.ok) return router.push('/dashboard/profile');

      console.log(res);
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      }
    }
  };

  return (
    <div className="justify-center h-[calc(100vh-4rem)] flex flex-col items-center">
      <form className="bg-slate-800 px-8 py-10 w-11/12 md:w-96 rounded-lg text-white" onSubmit={handleSubmit}>
        {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
        <h1 className="text-4xl font-bold mb-7 text-center">Sign up</h1>
        <input
          type="text"
          placeholder="Full name"
          name="fullname"
          className="bg-neutral-100 px-4 py-2 block mb-2 w-full rounded text-black"
        />
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
        <button className="bg-purple-600 px-4 py-2 rounded">Sign up</button>
      </form>
      <p className='mt-5'>Have an account? <Link href="/login" className='text-purple-500'>Log in</Link></p>
    </div>
  );
}
