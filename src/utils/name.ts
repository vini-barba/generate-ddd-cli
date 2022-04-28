export default class Name {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  camelCase(): string {
    return this._name
      .toLowerCase()
      .split(' ')
      .map((word, index) => {
        if (index === 0) {
          return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join('')
      .replace(/[^\w-]+/g, '')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  pascalCase(): string {
    return this._name
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')
      .replace(/[^\w-]+/g, '')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  capitalize(): string {
    return this._name.charAt(0).toUpperCase() + this._name.slice(1);
  }

  toLowerCase(): string {
    return this._name.toLowerCase();
  }

  kebabCase(): string {
    return this._name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  toUpperCase(): string {
    return this._name.toUpperCase();
  }
}
