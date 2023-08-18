const rover = (limits, startPosition, movements) => {

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
    const validPostion = () => {
        return currentPostion[0] <=limits[0] && currentPostion[1] <=limits[0]
    }
    const moveRover = () => {
        //check if out of bounds with each movemenent before return?
        if (currentPostion[2] == "N") {
            currentPostion[1] += 1
            validPostion() ? console.log("valid") : console.log("wrong")
        }
        if (currentPostion[2] == "S") {
            currentPostion[1] -= 1
        }
        if (currentPostion[2] == "E") {
            currentPostion[0] += 1
        }
        if (currentPostion[2] == "W") {
            currentPostion[0] -= 1
        }
    }
    
    move.forEach(letter => {
        if (letter !== "M") {
            faceDirection(letter)
        } else moveRover()
        console.log("Now we are at", currentPostion)
    });
    return currentPostion

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
