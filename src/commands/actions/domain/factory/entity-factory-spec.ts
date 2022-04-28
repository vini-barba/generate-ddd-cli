import { join } from 'path';
import ActionInterface from '../../action.interface';
import Action from '../../action.abstract';

export default class CreateEntityFactorySpec
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
      'factory',
      'name-factory-spec.txt',
    );

    this.fileName = `${this.name.kebabCase()}.factory.spec.ts`;

    const pathToFile = join(this.basePath, this.name.kebabCase(), 'factory');

    this.path = `${pathToFile}/${this.fileName}`;
  }
}