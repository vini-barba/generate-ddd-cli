export type ConfigModules = {
  path: string;
};

export enum ConfigId {
  UUID = 'uuid',
  OBJECT_ID = 'objectId',
  NONE = 'none',
}

export default interface ConfigInterface {
  rootDir: string;
  createTests: boolean;
  modules: false | ConfigModules;
  id: ConfigId;
}
