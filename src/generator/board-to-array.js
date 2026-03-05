import { ootBingoGenerator } from "./generator";
import { bingoList } from "./goallist";

export function generateBoard(seed, mode) {
    var bingoFunc = ootBingoGenerator;

    const bingoOpts = {
        seed: seed.toString(),
        mode: mode,
        lang: "name",
    };

    console.log(bingoList)

    const board = (bingoFunc(bingoList, bingoOpts))
        .map(goal => goal.name);
    board.shift();
    return board;
}