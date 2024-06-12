import { google } from 'googleapis'

class CalendarCredentials {
  constructor () {
    this.oAuth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.SECRET_ID,
      process.env.REDIRECT_URI
    )

    this.oAuth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN
    })
  }

  getClient () {
    return this.oAuth2Client
  }
}

// const oAuth2Client = new google.auth.OAuth2(
//   process.env.CLIENT_ID,
//   process.env.SECRET_ID,
//   process.env.REDIRECT_URI
// )

// oAuth2Client.setCredentials({
//   refresh_token: process.env.REFRESH_TOKEN
// })

const ClassCalendarCredentials = new CalendarCredentials()

export { ClassCalendarCredentials }
