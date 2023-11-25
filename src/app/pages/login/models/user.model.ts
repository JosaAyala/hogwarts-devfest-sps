export interface IUserModel {
  id: number;
  username: string;
  password: string;
  name: string;
  permissions?: IPermission[];
}

export interface IPermission {
  menuOption: string;
  access: string[];
}
