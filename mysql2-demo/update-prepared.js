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

  const sql = 'UPDATE Categories SET CategoryName = ?  WHERE CategoryID = ?'
  const values = ['Milk Products', '4']
  connection.execute(sql, values, (err, results) => {
    if (err) {
      console.error('Error executing query:', err.stack)
      return
    }
    console.log('Update results:', results)
  })

  connection.end()
})