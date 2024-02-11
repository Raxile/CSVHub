import React from 'react';
import { MdAdd } from 'react-icons/md';
import Button from '@/components/form-element/Button';

const Page = () => (
  <section className="container mx-auto mt-4">
    <div className="flex justify-end">
      <Button className="bg-[var(--light-blue)] text-white">
        <MdAdd />
        Add Students
      </Button>
    </div>
  </section>
);

export default Page;
