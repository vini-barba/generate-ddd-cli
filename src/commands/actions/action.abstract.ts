import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import Config from '../../utils/config/config';
import Name from '../../utils/name';
import ActionInterface from './action.interface';

export enum Layer {
  DOMAIN = 'domain',
  INFRA = 'infraestructure',
}

export default abstract class ActionAbstract implements ActionInterface {
  templateFileLocation: string;

  fileName: string;

  _path: string;

  _basePath: string;

  name: Name;

  config: Config;

  constructor(name: string, path: string, config: Config) {
    this.config = config;
    this.name = new Name(name);
    this.basePath = path;
  }

  get basePath(): string {
    return this._basePath;
  }

  set basePath(path: string) {
    if (this.config.modules !== false && path === this.config.rootDir) {
      this._basePath = join(this.config.modules.path);
    } else {
      this._basePath = join(path);
    }
  }

  get path(): string {
    return this._path;
  }

  changeFullPath(subPath: string, layer: Layer): void {
    if (this.config.modules !== false) {
      const pathToFile = join(
        this.basePath,
        this.name.kebabCase(),
        layer,
        subPath,
      );
      this._path = `${pathToFile}/${this.fileName}`;
    } else {
      const pathToFile = join(
        this.basePath,
        layer,
        this.name.kebabCase(),
        subPath,
      );
      this._path = `${pathToFile}/${this.fileName}`;
    }
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
