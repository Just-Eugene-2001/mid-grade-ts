export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    private password: string,
  ) {}

  // Методы для работы с данными пользователя
  updateProfile(name: string, email: string): void {
    this.name = name
    this.email = email
    this.sendUpdateProfileEmail()
  }

  // Методы для аутентификации
  checkPassword(inputPassword: string): boolean {
    return this.password === inputPassword
  }

  resetPassword(newPassword: string): void {
    this.password = newPassword
    this.sendPasswordResetEmail()
  }

  // Методы для отправки email
  sendUpdateProfileEmail(): void {
    console.log(`Email отправлен на ${this.email}: Профиль обновлен`)
  }

  sendPasswordResetEmail(): void {
    console.log(`Email отправлен на ${this.email}: Пароль сброшен`)
  }

  // Метод для генерации отчётов
  generateUserActivityReport(): string {
    return `Отчёт об активности пользователя ${this.name}`
  }
}

export class UserData {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    private password: string,
  ) {}

  updateProfile(name: string, email: string, emailService: EmailService): void {
    this.name = name
    this.email = email
    emailService.sendUpdateProfileEmail(this)
  }

  getPassword(): string {
    return this.password
  }

  setPassword(newPassword: string): void {
    this.password = newPassword
  }
}

export class AuthService {
  checkPassword(inputPassword: string, user: UserData): boolean {
    return user.getPassword() === inputPassword
  }

  resetPassword(newPassword: string, user: UserData, emailService: EmailService): void {
    user.setPassword(newPassword)
    emailService.sendPasswordResetEmail(user)
  }
}

export class EmailService {
  sendUpdateProfileEmail(user: UserData): void {
    console.log(`Email отправлен на ${user.email}: Профиль обновлен`)
  }

  sendPasswordResetEmail(user: UserData): void {
    console.log(`Email отправлен на ${user.email}: Пароль сброшен`)
  }
}

export class ReportService {
  generateUserActivityReport(user: UserData): string {
    return `Отчёт об активности пользователя ${user.name}`
  }
}
