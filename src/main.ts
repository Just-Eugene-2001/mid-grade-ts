import { UserData, AuthService, EmailService, ReportService } from './task1/task'
// import { task6 } from './task6/task'

function main(): void {
  const user = new UserData('1', 'Евгений', 'kivill@yandex.ru', '112233')
  const authService = new AuthService()
  const emailService = new EmailService()
  const reportService = new ReportService()

  console.log('user', user)
  user.updateProfile('Женя', 'kivill@mail.com', emailService)
  console.log('checkPassword', authService.checkPassword('112244', user))
  authService.resetPassword('556677', user, emailService)
  console.log('checkPassword', authService.checkPassword('556677', user))
  reportService.generateUserActivityReport(user)
  console.log('user', user)

  // task6()
}

main()
