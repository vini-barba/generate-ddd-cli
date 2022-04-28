import { Command } from 'commander';
import CreateEntityFactory from './actions/domain/factory/entity-factory';
import CreateEntityFactorySpec from './actions/domain/factory/entity-factory-spec';

export default function generateDomainFactory(
  args: string[],
  program: Command,
): void {
  const command = program
    .command('generate-factory <name...>')
    .aliases(['gf'])
    .description('Generate a new Factory')
    .option(
      '-p, --path <path>',
      'Path where the Factory should be created, default is "./src"',
      './src',
    );
  command.action((names: string[], options: any) => {
    names.forEach((name: string) => {
      new CreateEntityFactory(name, options.path).writeFile();
      new CreateEntityFactorySpec(name, options.path).writeFile();
    });
  });
}
