interface IPagination {
  page: number;
  perPage: number;
}

export const pagination: IPagination = {
  page: 1,
  perPage: 8,
};
