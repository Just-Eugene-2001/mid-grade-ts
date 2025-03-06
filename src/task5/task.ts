import { INotificationSender, IUser, NotificationType, TSenders } from '@/task5/types'

export class NotificationService {
  private senders: TSenders

  constructor(senders: TSenders) {
    this.senders = senders
  }

  sendNotification(user: IUser, message: string, type: NotificationType): void {
    const sender = this.senders[type]
    if (!sender) {
      console.error('Неизвестный тип уведомления: ', type)
      return
    }

    const receiver = getReceiver(user, type)
    sender.send(receiver, message)
  }
}

export class EmailSender implements INotificationSender {
  send(email: string, message: string): void {
    console.log(`Отправка email на ${email}: ${message}`)
  }
}

export class SMSSender implements INotificationSender {
  send(phone: string, message: string): void {
    console.log(`Отправка SMS на ${phone}: ${message}`)
  }
}

export class PUSHSender implements INotificationSender {
  send(deviceId: string, message: string): void {
    console.log(`Отправка PUSH-уведомления на ${deviceId}: ${message}`)
  }
}

export class User implements IUser {
  constructor(
    public id: string,
    public email: string,
    public phone: string,
    public deviceId: string,
  ) {}
}

const getReceiver = (user: IUser, type: NotificationType): string => {
  switch (type) {
  case NotificationType.EMAIL:
    return user.email
  case NotificationType.SMS:
    return user.phone
  case NotificationType.PUSH:
    return user.deviceId
  default:
    throw new Error(`Неизвестный тип уведомления: ${type}`)
  }
}

export const task5 = () => {
  const emailSender = new EmailSender()
  const smsSender = new SMSSender()
  const pushSender = new PUSHSender()

  const notificationService = new NotificationService({
    email: emailSender,
    sms: smsSender,
    push: pushSender
  })

  const user = new User('1', 'kivill@yandex.com', '+79031234567', 'iphone-12345')

  notificationService.sendNotification(user, 'Тест email', NotificationType.EMAIL)
  notificationService.sendNotification(user, 'Тест sms', NotificationType.SMS)
  notificationService.sendNotification(user, 'Тест push', NotificationType.PUSH)
}
