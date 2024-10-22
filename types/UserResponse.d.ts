export interface UserData {
  id: string;
  broadcasterType: string | null;
  creationDate: string;
  description: string | null;
  displayName: string;
  profilePictureUrl: string;
}

export interface UserResponse {
  success: boolean;
  message?: string;
  data?: UserData; // data peut être undefined
}
