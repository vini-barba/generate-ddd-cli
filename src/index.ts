import { program } from 'commander';

import pkg from '../package.json';
import init from './commands';
import ConfigManager from './utils/config/configManager';

export default async function cli(args: any) {
  const configManager = new ConfigManager();
  await configManager.init();
  const config = configManager.file;

  await init(args, program, config);

  program.version(pkg.version);
  program.parse(args);
}
