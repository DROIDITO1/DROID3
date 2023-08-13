//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
   let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `🧑🏻‍💻 Etiqueta o menciona a alguien\n\n👉🏻 Ejemplo : ${usedPrefix + command} @user`
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `
😈 BANEADO 😎

⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
@${who.split`@`[0]} 🧑🏻‍💻 Ya no podras usar el bot, Lee las reglas del grupo por favor 😿 `, m, { mentions: [who] })
}
handler.help = ['ban @user']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.admin = true
handler.rowner = false

export default handler
