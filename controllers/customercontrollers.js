const controller = {};

controller.index = (req, res) => {
	if(req.session.loggedin) {
		res.render('./partials/header',{
			login: true,
			name: req.session.usuario,
		});
		
	}else{
		res.render('./partials/header',{
			login: false,
			name: 'INICIA SESIÓN'			
		});
	}
};

controller.inicio = (req, res) => {
	if(req.session.loggedin) {
		res.render('./partials/header',{
			login: true,
			name: req.session.usuario,
		});
		
	}else{
		res.render('./partials/header',{
			login: false,
			name: 'INICIA SESIÓN'			
		});
	}
};

controller.login = (req, res) => {
	res.render('login')
};

controller.save = (req, res) => {
	const data = req.body;
	console.log('FUNCIONA REGISTRO')

	req.getConnection((err, conn) => {
		const query = conn.query('INSERT INTO cliente set ?', data, (err, cliente) => {
			console.log(cliente);
			res.redirect('/login');
		})
	})
};

controller.auth = (req, res) => {
	// Capture the input fields
	let username = req.body.Usuario;
	let password = req.body.Contras;

	console.log(username + password)
	// Ensure the input fields exists and are not empty
	if (username && password) {
		req.getConnection((err, conn) => {
			// Execute SQL query that'll select the account from the database based on the specified username and password
			conn.query('SELECT * FROM cliente WHERE Usuario = ? AND Contras = ?', [username, password], function (error, results, fields) {
				// If there is an issue with the query, output the error
				if (error) throw error;
				// If the account exists
				console.log(results);
				if (results.length > 0) {
					// Authenticate the user					
					
					req.session.loggedin = true;
					req.session.usuario = username;				
					
					console.log(req.session);					
							
					res.redirect('/inicio');
				} else {
					res.send('Usuario y/o Contraseña Incorrecta');
				}
				res.end();
			});
		})
	} else {
		res.send('Por favor ingresa Usuario y Contraseña!');
		res.end();
	}
};

controller.contact = (req, res) => {
	console.log('FUNCIONA CONTACTO')
	if(req.session.loggedin) {
		res.render('contact',{
			login: true,
			name: req.session.usuario,
		});
		
	}else{
		res.render('contact',{
			login: false,
			name: 'INICIA SESIÓN'			
		});
	}	
};

controller.blogs = (req, res) => {
	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM blogs', (err, blog) => {
			
			if (err) {
				res.json(err);
			}
			if(req.session.loggedin) {
				
				res.render('./blogs',{
					login: true,
					name: req.session.usuario,
					data: blog,
				});
			
			}else{
				res.render('./blogs',{
					login: false,
					name: 'INICIA SESIÓN',
					data: blog,			
				});		
			}
		})
	});
};      

controller.pipiplaya = (req, res) => {
	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM pipiplaya', (err, pipiplaya) => {
			
			if (err) {
				res.json(err);
			}
			if(req.session.loggedin) {
				
				res.render('./pipicans_playas',{
					login: true,
					name: req.session.usuario,
					data: pipiplaya,
				});
			
			}else{
				res.render('./pipicans_playas',{
					login: false,
					name: 'INICIA SESIÓN',
					data: pipiplaya,			
				});		
			}
		})
	});
}; 

controller.locales = (req, res) => {
	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM establecimiento', (err, establecimiento) => {
			
			if (err) {
				res.json(err);
			}
			if(req.session.loggedin) {
				
				res.render('./locales',{
					login: true,
					name: req.session.usuario,
					data: establecimiento,
				});

			}else{
				res.render('./locales',{
					login: false,
					name: 'INICIA SESIÓN',
					data: establecimiento,			
				});		
			}
		})
	});
}; 

controller.logout = (req, res) => {
	if(req.session.loggedin) {
		res.render('./partials/header',{
			login: false,
			name: 'INICIA SESIÓN'			
		});
	}
};

controller.valoraciones = (req, res) => {
	console.log('FUNCIONA CONTACTO')
	if(req.session.loggedin) {
		res.render('valoraciones',{
			login: true,
			name: req.session.usuario,
		});
		
	}else{
		res.render('valoraciones',{
			login: false,
			name: 'INICIA SESIÓN'			
		});
	}	
};

controller.foro = (req, res) => {
	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM foro', (err, foro) => {
			
			if (err) {
				res.json(err);
			}
			if(req.session.loggedin) {
				
				res.render('./foro',{
					login: true,
					name: req.session.usuario,
					data: foro,
				});

			}else{
				res.render('./foro',{
					login: false,
					name: 'INICIA SESIÓN',
					data: foro,			
				});		
			}
		})
	});
}; 


module.exports = controller;

// controller.perfil = (req, res) => {
	
// 	if(req.session.loggedin) {
// 		req.getConnection((err, conn) => {

// 			if (req.session.usuario = conn.query('SELECT Usuario FROM cliente')) {
// 			// Execute SQL query that'll select the account from the database based on the specified username and password
// 			conn.query('SELECT Email, Teléfono, Dirección FROM cliente', function (error, results, fields) {
// 				// If there is an issue with the query, output the error
// 				if (error) throw error;
// 				// If the account exists
// 				console.log(results);
// 				if (results.length > 0) {
// 					// Authenticate the user
					
					
// 					req.session.email = Email;
// 					req.session.phone = Teléfono;				
// 					req.session.adress = Dirección;

// 					console.log(req.session);	
					
// 					res.redirect('/perfil');
// 				} else {
// 					res.send('Usuario y/o Contraseña Incorrecta');
// 				}
// 				res.end();
// 			});
// 		})
	
	
// 		res.render('./perfil',{
// 			login:true,
// 			name: req.session.usuario,
			
// 			email: conn.query('SELECT Email FROM cliente'),
// 			phone: conn.query('SELECT Teléfono FROM cliente'),
// 			adress: conn.query('SELECT Dirección FROM cliente')
// 		});
// 	res.redirect('perfil')
// 	}
// };

// controller.foro = (req, res) => {
	

// 	console.log('funciona foro')
// 	req.getConnection((err, conn) => {
// 			conn.query('SELECT * FROM preguntas', (err, preguntas) => {
				
// 				if (err) {
// 					res.json(err);
// 				}
// 				if(req.session.loggedin) {
					
// 					res.render('./foro',{
// 						login: true,
// 						name: req.session.usuario,
// 						data: preguntas,
// 					});

// 				}else{
// 					res.render('./foro',{
// 						login: false,
// 						name: 'INICIA SESIÓN',
// 						data: preguntas,			
// 					});		
// 				}
// 			})
// 		});
// 		if (login = true){
// 			const ask = req.body.pregunta;
			
// 			req.getConnection((err, conn) => {
// 				const query = conn.query('INSERT INTO pregunta FROM preguntas set ?', ask, (err, pregunta) => {
// 					console.log(pregunta);
// 					res.render('/foro', {
// 						nuevapreg: pregunta
// 					})
// 				})
// 			});
// 		}
// }