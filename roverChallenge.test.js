const { rover } = require('./roverChallenge')
tests = [
    {
        description:"First Rover",
        limits:[5,5],
        roverStart:[1,2,"N"],
        roverMovements: 'LMLMLMLMM',
        roverEnd:[1,3,"N"]
    },
    {
        description:"Second Rover",
        limits:[5,5],
        roverStart:[3,3,"E"],
        roverMovements: 'MMRMMRMRRM',
        roverEnd:[5,1,"E"]
    },

]
describe("testCases", ()=>{
    tests.forEach(({ description , limits , roverStart , roverMovements , roverEnd })=>{
        test(description, ()=>{
            const result = rover(limits, startPosition = roverStart, movements = roverMovements)
            expect(result).toStrictEqual(roverEnd)
        })
    })
} )


