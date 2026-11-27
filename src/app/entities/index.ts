import { userAction, userReducer } from "./user/model/slice/userSlice";
import type { User, UserSchema } from "./user/model/types/UserSchema";

export { userReducer, userAction };
export type { User, UserSchema };
