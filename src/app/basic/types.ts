export enum SpaceWreck
{
    NONE = "None",
    SHIP_SIZE = "(1-2) Ship size",
    ATTACK = "(3-4) Attack",
    DEFENCE = "(5-6) Defence",
    TACTICS = "(7) Tactics",
    MOVE = "(8-9) Move",
    SHIP_YARD = "(10) Ship Yard"
}
export type SpaceWreckKeys = keyof typeof SpaceWreck;


export enum ShipClass
{
    NONE,
    A,
    B,
    C,
    D,
    E
}
export type ShipClassKeys = keyof typeof ShipClass;

export type MovementTypes = Array<{turn1: number, turn2: number, turn3: number}>;

export const gMovementTypes: MovementTypes = [
    { turn1: 1, turn2: 1, turn3: 1},
    { turn1: 1, turn2: 1, turn3: 2},
    { turn1: 1, turn2: 2, turn3: 2},
    { turn1: 2, turn2: 2, turn3: 2},
    { turn1: 2, turn2: 2, turn3: 3},
    { turn1: 2, turn2: 3, turn3: 3},
    { turn1: 3, turn2: 3, turn3: 3}
];

export type FleetSize = 0 | 1 | 2 | 3 | 4 | 5 | 6;
