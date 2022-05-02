import { Command } from 'commander';
import Config from '../utils/config/config';

export default abstract class CommandAbstract {
  protected program: Command;

  protected command: Command;

  protected args: string[];

  protected configFile: Config;

  constructor(program: Command, args: string[], config: Config) {
    this.program = program;
    this.args = args;
    this.configFile = config;
    this.setCommand();
  }

  abstract setCommand(): void;
}
