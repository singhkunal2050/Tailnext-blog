// Type Definations for all our typescript definitions

export interface Post{
    _id: number;
    createdAt: string;
    title: string;
    author:{
        name: string;
        image:string,
    },
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