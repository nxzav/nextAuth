import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-blue-950 h-10 flex justify-center place-items-center fixed w-full bottom-0'>
      <p>
        Builded by{' '}
        <a className="text-purple-400" target='_blank' href="https://github.com/nxzav">
          NxDev ❤️
        </a>
      </p>
    </footer>
  );
}
