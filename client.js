const net = require('net');

const connect = () => {
  const conn = net.createConnection({
  host: "192.168.68.70",
  port: "50541"
});

  conn.setEncoding('utf8');

  conn.on("data", (data) => {
  console.log(data);
})

  conn.on('connect', () => {
    console.log("Successfully connected to the game server");
    conn.write("Name: ROL");
  })

  return conn
}

module.exports = {
  connect
}