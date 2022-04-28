import { program } from 'commander';

import pkg from '../package.json';
import init from './commands';

export default async function cli(args: any) {
  init(args, program);

  program.version(pkg.version);
  program.parse(args);
}
