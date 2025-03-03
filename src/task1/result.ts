import { IAuthService, IEmailService, IReportService, IUserData, IUserService } from '@/task1/types'

export class UserData implements IUserData {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    private password: string,
  ) {}

  updateProfile(name: string, email: string): void {
    this.name = name
    this.email = email
  }

  getPassword(): string {
    return this.password
  }

  setPassword(newPassword: string): void {
    this.password = newPassword
  }
}

export class AuthService implements IAuthService{
  checkPassword(inputPassword: string, user: IUserData): boolean {
    return user.getPassword() === inputPassword
  }

  resetPassword(newPassword: string, user: IUserData): void {
    user.setPassword(newPassword)
  }
}

export class EmailService implements IEmailService {
  sendUpdateProfileEmail(user: IUserData): void {
    console.log(`Email отправлен на ${user.email}: Профиль обновлен`)
  }

  sendPasswordResetEmail(user: IUserData): void {
    console.log(`Email отправлен на ${user.email}: Пароль сброшен`)
  }
}

export class ReportService implements IReportService {
  generateUserActivityReport(user: IUserData): string {
    return `Отчёт об активности пользователя ${user.name}`
  }
}

export class UserService implements IUserService {
  constructor(
    private emailService: IEmailService,
    private authService: IAuthService,
  ) {}

  updateUserProfile(user: IUserData, name: string, email: string): void {
    user.updateProfile(name, email)
    this.emailService.sendUpdateProfileEmail(user)
  }

  resetUserPassword(user: UserData, newPassword: string): void {
    this.authService.resetPassword(newPassword, user)
    this.emailService.sendPasswordResetEmail(user)
  }
}

export const task1 = () => {
  const user = new UserData('1', 'Евгений', 'kivill@yandex.ru', '112233')
  const authService = new AuthService()
  const emailService = new EmailService()
  const reportService = new ReportService()
  const userService = new UserService(emailService, authService)

  console.log('user', user)
  userService.updateUserProfile(user, 'Женя', 'kivill@mail.com')
  console.log('checkPassword', authService.checkPassword('112244', user))
  userService.resetUserPassword(user, '556677')
  console.log('checkPassword', authService.checkPassword('556677', user))
  reportService.generateUserActivityReport(user)
  console.log('user', user)
}
