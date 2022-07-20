import { Auth } from "./auth.h";

const authHasRoleAdmin = (auth?: Auth): boolean => {
    if (!auth) {
        return false;
    }

    return auth.realm_access?.roles?.includes('admin')
}

export {
    authHasRoleAdmin,
}