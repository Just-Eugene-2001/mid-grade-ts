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
