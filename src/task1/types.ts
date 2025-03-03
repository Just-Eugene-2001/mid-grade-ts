export interface IUserData {
  id: string
  name: string
  email: string
  updateProfile(name: string, email: string): void
  getPassword(): string
  setPassword(newPassword: string): void
}

export interface IEmailService {
  sendUpdateProfileEmail(user: IUserData): void
  sendPasswordResetEmail(user: IUserData): void
}

export interface IAuthService {
  checkPassword(inputPassword: string, user: IUserData): boolean
  resetPassword(newPassword: string, user: IUserData): void
}

export interface IReportService {
  generateUserActivityReport(user: IUserData): string
}

export interface IUserService {
  updateUserProfile(user: IUserData, name: string, email: string): void
  resetUserPassword(user: IUserData, newPassword: string): void
}
