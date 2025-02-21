// console.log("Hello, Project 00!");
//commit 2
const art = require('ascii-art');//подключаем модуль через require
art.font('Hello, NodeJS!', 'Doom', (err, renderredText) => {
    if (err) {
        return;
    }
    console.log(renderredText);
})