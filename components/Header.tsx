import React from 'react';

const Header = () => (
  <header className="bg-[var(--primary)] text-white h-10">
    <div className="container mx-auto flex h-full justify-between items-center">
      <figure className="text-xl font-serif font-bold italic">
        <p>CSV Hub</p>
      </figure>
      <ul className="flex gap-3 justify-center items-center">
        <li className=" p-1 rounded-xl hover:bg-[var(--secondary)] hover:text-black cursor-pointer hover:border-0 border-b-2 border-[var(--primary-dark)]">
          Home
        </li>
        <li className="p-1 rounded-xl hover:bg-[var(--secondary)] hover:text-black cursor-pointer hover:border-0 border-b-2 border-[var(--primary-dark)]">
          About us
        </li>
      </ul>
    </div>
  </header>
);
export default Header;
