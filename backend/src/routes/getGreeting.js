/*
const GREETING = 'Hello world!';

add const Greeting:
*/

const GREETINGS = [
    "Welcome!",
    "All hands on deck!",
    "Charting the course ahead!",
];


/*
module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
*/

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length )],
    });
};