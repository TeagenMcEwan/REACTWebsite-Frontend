export const allProjects = [
    {
        id: 1,
        title: "Project One",
        description: "The first project.",
        goal: 150,
        image: "https://via.placeholder.com/300.jpg",
        is_open: false,
        date_created: "2020-03-20T14:22:23.382748Z",
        owner: 1,
    },

    {
        "id": 2,
        "title": "Project one",
        "description": "The first project.",
        "goal": 350,
        "image": "https://picsum.photos/id/237/200/300",
        "is_open": true,
        "date_created": "2020-08-24T14:28:23.382748Z",
        "owner": 1
    },


    {
        "id": 3,
        "title": "Project two",
        "description": "The second project.",
        "goal": 350,
        "image": "https://picsum.photos/id/237/200/300",
        "is_open": true,
        "date_created": "2020-08-24T14:28:23.382748Z",
        "owner": 1
    },

    {
        "id": 5,
        "title": "Project Five",
        "description": "The fifth project.",
        "goal": 400,
        "image": "https://picsum.photos/id/237/200/300",
        "is_open": true,
        "date_created": "2020-09-04T14:28:23.382748Z",
        "owner": 1
    },
]

export const oneProject = {
    id: 1,
    title: "Project One",
    description: "The first project.",
    goal: 150,
    image: "https://via.placeholder.com/300.jpg",
    is_open: false,
    date_created: "2020-03-20T14:22:23.382748Z",
    owner: 1,
    pledges: [
        {
        id: 1,
        amount: 100,
        comment: "A comment for the pledge",
        anonymous: false,
        supporter: 3,
        project_id: 1,
        },

        {
        id: 2,
        amount: 200,
        comment: "A comment for the pledge",
        anonymous: true,
        supporter: 3,
        project_id: 1,
        },

        {
        id: 3,
        amount: 300,
        comment: "A comment for the pledge",
        anonymous: false,
        supporter: 3,
        project_id: 1,
        },
    ],
};