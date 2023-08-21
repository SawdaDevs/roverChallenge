const { rover, OutOfBoundsError } = require('./roverChallenge')

inBoundtests = [
    {
        description:"First Rover",
        limits: "5,5",
        roverStart: "1,2,N",
        roverMovements: 'LMLMLMLMM',
        roverEnd:"1,3,N"
    },
    {
        description:"Second Rover",
        limits: "5,5",
        roverStart: "3,3,E",
        roverMovements: 'MMRMMRMRRM',
        roverEnd:"5,1,E"
    },
    {
        description:"Third Rover",
        limits: "10,10",
        roverStart: "0,0,E",
        roverMovements: 'MMMMMMMMMM',
        roverEnd:"10,0,E"
    },
    {
        description:"Fourth Rover",
        limits: "10,10",
        roverStart: "0,0,N",
        roverMovements: 'MMMMMMMMMM',
        roverEnd:"0,10,N"
    },

]
outOfBoundsTests = [
    {
        description:"Fifth Rover",
        limits: "5,5",
        roverStart: "1,2,N",
        roverMovements: 'RRMMMMM'
    },
    {
        description:"Sixth Rover",
        limits: "5,5",
        roverStart: "1,2,N",
        roverMovements: 'MMMMMN'
    },
    {
        description:"Seventh Rover",
        limits: "5,5",
        roverStart: "0,0,E",
        roverMovements: 'RRMMMMM'
    },
    {
        description:"Eigth Rover",
        limits: "5,5",
        roverStart: "5,5,W",
        roverMovements: 'LLMMMMM'
    },


]
describe("testCases", ()=>{
    describe("in bounds tests:", ()=>{
        inBoundtests.forEach(({ description , limits , roverStart , roverMovements , roverEnd })=>{
            test(description, ()=>{
                const result = rover(limits, startPosition = roverStart, movements = roverMovements)
                expect(result).toStrictEqual(roverEnd)
            })
        })
    })
    describe("out of bounds tests", ()=>{
        outOfBoundsTests.forEach(({description , limits , roverStart , roverMovements }) => {
            test(description, ()=>{
                expect(()=>rover(limits, startPosition = roverStart, movements = roverMovements)).toThrow(rover.OutOfBoundsError)
            })

        })
    })



    // expect().toThrow(Error)
} )


