'use client';

import Button from '@/components/form-element/Button';
import React from 'react';
import { MdAdd } from 'react-icons/md';
import { createContext } from 'vm';
import StudentsTable from '../StudentsTable';
import Table from '@/components/Table';
export const TableContext = createContext();

const TableContextWrapper = ({ nodes }: { nodes: any[] }) => {
  return (
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
};

export default TableContextWrapper;
