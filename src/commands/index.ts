import { Command } from 'commander';
import generateDomainEntity from './generateDomainEntity';
import generateModule from './generateModule';

export default function init(args: string[], program: Command): void {
  generateModule(args, program);
  generateDomainEntity(args, program);
}
