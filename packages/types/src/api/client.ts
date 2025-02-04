export interface GetStatusResponse {
  message: string;
}

export type GetStatus = () => Promise<GetStatusResponse>;

export interface Client {
  getStatus: GetStatus;
}
