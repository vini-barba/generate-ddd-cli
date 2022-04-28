import { Command } from 'commander';
import generateModule from './generateModule';

export default function init(args: string[], program: Command): void {
  generateModule(args, program);
}
