export interface RestUser {
    ad_user: boolean;
    orderware: boolean;
    pagedna: boolean;

    cn: string;
    dn: string;
    uid: string;
    name: string;
    company: string;
    defaultGroup: string;
    dsf: string;

    groups: string[];
    privileges: string[];

    attributes: {
        property: Property[];
    };

    cost_centre: string;

    ext_ref: string;

    // business categories
    business_category: {
        property: Property[]
    };

}

interface Property {
    name: string;
    value: string;
}
