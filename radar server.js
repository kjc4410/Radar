// server
var net = require('net');
const { parseRadar } = require('./parse'); //parse.js 같은 폴더안에

var _server = null;

const Ready = () => {
    if (_server === null) {
        // create server
        _server = new net.createServer((socket) => {
            // socket encoding
            socket.setEncoding('hex');

            socket.on('data', (data) => parsing(data));

            socket.on('error', (err) => throws('**ERROR**\n>> : ' + err));
        })

        // _server.listen(3333, () => console.info('TCP SERVER listening on :' + ip.address() + ":" + PORT));
        // 포트는 변경 가능
        _server.listen(3333, () => console.info('TCP SERVER listening on :' + 'localhost' + ":" + 3333));
    }
    
}

const parsing = (data) =>{
    //데이터 파싱
    var jsonObject = parseRadar(data); // parseRadar로....
    var pos = {
        x: jsonObject.message.content !== null ? jsonObject.message.content.pos_x : null,
        y: jsonObject.message.content !== null ? jsonObject.message.content.pos_y : null,
        z: jsonObject.message.content !== null ? jsonObject.message.content.pos_z : null
    };
    // bpm
    var bpm = jsonObject.message.content !== null ? jsonObject.message.content.bpm : null;
    // hbr
    var hbr = jsonObject.message.content !== null ? jsonObject.message.content.hbr : null;
    // energy
    var eng = jsonObject.message.content !== null ? jsonObject.message.content.energy : null;

    // 테이블 삽입 query문 순서대로 x,y,z,...
    const sql = `INSERT INTO radar_data (x, y, z, hbr, bpm, energy) VALUES (${pos.x}, ${pos.y}, ${pos.z}, ${hbr}, ${bpm}, ${eng})`;

    // query 연결 
    connection.query(sql, (err, result) => {
    if (err) {
        console.error('Error :', err);
    } else {
        console.log('Data Inserted:', result);
    }
    });

    let today = new Date();
   console.log(today, JSON.stringify(pos), eng);
}

// tas ready !!!
Ready();
