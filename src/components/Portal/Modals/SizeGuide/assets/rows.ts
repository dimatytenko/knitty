interface IRow {
  name: string;
  cells: string[] | number[];
}

export const rows: IRow[] = [
  {
    name: 'International size',
    cells: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    name: 'Ukrainian size',
    cells: ['', '', '', '', '', '', ''],
  },
  {
    name: 'European size',
    cells: ['', '', '', '', '', '', ''],
  },
  {
    name: 'Bust',
    cells: ['', '', '', '', '', '', ''],
  },
  {
    name: 'Hip',
    cells: ['', '', '', '', '', '', ''],
  },
  {
    name: 'Height',
    cells: ['', '', '', '', '', '', ''],
  },
];
