const rover = (limits, startPosition, movements) => {
    const faceDirection = (rotation) => {
        //could divide into left and right to reduce repitition
        console.log("this is rotation:", rotation, currentPostion[2])
 
        if (currentPostion[2] == "N" && rotation == 'R') {
            currentPostion[2] = "E"
            console.log("Now current face is ", currentPostion[2])
            return;
        }
        if (currentPostion[2] == "N" && rotation == 'L') {
            currentPostion[2] = "W"
            console.log("Now current face is ", currentPostion[2])
            return
        }
        if (currentPostion[2] == "E" && rotation == 'R') {
            currentPostion[2] = "S"
            console.log("Now current face is ", currentPostion[2])
            return
        }
        if (currentPostion[2] == "E" && rotation == 'L') {
            currentPostion[2] = "N"
            console.log("Now current face is ", currentPostion[2])
            return;
        }
        if (currentPostion[2] == "W" && rotation == 'R') {
            currentPostion[2] = "N"
            console.log("Now current face is ", currentPostion[2])
        }
        if (currentPostion[2] == "W" && rotation == 'L') {
            currentPostion[2] = "S"
            console.log("Now current face is ", currentPostion[2])
            return;
        }
        if (currentPostion[2] == "S" && rotation == 'R') {
            currentPostion[2] = "W"
            console.log("Now current face is ", currentPostion[2])
            return;
        }
        if (currentPostion[2] == "S" && rotation == 'L') {
            currentPostion[2] = "E"
            console.log("Now current face is ", currentPostion[2])
            return;
        }
    }
    const validPostion = (xCoOrd, yCoOrd) => {
        return (xCoOrd <=limits[0]) && (yCoOrd <=limits[0]) && (xCoOrd>=0) && (yCoOrd >=0)
    }
    const cleanUpLimits = (limits) =>{
        try {
            limits = limits.split(' ')
            limits[0] = Math.abs(Number(limits[0]))
            limits[1]= Math.abs(Number(limits[1]))
            if ((limits[0]|| limits[1]) == null || (limits[0]|| limits[1]) == undefined || limits[0]&& limits[1]==0) throw new InvalidLimitsError(limits)
            return limits
        }
        catch(error) {
            console.error()
            throw new InvalidLimitsError(limits)
        }
    }
    const cleanUpStartPosition = (startPosition) =>{
        startPosition = startPosition.split(' ')
        startPosition[0] = Number(startPosition[0])
        startPosition[1] = Number(startPosition[1])
        return [...startPosition]
    }
    const cleanUpMovements = (movements)=>{
        try{
            const found = movements.toUpperCase().match(/[^LRM]/g)
            if (found != null){
            throw new InvalidMovementsError("Invalid characters in movement string")
            }
            return movements.toUpperCase().split("")
        }
        catch(error){
            console.error()
            throw new InvalidMovementsError("Problem with movements string")
        }
    }
    const moveRover = () => {
        if (currentPostion[2] == "N") {
            validPostion(currentPostion[0], currentPostion[1] +1 ) ? currentPostion[1] +=1 : newError("North",currentPostion[0], (currentPostion[1]+1))
        }
        if (currentPostion[2] == "S") {
            validPostion(currentPostion[0], currentPostion[1] -1 ) ? currentPostion[1] -=1 :  newError("South",currentPostion[0], (currentPostion[1]-1))
        }
        if (currentPostion[2] == "E") {
            validPostion(currentPostion[0] +1, currentPostion[1]) ? currentPostion[0] +=1 : newError("East",currentPostion[0]+1, currentPostion[1])
        }
        if (currentPostion[2] == "W") {
            console.log(validPostion(currentPostion[0] -1, currentPostion[1]))
            validPostion(currentPostion[0] -1, currentPostion[1]) ? currentPostion[0] -=1 : newError("West",currentPostion[0]-1, currentPostion[1])
        }
    }
    class OutOfBoundsError extends Error {
        constructor(message) {
            super(message);
            this.name = "OutOfBoundsError";
            this.message = message + ".This move is out bounds"
        }
    }
    const newError = (direction,xCoOrd, yCoOrd) =>{
        throw new OutOfBoundsError(`The rover attempted to move ${direction} to ${xCoOrd}, ${yCoOrd}`)
    }
    class InvalidLimitsError extends Error{
        constructor(message) {
            super(message);
            this.name = "InvalidLimitsError";
            this.message = message + ".The limits/grid of the rover are invalid. Please ammend and try again."
        }
    }
    class InvalidMovementsError extends Error {
        constructor(message) {
            super(message);
            this.name = "InvalidMovementsError";
            this.message = message + ".Error with movement string. Please ammend and try again."
        }
    }
    class IsEmptyError extends Error{
        constructor(message) {
            super(message);
            this.name = "IsEmptyError";
            this.message = message + "is empty!"
        }
    }
    limits = cleanUpLimits(limits)
    currentPostion = cleanUpStartPosition(startPosition)
    move = cleanUpMovements(movements)
    console.log("The rover is starting here:", currentPostion)
    move.forEach(letter => {
        if (letter !== "M") {
            faceDirection(letter)
        } else moveRover()
        console.log("Now we are at", currentPostion)
    });
    console.log("The rover is ending at position:" ,currentPostion)
    return currentPostion.toString().replaceAll(',', ' ')
}
exports.rover = rover;

/* To think about
Test:
rover doesn't end outside the limits



*/
