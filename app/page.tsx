'use client';
import React from 'react';
import { MdAdd } from 'react-icons/md';
import Button from '@/components/form-element/Button';
import Table from '@/components/Table';
import StudentsTable from './_components/StudentsTable';

const nodes = [
  {
    name: 'Shopping List',
    dateOfBirth: 'create',
    email: 'piyush@yopmail.com',
    address: 'piyush',
    country: 'India',
  },
  {
    name: 'Shopping List',
    dateOfBirth: 'TASK',
    address: 'piyush',
    email: 'piyush@yopmail.com',
    country: 'India',
  },
];

const Page = () => (
  <section className="container mx-auto mt-4">
    <div className="flex justify-end">
      <Button className="bg-[var(--light-blue)] text-white">
        <MdAdd />
        Add Students
      </Button>
    </div>
    <StudentsTable>
      {({ columnDef }: { columnDef: any[] }) => (
        <Table columnDef={columnDef} nodes={nodes} />
      )}
    </StudentsTable>
  </section>
);

export default Page;
