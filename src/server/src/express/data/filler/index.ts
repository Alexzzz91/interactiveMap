import { Filler } from "./Filler";
import { connectDb } from "../mongo";

connectDb().then(async () => {
    try {
        await new Filler().fillDB();
    } catch (e) {
        console.log('e', e);
        console.error('Не отработал филлер');
    }

    console.log('филлер отработал');
    return process.exit();
});