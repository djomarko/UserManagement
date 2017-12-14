export interface UserData {
    ad_user: boolean;
    orderware: boolean;
    pagedna: boolean;

    uid: string;
    password?: string;
    cn: string;
    dn: string;
    name: string;
    company: string;
    defaultGroup: string;
    dsf: string;

    groups: string[];
    privileges: string[];

    // attributes
    attributes: {
        active: boolean;

        title: string;
        givenname: string;
        surname: string;
        email: string;
        telephone: string;
        facsimile: string;
        mobile: string;

        address: string;
        suburb: string;
        city: string;
        state: string;
        country: string;
        postal_code: string;

        cost_centre: string;

        ext_ref: string;
    };
    // business categories
    business_category: {
        jm_businesses: string,
        orderware: string,
        bi: string,
        prism_account: string
    };
}
