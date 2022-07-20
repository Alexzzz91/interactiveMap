interface Auth {
    name: string;
    preferred_username: string;
    given_name: string;
    family_name: string;
    email: string;
    realm_access: {
      roles: string[];
    };
}

export type {
    Auth,
}