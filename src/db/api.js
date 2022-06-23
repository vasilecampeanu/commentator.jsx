import db from './firebase.config';
import {
    collection,
    collectionGroup,
    getDocs, 
    addDoc,
    query, setDoc
} from 'firebase/firestore';

// -------- DB Testing --------

// Reference collection ornary
// const collectionReference = collection(db, 'comments');

// // Fetching data
// getDocs(collectionReference).then((snapshot) => {
//     // console.log(snapshot.docs);
//     const comments = [];

//     snapshot.docs.forEach((doc) => {
//         comments.push({ ...doc.data(), id: doc.id });
//     });
    
//     console.log(comments);
// }).catch(err => {
//     console.log(err.message)
// });

// Reference collection group
const collectionGroupReference = collectionGroup(db, 'comments');

// https://stackoverflow.com/questions/46515764/how-can-i-use-async-await-at-the-top-level
(async () => {
    const comments = query(collectionGroup(db, 'comments'));
    const querySnapshot = await getDocs(comments);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
})();

// -------- DB Testing --------

export const getComments = async () => {
    return [
        {
            id: "1",
            body: "First comment",
            username: "Jack",
            userId: "1",
            parentId: null,
            createdAt: "2021-08-16T23:00:33.010+02:00",
        },
        {
            id: "2",
            body: "Second comment",
            username: "John",
            userId: "2",
            parentId: null,
            createdAt: "2021-08-16T23:00:33.010+02:00",
        },
        {
            id: "3",
            body: "First comment first child",
            username: "John",
            userId: "2",
            parentId: "1",
            createdAt: "2021-08-16T23:00:33.010+02:00",
        },
        {
            id: "4",
            body: "Second comment second child",
            username: "John",
            userId: "2",
            parentId: "2",
            createdAt: "2021-08-16T23:00:33.010+02:00",
        },
    ];
};

// Adding data
// const addBookForm = document.querySelector('.add')
// addBookForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     addDoc(collectionReference, {
//         body: "This is just a regullar tess!",
//         author: "Tester",
//     })
//     .then(() => {
//         addBookForm.reset()
//     })
// })

export const createComment = async (text, parentId = null) => {
    console.log("Commend added");

    // addDoc(collectionReference, {
    //     author: "Johnny Test",
    //     body: text
    // })

    const subColRef = collection(db, "posts", "gtnxkrz3fuUoOnynDkrF", "comments");

    addDoc(subColRef, {
        author: "Johnny Test",
        body: text
    })

    // console.log(Math.random().toString(36).substr(2, 9));

    return {
        id: Math.random().toString(36).substr(2, 9),
        body: text,
        parentId,
        userId: "1",
        username: "John",
        createdAt: new Date().toISOString(),
    };
};

export const updateComment = async (text) => {
    return { text };
};

export const deleteComment = async () => {
    return {};
};
