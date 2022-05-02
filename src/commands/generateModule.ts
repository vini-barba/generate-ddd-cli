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
        `Path where the module should be created, default is your rootDir (${this.config.rootDir})`,
        this.config.rootDir,
      );
    this.command.action((names: string[], options: any) => {
      names.forEach((name: string) => {
        new CreateEntityInterface(name, options.path, this.config).writeFile();
        new CreateEntity(name, options.path, this.config).writeFile();
        new CreateEntityFactory(name, options.path, this.config).writeFile();

        if (this.config.createTests === true) {
          new CreateEntitySpec(name, options.path, this.config).writeFile();
          new CreateEntityFactorySpec(
            name,
            options.path,
            this.config,
          ).writeFile();
        }
      });
    });
  }
}
