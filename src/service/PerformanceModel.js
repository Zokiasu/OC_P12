/**
* @param {string} userId id user
* @param {array} kind stats kind
* @param {array} data performance type
**/

class PerformanceModel {
    //translation of the kind of stats
    translation = {
        "cardio": "Cardio",
        "energy": "Energie",
        "endurance": "Endurance",
        "strength": "Force",
        "speed": "Vitesse",
        "intensity": "Intensité"
    };
    
    constructor(userId, kind, data) {
        this.id = userId
        this.kind = kind
        this.data = data.map((el) => ({
            value: el.value,
            kind: this.translation[this.kind[el.kind]]
        }))
    }
}
export default PerformanceModel