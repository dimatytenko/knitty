export const isIn = ({ list, id }: { list: any[]; id: string }) => {
  return !!list.find((el) => el.id === id);
};
