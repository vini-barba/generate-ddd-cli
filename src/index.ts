import { program } from 'commander';

import pkg from '../package.json';
import init from './commands';
import ConfigManager from './utils/config/configManager';

export default async function cli(args: any) {
  const configManager = new ConfigManager();
  const config = await configManager.init();
  console.log(config);

  await init(args, program, config);

  program.version(pkg.version);
  program.parse(args);
}
