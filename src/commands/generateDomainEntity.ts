import { Command } from 'commander';
import Config from '../utils/config/config';
import CreateEntity from './actions/domain/entity/entity';
import CreateEntityInterface from './actions/domain/entity/entity-interface';
import CreateEntitySpec from './actions/domain/entity/entity-spec';

export default function generateDomainEntity(
  args: string[],
  program: Command,
  config: Config,
): void {
  const command = program
    .command('generate-entity <name...>')
    .aliases(['ge'])
    .description('Generate a new Entity')
    .option(
      '-p, --path <path>',
      'Path where the Entity should be created, default is "./src"',
      './src',
    );
  command.action((names: string[], options: any) => {
    names.forEach((name: string) => {
      new CreateEntityInterface(name, options.path).writeFile();
      new CreateEntity(name, options.path).writeFile();
      new CreateEntitySpec(name, options.path).writeFile();
    });
  });
}
