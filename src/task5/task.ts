export class NotificationService {
  private emailSender = new EmailSender()
  private smsSender = new SMSSender()

  sendNotification(user: User, message: string, type: 'email' | 'sms'): void {
    if (type === 'email') {
      this.emailSender.send(user.email, message)
    } else if (type === 'sms') {
      this.smsSender.send(user.phone, message)
    }
  }
}

export class EmailSender {
  send(email: string, message: string): void {
    console.log(`Отправка email на ${email}: ${message}`)
  }
}

export class SMSSender {
  send(phone: string, message: string): void {
    console.log(`Отправка SMS на ${phone}: ${message}`)
  }
}

export class User {
  constructor(
    public id: string,
    public email: string,
    public phone: string,
  ) {}
}
