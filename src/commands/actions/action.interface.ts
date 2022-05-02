import Config from '../../utils/config/config';
import Name from '../../utils/name';

export default interface ActionInterface {
  templateFileLocation: string;
  fileName: string;
  path: string;
  basePath: string;
  writeFile(): void;
  name: Name;
  config: Config;
}
