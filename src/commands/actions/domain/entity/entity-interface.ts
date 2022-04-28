import { join } from 'path';
import ActionInterface from '../../action.interface';
import Action from '../../action.abstract';

export default class CreateEntityInterface
  extends Action
  implements ActionInterface
{
  constructor(name: string, path: string) {
    super(name, path);
    this.templateFileLocation = join(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      'templates',
      'domain',
      'entity',
      'name-interface.txt',
    );

    this.fileName = `${this.name.kebabCase()}.interface.ts`;

    const pathToFile = join(this.basePath, this.name.kebabCase(), 'entity');

    this.path = `${pathToFile}/${this.fileName}`;
  }
}
