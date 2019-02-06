export interface IStemnConfig {
  STEMN_API_HOST: string;
  STEMN_API_PROTOCOL: string;
  STEMN_API_PORT: string;
  STEMN_API_TOKEN: string;
}

export const {
  STEMN_API_HOST,
  STEMN_API_PROTOCOL,
  STEMN_API_PORT,
  STEMN_API_TOKEN,
}: IStemnConfig = <any> process.env;
