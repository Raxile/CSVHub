'use client';

import { STUDENT_TABLE_HEADER_NAME } from './constant/student.constant';

interface Item {
  name: string;
  address: string;
  email: string;
  dateOfBirth: string;
  country: string;
}

const StudentsTable = ({ children }: { children: Function }) => {
  const columnDef = [
    {
      label: STUDENT_TABLE_HEADER_NAME.NAME,
      renderCell: (item: Item) => item.name,
    },
    {
      label: STUDENT_TABLE_HEADER_NAME.EMAIL,
      renderCell: (item: Item) => item.email,
    },
    {
      label: STUDENT_TABLE_HEADER_NAME.DOB,
      renderCell: (item: Item) => item.dateOfBirth,
    },
    {
      label: STUDENT_TABLE_HEADER_NAME.ADDRESS,
      renderCell: (item: Item) => item.address,
    },
    {
      label: STUDENT_TABLE_HEADER_NAME.COUNTRY,
      renderCell: (item: Item) => item.country,
    },
  ];

  return children({ columnDef });
};

export default StudentsTable;
