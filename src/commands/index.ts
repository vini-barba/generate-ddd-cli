import { Command } from 'commander';
import generateDomainFactory from './generateDomainFactory';
import generateDomainEntity from './generateDomainEntity';
import generateModule from './generateModule';
import ConfigFile from '../utils/config/config';

export default async function init(
  args: string[],
  program: Command,
  configFile: ConfigFile,
): Promise<void> {
  generateModule(args, program, configFile);
  generateDomainFactory(args, program, configFile);
  generateDomainEntity(args, program, configFile);
}
