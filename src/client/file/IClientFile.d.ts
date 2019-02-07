import { IClientShares } from './IClientShares';

export interface IClientFile extends ISlackResponse {
  readonly file: {
    readonly id: string;
    readonly created: number;
    readonly timestamp: number;
    readonly name: string;
    readonly title: string;
    readonly mimetype: string;
    readonly filetype: string;
    readonly pretty_type: string;
    readonly user: string;
    readonly editable: false;
    readonly size: number;
    readonly mode: string;
    readonly is_external: boolean;
    readonly external_type: string;
    readonly is_public: boolean;
    readonly public_url_shared: boolean;
    readonly display_as_bot: boolean;
    readonly username: string;
    readonly url_private: string;
    readonly url_private_download: string;
    readonly thumb_64: string;
    readonly thumb_80: string;
    readonly thumb_360: string;
    readonly thumb_360_w: number;
    readonly thumb_360_h: number;
    readonly thumb_160: string;
    readonly thumb_360_gif: string;
    readonly image_exif_rotation: number;
    readonly original_w: number;
    readonly original_h: number;
    readonly deanimate_gif: string;
    readonly pjpeg: string;
    readonly permalink: string;
    readonly permalink_public: string;
    readonly comments_count: number;
    readonly is_starred: boolean;
    readonly channels: string[];
    readonly groups: string[];
    readonly ims: string[];
    readonly has_rich_preview: boolean;
    readonly shares: {
      readonly public?: IClientShares;
      readonly private?: IClientShares;
    }
  };
}
