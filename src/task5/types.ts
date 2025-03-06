export interface INotificationSender {
  send(receiver: string, message: string): void
}

export type TSenders = Record<NotificationType, INotificationSender>

export interface IUser {
  id: string,
  email: string,
  phone: string,
  deviceId: string
}

export enum NotificationType {
  EMAIL = 'email',
  SMS = 'sms',
  PUSH = 'push',
}
