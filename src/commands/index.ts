/* eslint-disable no-new */
import { Command } from 'commander';
import GenerateDomainFactory from './generateDomainFactory';
import GenerateDomainEntity from './generateDomainEntity';
import GenerateModule from './generateModule';
import ConfigFile from '../utils/config/config';

export default async function init(
  args: string[],
  program: Command,
  configFile: ConfigFile,
): Promise<void> {
  new GenerateModule(program, args, configFile);
  new GenerateDomainFactory(program, args, configFile);
  new GenerateDomainEntity(program, args, configFile);
}
