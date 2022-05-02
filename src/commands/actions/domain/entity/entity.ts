import { join } from 'path';
import ActionInterface from '../../action.interface';
import ActionAbstract, { Layer } from '../../action.abstract';
import Config from '../../../../utils/config/config';

export default class CreateEntity
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
      'entity',
      'name.txt',
    );

    this.fileName = `${this.name.kebabCase()}.ts`;
    this.changeFullPath('entity', Layer.DOMAIN);
  }
}
