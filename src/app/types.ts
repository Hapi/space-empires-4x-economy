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
