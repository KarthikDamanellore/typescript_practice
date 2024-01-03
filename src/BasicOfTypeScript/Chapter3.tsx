import React from 'react'

const Chapter3 = () => {

    let stringArray = ['one', 'two', 'three']

    let guitars = ['start', 'less paul', 5150]

    let mixedData = ['EVH', 1984, true]

    stringArray[0] = 'jhon'
    stringArray.push('hey')

    guitars[0] = 1984
    guitars.unshift('jim')

    // stringArray = guitars

    // guitars =stringArray
    // guitars = mixedData

    let text = []

    let bands: string[] = []

    bands.push('Van Halen')

    // Tuple

    let myTuple: [string, number, boolean] = ['dave', 42, true]

    let mixed = ['jhon', 1, false]

    mixed = myTuple;

    // myTuple = mixed

    myTuple[1] = 42

    // objects

    let myObj: object;

    myObj = []
    console.log(typeof myObj)

    myObj = bands
    myObj = {}

    const exampleObj = {
        prop1: 'Dave',
        prop2: true,
    }

    exampleObj.prop1 = 'Jhon'

    type Guitarist = {
        name: string,
        active?: boolean,
        albums: (string | number)[]
    }

    let evh: Guitarist = {
        name: "Eddie",
        active: false,
        albums: [1984, 5150, 'OU812']
    }

    let jp: Guitarist = {
        name: "Jimmy",
        active: true,
        albums: ["1", "2", "3"]
    }

    // evh =jp

    // evh.years =40

    interface GuitaristOne {
        name?: string,
        active: boolean,
        albums: (string | number)[]
    }

    let jpOne: GuitaristOne = {
        name: 'jimmyOne',
        active: false,
        albums: ['1', '2', '3']
    }

    const greetGuitaristOne = (guitaristOne: GuitaristOne) => {
        return `Hello ${guitaristOne.name}`
    }

    console.log(greetGuitaristOne(jpOne))


    const greetGuitarist = (guitarist: Guitarist) => {

        if (guitarist.name) {
            return `Hello ${guitarist.name?.toUpperCase()}`
        }

        return 'hello!'
    }

    console.log(greetGuitarist(jp))

    // Enums

    enum Grade {
        U = 1,
        E,
        T,
        G,
        A,
    }

    console.log(Grade.U)

    return (
        <div>Chapter3</div>
    )
}

export default Chapter3