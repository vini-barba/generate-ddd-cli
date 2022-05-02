import CreateEntity from './actions/domain/entity/entity';
import CreateEntityInterface from './actions/domain/entity/entity-interface';
import CreateEntitySpec from './actions/domain/entity/entity-spec';
import CreateEntityFactory from './actions/domain/factory/entity-factory';
import CreateEntityFactorySpec from './actions/domain/factory/entity-factory-spec';
import CommandAbstract from './command.abstract';
import CommandInterface from './command.interface';

export default class GenerateModule
  extends CommandAbstract
  implements CommandInterface
{
  setCommand() {
    this.command = this.program
      .command('generate-module <name...>')
      .aliases(['gm'])
      .description('Generate a new module')
      .option(
        '-p, --path <path>',
        'Path where the module should be created, default is "./src"',
        './src',
      );
    this.command.action((names: string[], options: any) => {
      names.forEach((name: string) => {
        new CreateEntityInterface(name, options.path).writeFile();
        new CreateEntity(name, options.path).writeFile();
        new CreateEntitySpec(name, options.path).writeFile();
        new CreateEntityFactory(name, options.path).writeFile();
        new CreateEntityFactorySpec(name, options.path).writeFile();
      });
    });
  }
}
