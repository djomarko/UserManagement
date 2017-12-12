/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

/* json import module */
declare module "*.json" {
  const value: any;
  export default value;
}