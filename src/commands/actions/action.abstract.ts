import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import Name from '../../utils/name';
import ActionInterface from './action.interface';

export default class Action implements ActionInterface {
  templateFileLocation: string;

  fileName: string;

  path: string;

  basePath: string;

  name: Name;

  constructor(name: string, path: string) {
    this.name = new Name(name);
    this.basePath = join(path, 'domain');
  }

  writeFile(): void {
    const template = readFileSync(this.templateFileLocation, 'utf8');
    const content = template
      .replace(/NAME_CAPITALIZE/g, this.name.capitalize())
      .replace(/NAME_KEBAB/g, this.name.kebabCase())
      .replace(/NAME_CAMEL/g, this.name.camelCase())
      .replace(/NAME_PASCAL/g, this.name.pascalCase());
    this.createDirectorysRecursivelyIfNotExists();
    writeFileSync(this.path, content);
  }

  createDirectorysRecursivelyIfNotExists(): void {
    const path = this.path.split('/');
    path.pop();
    const directory = path.join('/');

    if (!existsSync(directory)) {
      mkdirSync(directory, { recursive: true });
    }
  }
}
