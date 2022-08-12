/**
* @param {string} userId id user
* @param {array} sessions sessions data 
**/
class AverageSessionModel {
    //format days to equal the days of the week
    days = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' }

    constructor(userId, sessions) {
        this.userId = userId
        this.sessions = sessions.map((el) => ({
            day: this.days[el.day],
            sessionLength: el.sessionLength
        }))
    }
}
export default AverageSessionModel