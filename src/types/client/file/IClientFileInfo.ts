import { IClientFile } from './IClientFile';

export interface IClientFileInfo extends IClientFile {
  readonly comments: [];
  readonly response_metadata: {
    next_cursor: string;
  };
}
