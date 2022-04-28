import { Command } from 'commander';
import generateDomainFactory from './generateDomainFactory';
import generateDomainEntity from './generateDomainEntity';
import generateModule from './generateModule';

export default function init(args: string[], program: Command): void {
  generateModule(args, program);
  generateDomainFactory(args, program);
  generateDomainEntity(args, program);
}
