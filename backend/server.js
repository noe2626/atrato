const express = require("express");
const mysql = require('mysql');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser')
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'atrato',
  password: '1234',
  database: 'atrato'
});

app.listen(5000, () => {
  console.log(`Server started on port ${PORT}`);
});

app.get('/', function (req, res) {
  res.send('Hello from backend')
})

app.get('/usuarios', (req, res) => {
  const sql = 'SELECT * FROM usuarios';

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send('Not result');
    }
  });
});

app.get('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM usuarios where id=' + [id];

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send('Not result');
    }
  });
});

app.post('/usuarios', (req, res) => {
  const sql = 'INSERT INTO usuarios SET ?';

  const userObj = {
    correo: req.body.correo,
    telefono: req.body.telefono,
    nombre: req.body.nombre,
    segundo_nom: req.body.segundo_nom,
    apellido_p: req.body.apellido_p,
    apellido_m: req.body.apellido_m,
    fecha_nac: req.body.fecha_nac,
    estatus: req.body.estatus,
    analista: req.body.analista,
    n_tarjeta: req.body.n_tarjeta,
    proveedor: req.body.proveedor,
    cvv: req.body.cvv,
    pin: req.body.pin,
    fecha_ven: req.body.fecha_ven
  };

  connection.query(sql, userObj, error => {
    if (error) throw error;
    res.send('Registro realizado!');
  });
});

app.put('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'UPDATE usuarios SET ? where id = ' + id;

  const userObj = {
    correo: req.body.correo,
    telefono: req.body.telefono,
    nombre: req.body.nombre,
    segundo_nom: req.body.segundo_nom,
    apellido_p: req.body.apellido_p,
    apellido_m: req.body.apellido_m,
    fecha_nac: req.body.fecha_nac,
    estatus: req.body.estatus,
    analista: req.body.analista,
    n_tarjeta: req.body.n_tarjeta,
    proveedor: req.body.proveedor,
    cvv: req.body.cvv,
    pin: req.body.pin,
    fecha_ven: req.body.fecha_ven
  };

  connection.query(sql, userObj, error => {
    if (error) throw error;
    res.send('Cambio realizado!');
  });
});

app.delete('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'delete from usuarios where id = '+id;

  connection.query(sql, error => {
    if (error) throw error;
    res.send('Usuario eliminado!');
  });

});


