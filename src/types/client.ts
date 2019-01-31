interface ISlackResponse {
  readonly ok: boolean;
  readonly error?: string;
}

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
      readonly public?: IShares;
      readonly private?: IShares;
    }
  };
}

export interface IShares {
  readonly [key: string]: [{
    readonly reply_users: string[];
    readonly reply_users_count: number;
    readonly reply_count: number;
    readonly ts: string;
    readonly thread_ts?: string;
    readonly latest_reply?: string;
    readonly channel_name?: string;
    readonly team_id?: string;
  }];
}

export interface IClientFileInfo extends IClientFile {
  readonly comments: [];
  readonly response_metadata: {
    next_cursor: string;
  };
}

export interface IClientAddFileComment extends ISlackResponse {
  readonly comment?: {
    readonly id: string;
    readonly created: number;
    readonly timestamp: number;
    readonly user: string;
    readonly comment: string;
    readonly channel: string;
  };
}

export interface IClientChannelInfo extends ISlackResponse {
  readonly channels?: [{
    readonly id: string;
    readonly name: string;
    readonly is_channel: boolean;
    readonly created: number;
    readonly creator: string;
    readonly is_archived: boolean;
    readonly is_general: boolean;
    readonly name_normalized: string;
    readonly is_shared: boolean;
    readonly is_org_shared: boolean;
    readonly is_member: boolean;
    readonly is_private: boolean;
    readonly is_mpim: boolean;
    readonly members: string[];
    readonly topic: {
      readonly value: string;
      readonly creator: string;
      readonly last_set: number;
    };
    readonly purpose: {
      readonly value: string;
      readonly creator: string;
      readonly last_set: number;
    };
    readonly previous_names: string[];
    readonly num_members: number;
  }];
}

export interface IClientMessage extends ISlackResponse {
  readonly channel: string;
  readonly ts: string;
}

export interface IClientUpdateMessage extends IClientMessage {
  readonly text: string;
}

export interface IClientPostMessage extends IClientMessage {
  readonly channel: string;
  readonly ts: string;
  readonly message: {
      readonly text: string;
      readonly username: string;
      readonly bot_id: string;
      readonly attachments: [{
              readonly text: string;
              readonly id: number,
              readonly fallback: string;
      }];
      readonly type: string;
      readonly subtype: string;
      readonly ts: string;
  };
}
