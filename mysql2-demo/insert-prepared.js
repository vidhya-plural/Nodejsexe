const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Newgoal2024$',
  database: 'northwind'
})

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack)
    return
  }
  console.log('Connected to the database')

  const sql = 'INSERT INTO Categories (CategoryID,CategoryName,Description,Picture) VALUES (?, ?, ?, ?)'
  const values = ['9', 'Healthyfood','Eat healthy stay healthy','BLOB']
  connection.execute(sql, values, (err, results) => {
    if (err) {
      console.error('Error executing query:', err.stack)
      return
    }
    console.log('Insert results:', results)
  })

  connection.end()
})