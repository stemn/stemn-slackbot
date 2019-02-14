export interface IEventBody {
  token: string;
  team_id: string;
  api_app_id: string;
  type: string;
  event_id: string;
  event_time: number;
  authed_users: string[];
}
