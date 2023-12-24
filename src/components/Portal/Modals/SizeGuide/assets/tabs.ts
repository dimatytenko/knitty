type RowType = {
  name: string;
  cells: string[] | number[];
};

type TabsType = {
  [key in 'woman' | 'man' | 'kids']: RowType[];
};

export const tabs: TabsType = {
  woman: [
    {
      name: 'International size',
      cells: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    },
    {
      name: 'Ukrainian size',
      cells: ['40-42', '42-44', '46-48', '48-50', '50-52', '52-54'],
    },
    {
      name: 'European size',
      cells: ['34', '36', '38-40', '42-44', '46', '48'],
    },
    {
      name: 'Bust',
      cells: ['80-88', '88-94', '94-100', '100-106', '106-114', '114-122'],
    },
    {
      name: 'Hip',
      cells: ['90-94', '94-98', '98-104', '104-110', '112-118', '118-124'],
    },
    {
      name: 'Height',
      cells: ['<168', '<175', '<180', '', '', '',],
    },
  ],
  man: [
    {
      name: 'International size',
      cells: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    },
    {
      name: 'Ukrainian size',
      cells: ['46', '48', '50', '52', '54', '56'],
    },
    {
      name: 'European size',
      cells: ['40', '41', '42', '43', '44', '45'],
    },
    {
      name: 'Bust',
      cells: ['94-98', '100-104', '106-110', '112-116', '118-122', '124-128'],
    },
    {
      name: 'Hip',
      cells: ['44-46', '46-48', '48-50', '50-52', '52-54', '54-56'],
    },
    {
      name: 'Height',
      cells: ['<180', '<186', '<194', '', '', '',],
    },
  ],
  kids: [
    {
      name: 'International size',
      cells: ['3-4', '5-6', '7-8', '9-10', '11-12', '13-14'],
    },
    {
      name: 'Ukrainian size',
      cells: ['104', '116', '128', '140', '152', '164'],
    },
    {
      name: 'European size',
      cells: ['28', '30', '32', '34', '36', '38'],
    },
    {
      name: 'Bust',
      cells: ['37', '42', '47', '52', '56', '61'],
    },
    {
      name: 'Hip',
      cells: ['53', '62', '66', '72', '78', '84'],
    },
    {
      name: 'Height',
      cells: ['62', '66', '70', '76', '82', '88'],
    },
  ],
};
