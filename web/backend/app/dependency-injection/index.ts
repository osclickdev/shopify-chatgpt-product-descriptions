import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection';
import path from 'path';

const srcDir = path.join(__dirname);

const container = new ContainerBuilder(true, srcDir);
const loader = new YamlFileLoader(container);
loader.load(`${process.cwd()}/app/dependency-injection/services.yml`);

export default container;
