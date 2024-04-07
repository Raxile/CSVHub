'use client';

import { getTheme } from '@/helpers/constants/table.constant';
import { CompactTable } from '@table-library/react-table-library/compact';

interface TableProps {
  columnDef: any[];
  nodes: any[];
}

const Table = ({ columnDef, nodes }: TableProps) => {
  return (
    <CompactTable
      columns={columnDef}
      data={{ nodes }}
      theme={getTheme}
      layout={{ fixedHeader: true }}
    />
  );
};

export default Table;
