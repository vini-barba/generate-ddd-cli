import { existsSync, readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { prompt } from 'inquirer';
import ConfigInterface, { ConfigId } from './config.interface';
import Config from './config';

export default class ConfigManager {
  private configFilePath: string;

  private configFile: Config = null;

  constructor() {
    this.configFilePath = resolve('./.gdcrc');
  }

  get file(): Config {
    return this.configFile;
  }

  async init() {
    await this.readFile();
  }

  public get exists(): boolean {
    return existsSync(this.configFilePath);
  }

  private async readFile(): Promise<void> {
    if (this.exists) {
      this.configFile = new Config(
        JSON.parse(readFileSync(this.configFilePath, 'utf8')),
      );
    } else {
      await this.askForCreateFile();
    }
  }

  private async askForCreateFile(): Promise<void> {
    const answer = await prompt({
      type: 'confirm',
      name: 'create',
      message:
        'No .gdcrc file was found on your project, do you want to create it?',
      default: true,
    });
    if (answer.create === true) {
      await this.askOptions();
    } else {
      this.configFile = new Config();
    }
  }

  private async askOptions() {
    const answers = await prompt([
      {
        type: 'input',
        name: 'rootDir',
        message: 'What is the root directory of your project?',
        default: 'src',
      },
      {
        type: 'confirm',
        name: 'createTests',
        message: 'Do you want to generate test files?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'modules',
        message: 'Do you want to generate modules?',
        default: false,
      },
      {
        type: 'input',
        name: 'modules.path',
        message: 'What is the path of your modules?',
        default: (a: any) => `${a.rootDir || 'src'}/modules`,
        when: (a) => a.modules === true,
      },
      {
        type: 'list',
        name: 'id',
        message: 'What is the id of your entities?',
        choices: [
          {
            name: 'Uuid',
            value: ConfigId.UUID,
          },
          {
            name: 'ObjectId (mongoose)',
            value: ConfigId.OBJECT_ID,
          },
          {
            name: '<None> (choosing this option, you will need to add the id manually)',
            value: ConfigId.NONE,
          },
        ],
        default: 'uuid',
      },
    ]);

    return this.createFile(answers);
  }

  private createFile(props: ConfigInterface): void {
    this.configFile = new Config(props);
    writeFileSync(
      this.configFilePath,
      JSON.stringify(this.configFile, null, 2),
      'utf8',
    );
  }
}
