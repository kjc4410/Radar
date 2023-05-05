///////////////// sql 생성  ///////////////////////////
const mysql = require('mysql'); // mysql과 연결에 필요함

// db는 우선 grafana에 생성 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password',
  database: 'Radar',
  port: 3306
});

// db 연결 성공 여부
connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
    } else {
      console.log('Connected to MySQL database');
    }
  });
  
  // DB 안에 새로운 테이블 생성하는 query문
  const make_tb = `
    CREATE TABLE radar_data (
      id INT AUTO_INCREMENT PRIMARY KEY,
      x INT,
      y INT,
      z INT,
      hbr INT,
      bpm INT,
      energy INT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  
  // 테이블 생성
  connection.query(make_tb, (err, result) => {
    if (err) {
      console.error('Error creating table:', err);
    } else {
      console.log('Table created:', result);
    }
  });