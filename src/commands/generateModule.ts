import { Command } from 'commander';
import CreateEntity from './actions/domain/entity/entity';
import CreateEntityInterface from './actions/domain/entity/entity-interface';
import CreateEntitySpec from './actions/domain/entity/entity-spec';
import CreateEntityFactory from './actions/domain/factory/entity-factory';
import CreateEntityFactorySpec from './actions/domain/factory/entity-factory-spec';

export default function generateModule(args: string[], program: Command): void {
  const command = program
    .command('generate-module <name...>')
    .aliases(['gm'])
    .description('Generate a new module')
    .option(
      '-p, --path <path>',
      'Path where the module should be created, default is "./src"',
      './src',
    );
  command.action((names: string[], options: any) => {
    names.forEach((name: string) => {
      new CreateEntityInterface(name, options.path).writeFile();
      new CreateEntity(name, options.path).writeFile();
      new CreateEntitySpec(name, options.path).writeFile();
      new CreateEntityFactory(name, options.path).writeFile();
      new CreateEntityFactorySpec(name, options.path).writeFile();
    });
  });
}
