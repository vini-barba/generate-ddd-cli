import CreateEntity from './actions/domain/entity/entity';
import CreateEntityInterface from './actions/domain/entity/entity-interface';
import CreateEntitySpec from './actions/domain/entity/entity-spec';
import CommandAbstract from './command.abstract';
import CommandInterface from './command.interface';

export default class GenerateDomainEntity
  extends CommandAbstract
  implements CommandInterface
{
  setCommand() {
    this.command = this.program
      .command('generate-entity <name...>')
      .aliases(['ge'])
      .description('Generate a new Entity')
      .option(
        '-p, --path <path>',
        'Path where the Entity should be created, default is "./src"',
        './src',
      );
    this.command.action((names: string[], options: any) => {
      names.forEach((name: string) => {
        new CreateEntityInterface(name, options.path).writeFile();
        new CreateEntity(name, options.path).writeFile();

        if (this.config.createTests === true) {
          new CreateEntitySpec(name, options.path).writeFile();
        }
      });
    });
  }
}
