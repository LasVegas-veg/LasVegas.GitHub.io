const { Keyboard, VK, getRandomId, Context} = require('vk-io')
const { HearManager } = require('@vk-io/hear')

const vk = new VK({
    token: '3e97037c112114e48548b46065fa85798b67234a9ff31aa44ae924d0c64e9695251147269badb36089c9f'
})
const bot = new HearManager()

vk.updates.on('message_new', bot.middleware)

bot.hear(/Начать/i, msg => {
    let keyboard = Keyboard
    .keyboard([[
        Keyboard.textButton({
            label: 'Клик',
            color: 'negative'
        }),
        Keyboard.textButton({
            label: 'Баланс',
            color: 'positive'
        }),
    ],  [
        Keyboard.textButton({
            label: 'Топ',
            color: 'primary'
        }),
        Keyboard.textButton({
            label: 'Наша группа',
            color: 'secondary'
        })
    ]]);
        
    msg.send({ message: 'Ты попал в меню Las Vegas', keyboard: keyboard, random_id: getRandomId()})
})

bot.hear(/Онлайн/i, msg => {
    let keyboard = Keyboard
    .keyboard([[
        Keyboard.textButton({
            label: 'Инфо',
            color: 'negative'
        }),
        Keyboard.textButton({
            label: 'Кликер',
            color: 'positive'
        }),
    ],  [
        Keyboard.textButton({
            label: 'Ура)',
            color: 'primary'
        }),
        Keyboard.textButton({
            label: 'Наша группа',
            color: 'secondary'
        })
    ]])
    .inline();
    msg.send({ message: 'Ты попал в меню Las Vegas', keyboard: keyboard, random_id: getRandomId()})
})

bot.hear(/Кликер/i, msg => {
    let keyboard = Keyboard
    .keyboard([[
        Keyboard.textButton({
            label: 'Кл',
            color: 'positive'
        }),
        Keyboard.textButton({
            label: 'Баланс',
            color: 'negative '
        }),
    ],  [
        Keyboard.textButton({
            label: 'Топ',
            color: 'primary'
        }),
        Keyboard.textButton({
            label: 'Начать',
            color: 'secondary'
        })
    ]]);
        
    msg.send({ message: 'Кликер "coin"', keyboard: keyboard, random_id: getRandomId()})
})

bot.hear(/Инфо/i, msg => {
    msg.send(`[ 💢 ] Привет, твой id - ${msg.senderId} Бот сделан на node js. От компании Las Vegas`)
})

bot.hear(/Кликер/i, msg => {
    msg.send(`[Команда в test разработке)] От компании Las Vegas`)
})

bot.hear(/Ура/i, msg => {
    msg.send(`Ура Ура) Бот сделан на node js. От компании Las Vegas`)
})

bot.hear(/Наша группа/i, msg => {
    msg.send(`Наша группа - https://vk.com/public205971651 Бот сделан на node js. От компании Las Vegas`)
})

bot.hear(/Баланс/i, msg => {
    msg.send(`Твой баланс 0`)
})

bot.hear(/Клик/i, msg => {
    msg.send(`Ты кликнул и получил 20`)
})

bot.hear(/Топ/i, msg => {
    msg.send(`Твой баланс 0`)
})

console.log('Бот запущен!');
vk.updates.start().catch(console.error)