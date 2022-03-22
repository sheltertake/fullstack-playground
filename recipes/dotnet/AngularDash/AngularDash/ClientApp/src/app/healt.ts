export interface IData {

  succeed: boolean;
  version: {
    application: string;
    version: string;
    time?: string;
    uri?: string;
  }
  meta: {};
  extraChecks: string[];
}
