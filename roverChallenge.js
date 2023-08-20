const rover = (limits, startPosition, movements) => {
    console.log(`${limits}, ${startPosition}, ${movements}`)
    limits = limits.split(',')
    limits[0] = Number(limits[0])
    limits[1]= Number(limits[1])
    startPosition = startPosition.split(',')
    startPosition[0] = Number(startPosition[0])
    startPosition[1] = Number(startPosition[1])
    currentPostion = [...startPosition]
    move = movements.split("")

    console.log("The rover is starting here:", currentPostion)

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
        return (xCoOrd <=limits[0]) && (yCoOrd <=limits[0])
    }
    class OutOfBoundsError extends Error{
        constructor(message) {
            super(message);
            this.name = "OutOfBoundsError";
            this.message = message + ".This move is out bounds"
        }
    }
    const moveRover = () => {
        if (currentPostion[2] == "N") {
            validPostion(currentPostion[0], currentPostion[1] +1 ) ? currentPostion[1] +=1 :  new OutOfBoundsError(`The rover attempted to move North to ${currentPostion[0]}, ${currentPostion[1]+1}`)
        }
        if (currentPostion[2] == "S") {
            validPostion(currentPostion[0], currentPostion[1] -1 ) ? currentPostion[1] -=1 :  new OutOfBoundsError(`The rover attempted to move South to ${currentPostion[0]}, ${currentPostion[1]+1}`)

        }
        if (currentPostion[2] == "E") {
            validPostion(currentPostion[0] +1, currentPostion[1]) ? currentPostion[0] +=1 :  new OutOfBoundsError(`The rover attempted to move East to ${currentPostion[0]+1}, ${currentPostion[1]}`)

        }
        if (currentPostion[2] == "W") {
            validPostion(currentPostion[0] -1, currentPostion[1]) ? currentPostion[0] -=1 :  new OutOfBoundsError(`The rover attempted to move West to ${currentPostion[0]-1}, ${currentPostion[1]}`)
        }
    }
    
    move.forEach(letter => {
        if (letter !== "M") {
            faceDirection(letter)
        } else moveRover()
        console.log("Now we are at", currentPostion)
    });
    return currentPostion.toString()

}
exports.rover = rover;

/* To think about
Test:
rover doesn't end outside the limits
rover doesn't go out of limits during the movements
Test for valid start position and valid end position - numerical values
take the movement string and traverse - different toBe values - toBe < or not more than limit CoOrds

Qs

Strictly string input i.e array input for coord -> can chance

Test


*/
