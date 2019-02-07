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
