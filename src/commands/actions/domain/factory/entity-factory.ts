import { join } from 'path';
import ActionInterface from '../../action.interface';
import ActionAbstract, { Layer } from '../../action.abstract';
import Config from '../../../../utils/config/config';

export default class CreateEntityFactory
  extends ActionAbstract
  implements ActionInterface
{
  constructor(name: string, path: string, config: Config) {
    super(name, path, config);
    this.templateFileLocation = join(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      'templates',
      'domain',
      'factory',
      'name-factory.txt',
    );

    this.fileName = `${this.name.kebabCase()}.factory.ts`;
    this.changeFullPath('factory', Layer.DOMAIN);
  }
}
