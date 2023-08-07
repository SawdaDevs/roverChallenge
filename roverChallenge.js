const rover = (limits, startPosition, movements) => {

    let abc = {
        description: "First Rover",
        limits: [5, 5],
        roverStart: [1, 2, "N"],
        roverMovements: 'LMLMLMLMM',
        roverEnd: [1, 3, "N"]
    }
    currentPostion = [...startPosition]

    console.log("The rover is starting here:", currentPostion)

    const faceDirection = (rotation) => {
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
    const moveRover = () => {
        if (currentPostion[2] == "N") {
            currentPostion[1] += 1
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

    move = movements.split("")
    console.log(move)

    move.forEach(letter => {

        console.log("letter is:", letter)

        if (letter !== "M") {
            faceDirection(letter)
        }
        else moveRover()
        console.log("Now we are at", currentPostion)
    });
    return currentPostion

}
exports.rover = rover;

/* To think about

How to test the rover doesn't end outside the limits
How to test the rover doesn't go out of limits during the movements
Test for valid start position and valid end position?
take the movement string and traverse - different toBe values - toBe < or not more than limit CoOrds


How to represent rover, variable with coords
As one moves we edit the array of coordinates and facing
data structure for this?

functions to reflect face change, and position change?
spread-string and go through sequentially face, then depending on face manip x or y. 
Print after every step..? or every few?s
return final co-ords

*/
