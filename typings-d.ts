// Type Definations for all our typescript definitions

export interface Post{
    _id: number;
    createdAt: string;
    title: string;
    author:{
        name: string;
        image:string,
    },
    comments:[Comment]
    description: string;
    mainImage:{
        asset:{
            url: string;
        }
    },
    slug:{
        current: string;
    },
    body: [object];        

}


export interface Comment {
    approved : boolean;
    comment: string;
    createdAt: string;
    email: string;
    name: string;
    post:{
        _ref:string;
        _type:string;
    };
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}