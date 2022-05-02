import ConfigInterface, { ConfigId, ConfigModules } from './config.interface';

export default class Config implements ConfigInterface {
  rootDir: string = 'src';

  createTests: boolean = true;

  modules: false | ConfigModules = false;

  id: ConfigId = ConfigId.UUID;

  constructor(props?: ConfigInterface) {
    if (props) {
      this.rootDir = props.rootDir;
      this.createTests = props.createTests;
      this.modules = props.modules;
      this.id = props.id;
    }
  }
}
