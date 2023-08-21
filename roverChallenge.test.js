const { rover } = require('./roverChallenge')

inBoundtests = [
    {
        description:"First Rover (given)",
        limits: "5 5",
        roverStart: "1 2 N",
        roverMovements: 'LMLMLMLMM',
        roverEnd:"1 3 N"
    },
    {
        description:"Second Rover (given)",
        limits: "5 5",
        roverStart: "3 3 E",
        roverMovements: 'MMRMMRMRRM',
        roverEnd:"5 1 E"
    },
    {
        description:"Third Rover (test boundaries)",
        limits: "10 10",
        roverStart: "0 0 E",
        roverMovements: 'MMMMMMMMMM',
        roverEnd:"10 0 E"
    },
    {
        description:"Fourth Rover (test boundaries)",
        limits: "10 10",
        roverStart: "0 0 N",
        roverMovements: 'MMMMMMMMMM',
        roverEnd:"0 10 N"
    },
    {
        description:"Fifth Rover (test negative numbers)",
        limits: "-5 -5",
        roverStart: "1 2 N",
        roverMovements: 'LMLMLMLMM',
        roverEnd:"1 3 N"
    },

]
outOfBoundsTests = [
    {
        description:"Sixth Rover",
        limits: "5 5",
        roverStart: "1 2 N",
        roverMovements: 'RRMMMMM'
    },
    {
        description:"Seventh Rover",
        limits: "5 5",
        roverStart: "1 2 N",
        roverMovements: 'MMMMMN'
    },
    {
        description:"Eigth Rover",
        limits: "5 5",
        roverStart: "0 0 E",
        roverMovements: 'RRMMMMM'
    },
    {
        description:"Ninth Rover",
        limits: "5 5",
        roverStart: "5 5 W",
        roverMovements: 'LLMMMMM'
    },
    {
        description:"Tenth Rover (starts outside boundary)",
        limits: "5 5",
        roverStart: "10 10 W",
        roverMovements: 'LLMMMMM'
    },


]
invalidInputTests = [
    {
        description:"Eleventh Rover",
        limits: "5 5",
        roverStart: "1 2 N",
        roverMovements: 'RRM123MMMM'
    },
    {
        description:"Tweltfth Rover",
        limits: "5 5",
        roverStart: "1 2 N",
        roverMovements: 'RRAMMCMMM'
    },
    {
        description:"Thirteenth Rover",
        limits: "0 0",
        roverStart: "1 2 N",
        roverMovements: 'RRMMMMM'
    },
    {
        description:"Fourteenth Rover",
        limits: "",
        roverStart: "1 2 N",
        roverMovements: 'RRMMMMM'
    },
    {
        description:"Fifteenth Rover",
        limits: "X 9",
        roverStart: "1 2 N",
        roverMovements: 'RRMMMMM'
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
    describe("invalid input tests", ()=>{
        invalidInputTests.forEach(({description , limits , roverStart , roverMovements})=>{
            test(description, ()=>{
                expect(()=>rover(limits, startPosition = roverStart, movements = roverMovements).toThrow(Error))
            })
        })
    })
} )


