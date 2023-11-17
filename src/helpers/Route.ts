import { generatePath, matchPath } from 'react-router';
import { anyObject } from '../types/helpers';

const replacer = '*';

const toMap = (array: string[]) =>
  array.reduce(
    (acc, key) => ({ ...acc, [key]: true }),
    {} as Record<string, boolean>,
  );

export class Route<T extends anyObject> {
  private readonly $searchKeys: Record<string, boolean>;

  static of<TT extends anyObject>(options: {
    path: string;
    searchKeys?: string[];
  }) {
    return new Route<TT>(options.path, options.searchKeys);
  }

  constructor(
    // eslint-disable-next-line no-unused-vars
    private $path: string,
    searchKeys?: string[],
  ) {
    this.$searchKeys = toMap(searchKeys || []);
  }

  public get path() {
    return this.$path;
  }

  public get<R extends T>(params?: R, search = '') {
    if (!params && !search) return this.$path;

    try {
      return (
        generatePath(this.$path, params as Record<string, string>) +
        this.getSearch(search)
      );
    } catch (e) {
      console.error(e);
      return '#';
    }
  }

  public getPartial<R extends T>(params?: { [k in keyof R]: R[k] | null }) {
    if (!params) return this.$path;

    const $params = Object.fromEntries(
      Object.entries(params).map(([key, value]) => {
        if (value === null) return [key, replacer];

        return [key, value];
      }),
    );

    const path = generatePath(this.$path, $params as Record<string, string>);

    const compiledPathParts = path.split('/');
    const thisPathParts = this.$path.split('/');
    const firstSlash = this.$path.startsWith('/') ? '/' : '';

    const partials = compiledPathParts.map((part, idx) => {
      if (part === replacer) {
        const lastSlash = thisPathParts.length === idx - 1 ? '' : '/';
        return '/' + thisPathParts[idx] + lastSlash;
      }

      return part;
    });

    return firstSlash + partials.join('');
  }

  public match(pathname: string) {
    return matchPath(pathname, this.$path);
  }

  private getSearch(search: string) {
    if (!search.length) return '';

    const urlSearchParams = new URLSearchParams(search);
    const locationSearchKeys = Array.from(urlSearchParams.keys());

    locationSearchKeys.forEach((key) => {
      if (!this.$searchKeys[key]) urlSearchParams.delete(key);
    });

    const searchString = urlSearchParams.toString();
    if (!searchString.length) return '';
    return '?' + searchString;
  }
}
