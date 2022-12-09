const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql2');
const myConnection = require('express-myconnection');
const session = require('express-session');
const morgan = require('morgan');
													
const HappyRoutes = require('./routes/happy');


app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(myConnection(mysql, {
	host: '127.0.0.1',
	user: 'root',
	password: 'Gabutelegu97',
	database: 'happypaw'
}, 'single'));

// var connection = mysql.createConnection({
// 	host : '127.0.0.1',
// 	user : 'root',
// 	password: 'melainvent0',
// 	database: 'happypaw'
// });

app.use(express.urlencoded({extended: true}));

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// app.use(cookieParser());

app.use('/', HappyRoutes);
app.use('/static', express.static(path.join(__dirname, 'static')));


//Levantar el servidor
app.listen(app.get('port'), (req,res) => {
    console.log(`Servidor activo en port : ${app.get('port')}`);
})


app.use(express.json());


//Configuración de la plantilla





//Ruta 
// app.get('/', (req,res) => {
//     res.render ('inicio.ejs');
// })

//Ruta Inicio
// app.get('/inicio', (req, res) => {
//     res.render('inicio.ejs');
// })

//Ruta Registro
/*app.get('/registro', (req, res) => {
    res.render('registro.ejs');
})*/

//ruta guardar datos NO FUNCIONAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
// app.post('/save', (req,res) => {
//     const data = req.body;
//     console.log('FUNCIONA REGISTRO')

//     req.getConnection((err, conn) => {
//         const query = conn.query('INSERT INTO cliente set ?', data, (err, cliente) => {
//             console.log(cliente);
//             res.redirect('/login');
//         })
//    })
// });


//Ruta Login
// app.get('/login', (req, res) => {
//     res.render('login.ejs');
// });

// app.post('/auth', function(req, res) {
// 	// Capture the input fields
// 	let username = req.body.usuario;
// 	let password = req.body.contras;
// 	// Ensure the input fields exists and are not empty
// 	if (username && password) {
// 		// Execute SQL query that'll select the account from the database based on the specified username and password
// 		connection.query('SELECT * FROM cliente WHERE Usuario = ? AND Contras = ?', [username, password], function(error, results, fields) {
// 			// If there is an issue with the query, output the error
// 			if (error) throw error;
// 			// If the account exists
// 			if (results.length > 0) {
// 				// Authenticate the user
// 				req.session.loggedin = true;
// 				req.session.username = username;
// 				// Redirect to home page
// 				res.redirect('/inicio');
// 			} else {
// 				res.send('Usuario y/o Contraseña Incorrecta');
// 			}			
// 			res.end();
// 		});
// 	} else {
// 		res.send('Por favor ingresa Usuario y Contraseña!');
// 		res.end();
// 	}
// });

//app.use(express.json());




