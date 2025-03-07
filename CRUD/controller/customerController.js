const data = [
    {id: 1, name: 'John', age: 25, proffesion: 'Developer', email:"john@gmail.com", phone:"1234567890"},
    {id: 2, name: 'Jane', age: 22, proffesion: 'Designer', email:"jane@gmail.com", phone:"1234567890"},
    {id: 3, name: 'Jim', age: 23, proffesion: 'Manager', email:"jim@gmail.com", phone:"1234567890"},
    {id: 4, name: 'Jack', age: 24, proffesion: 'Tester', email:"jack@gmail.com", phone:"1234567890"},
    {id: 5, name: 'Jill', age: 26, proffesion: 'Developer', email:"jille@gmail.com", phone:"1234567890"},
    {id: 6, name: 'Joe', age: 27, proffesion: 'Designer', email:"joe@gmail.com", phone:"1234567890"},
    {id: 7, name: 'Jenny', age: 28, proffesion: 'Manager', email:"jenny@gmail.com", phone:"1234567890"},
    {id: 8, name: 'Jerry', age: 29, proffesion: 'Tester', email:"jerr@gmail.com", phone:"1234567890"},
    {id: 9, name: 'Jane', age: 22, proffesion: 'Designer', email:"jane@gmail.com", phone:"1234567890"},
    {id: 10, name: 'Jim', age: 23, proffesion: 'Manager', email:"jim@gmail.com", phone:"1234567890"},
    {id: 11, name: 'Jill', age: 31, proffesion: 'Designer', email:"jill@gmail.com", phone:"1234567890"},
]

export const fetch = async (req, res) => {
    res.status(200).json(data);
};

export const fetchOne = ('/:id', (req, res) => {
    const id = req.params.id;
    const user = data.find(user => user.id == id);
    res.status(200).json(user);
});

export const create = ('/', (req, res) => {
    const newUser = req.body;
    data.push(newUser);
    res.status(200).json(data);
});

export const update = ('/:id', (req, res) => {
    const id = req.params.id;
    const userIndex = data.findIndex(user => user.id == id);
    data[userIndex] = req.body;
    res.status(200).json(data);
});

export const remove = ('/:id', (req, res) => {
    const id = req.params.id;
    const userIndex = data.findIndex(user => user.id == id);
    data.splice(userIndex, 1);
    res.status(200).json(data);
});
