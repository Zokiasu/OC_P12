/**
* @param {string} userId id user
* @param {array} sessions sessions data 
**/
class ActivityModel {
    constructor(id, session) {
        this.userId = id
        this.sessions = session.map((el, index) => ({
            day: index + 1, //format days to be like current month days
            kilogram: el.kilogram,
            calories: el.calories
        }))
    }
}
export default ActivityModel