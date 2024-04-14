import React from 'react';
import { headers } from 'next/headers';

import TableContextWrapper from './_components/constant/TableContext';
import { GET_STUDENTS_API_ENDPOINT } from '@/helpers/constants/api-endpoint.constant';

const Page = async () => {
  const headersList = headers();
  // TODO: we create common method for fetch with documentation
  let baseUrl = headersList.get('referer');
  const data = await fetch(`${baseUrl}${GET_STUDENTS_API_ENDPOINT}`);
  const apiRes = await data.json();

  return <TableContextWrapper nodes={apiRes.data} />;
};

export default Page;
