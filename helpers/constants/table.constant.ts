import { useTheme } from '@table-library/react-table-library/theme';

export const getTheme = useTheme({
  HeaderRow: `
        background-color: var(--table-header);
         color: white;
      `,
  Row: `
        &:nth-of-type(odd) {
          background-color: var(--table-row-odd);
        }

        &:nth-of-type(even) {
          background-color: var(--table-row-even);
        }
      `,
  BaseCell: `
      padding: 4px 12px;
    `,
});
