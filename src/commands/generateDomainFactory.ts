import CreateEntityFactory from './actions/domain/factory/entity-factory';
import CreateEntityFactorySpec from './actions/domain/factory/entity-factory-spec';
import CommandAbstract from './command.abstract';
import CommandInterface from './command.interface';

export default class GenerateDomainFactory
  extends CommandAbstract
  implements CommandInterface
{
  setCommand() {
    this.command = this.program
      .command('generate-factory <name...>')
      .aliases(['gf'])
      .description('Generate a new Factory')
      .option(
        '-p, --path <path>',
        'Path where the Factory should be created, default is "./src"',
        './src',
      );
    this.command.action((names: string[], options: any) => {
      names.forEach((name: string) => {
        new CreateEntityFactory(name, options.path).writeFile();

        if (this.config.createTests === true) {
          new CreateEntityFactorySpec(name, options.path).writeFile();
        }
      });
    });
  }
}
