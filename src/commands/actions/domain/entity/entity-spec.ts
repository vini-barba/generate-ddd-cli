import { join } from 'path';
import ActionInterface from '../../action.interface';
import Action from '../../action.abstract';

export default class CreateEntitySpec
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
      'name-spec.txt',
    );

    this.fileName = `${this.name.kebabCase()}.spec.ts`;

    const pathToFile = join(this.basePath, this.name.kebabCase(), 'entity');

    this.path = `${pathToFile}/${this.fileName}`;
  }
}
