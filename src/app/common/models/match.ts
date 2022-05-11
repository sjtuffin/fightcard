import {Fighter} from "./fighter";

export interface Match {
    time: string, // 24 hour, ie 20:07
    image: string,
    fighters: [Fighter, Fighter] // tuple type
}
