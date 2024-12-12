require('dotenv').config();
const sqlite3 = require('sqlite3').verbose();
const moment = require('moment-timezone');

const dbPath = process.env.DB_PATH || 'C:/Users/Vitor/banco_db';

const db = new sqlite3.Database(dbPath);

db.serialize(() => {
     db.run(
          'CREATE TABLE IF NOT EXISTS product (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, qtd INTEGER, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);'
     );

     const itens = [
          'carne',
          'linguiça',
          'frango',
          'coração',
          'kafta',
          'queijo qualho',
          'queijo muçarela',
          'tulipa',
          'medalhão carne',
          'medalhão frango',
          'medalhão queijo',
          'medalhão mandioca',
          'misto',
          'linguiça apimentada',
     ];

     const stmt = db.prepare('INSERT INTO product (name, created_at) VALUES (?, ?)');
     itens.forEach((item) => {
          const createdAt = moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss');
          stmt.run(item, createdAt, (err) => {
               if (err) {
                    console.error(err.message);
               }
          });
     });
     stmt.finalize();

     db.each('SELECT id, name, created_at FROM product', (err, row) => {
          if (err) {
               console.error(err.message);
          } else {
               console.log(row.id + ': ' + row.name + ' - ' + row.created_at);
          }
     });
});
