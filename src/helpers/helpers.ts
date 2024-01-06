export const isIn = ({ list, id }: { list: any[]; id: number }) => {
  return !!list.find((el) => el.id === id);
};


