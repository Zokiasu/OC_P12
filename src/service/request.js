import Activity from './ActivityModel'
import AverageSession from './AverageSessionModel'
import Performance from './PerformanceModel'
import User from './UserModel'


/**
 * 
 * @param {String} instanceRequested
 * @param {String} fetchedData
 * @returns Object
 */
const apiCall = async (instanceRequested, fetchedData) => {
    const getData = await fetch(fetchedData)
    // convert data to json format
    const res = await getData.json()

    if(res === "can not get user") window.location.replace('/');
		
    switch (instanceRequested) {
			case "user":
				// Instance of User class
				return new User(   
						res.data.id, 
						res.data.keyData, 
						res.data.todayScore || res.data.score, 
						res.data.userInfos
				)
			case "activity":
				// Instance of Activity class
				return new Activity(
						res.data.userId,
						res.data.sessions
				)
			case "average-sessions":
				// Instance of AverageSession class
				return new AverageSession(
						res.data.userId,
						res.data.sessions
				)
			case "performance":
				// Instance of Performance class
				return new Performance(
						res.data.userId,
						res.data.kind,
						res.data.data
				)
			default:
				// No endpoint for this get request
				console.log("No data loaded !");
				break;
    }
}
export default apiCall