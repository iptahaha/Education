/* 3. Создайте функцию, которая получает два аргумента: первый - это массив объектов, второй - строка (имя автора).
Ваша функция должна возвращать количество сообщений с автором из аргумента функции и комментариев с тем же автором. */

function getPostsByAuthor(posts, name) {
    if (posts && name && typeof posts === 'object' && typeof name === 'string') {
        if (posts.length === 0) {
            return 'There is no any posts!';
        }
        let postsCount = 0;
        let commentsCount = 0;

        function count(posts, name) {
            for (let i = 0; i < posts.length; i++) {
                if (!posts[i].hasOwnProperty('comment') && posts[i].author === name) {
                    postsCount++;
                }
                if (posts[i].hasOwnProperty('comment') && posts[i].author === name) {
                    commentsCount++;
                }
                if (posts[i].comments) {
                    count(posts[i].comments, name);
                }
            }
        }
        count(posts, name);
        return [postsCount, commentsCount];
    } else {
        return 'Incorrect input data!';
    }
}

let listOfPosts = [
    {
        id: 1,
        post: 'some post1',
        title: 'title 1',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            }
        ]
    },
    {
        id: 2,
        post: 'some post2',
        title: 'title 2',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            },
            {
                id: 1.3,
                comment: 'some comment3',
                title: 'title 3',
                author: 'Rimus'
            }
        ]
    },
    {
        id: 3,
        post: 'some post3',
        title: 'title 3',
        author: 'Rimus'
    },
    {
        id: 4,
        post: 'some post4',
        title: 'title 4',
        author: 'Uncle'
    }
]

module.exports = {getPostsByAuthor, listOfPosts};