export interface PluginCommon {
  name: string;
  actions: string[];
  next: () => unknown;
}
