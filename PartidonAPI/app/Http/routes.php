<?php

$app->get('/', function () use ($app) 
	{
    	return $app->version();
	}
);

$app->group(['prefix' => 'api/v1', 'namespace' => 'App\Http\Controllers'], function () use ($app) 
	{
		/**
		* @api {post} http://www.partidon.pe.hu/api/v1/players/ Register Player
		* @apiName PostPlayer
		* @apiGroup Player
		* @apiVersion 1.0.0
		*
		* @apiParam {string} name Nombre del Jugador.
		* @apiParam {string} email Correo del Jugador.
		* @apiParam {string} password Contraseña del Jugador.
		* @apiParam {string} address Dirección del Jugador.
		* @apiParam {string} icon_image Nombre de la imagen del Jugador.
		*
		* @apiSuccess {String} message Mensaje de confirmación del registro.
		*/
	    $app->post('players','PlayersController@store');

	    /**
		* @api {post} http://www.partidon.pe.hu/api/v1/companies/ Register Company
		* @apiName PostCompany
		* @apiGroup Company
		* @apiVersion 1.0.0
		*
		* @apiParam {string} name 			Nombre de la Empresa.
		* @apiParam {string} email 			Correo de la Empresa.
		* @apiParam {string} password 		Contraseña de la Empresa.
		* @apiParam {string} address 		Dirección de la Empresa.
		* @apiParam {string} icon_image 	Nombre de la imagen de la Empresa.
		* @apiParam {Number} phone_number 	Número telefónico de la Empresa.
		* @apiParam {string} description 	Descripción de la Empresa.
		* @apiParam {string} district 		Distrito de la localización de la Empresa.
		* @apiParam {string} latitude 		Latitud de la Empresa.
		* @apiParam {string} length 		Longitud de la Empresa.
		*
		* @apiSuccess {String} message Mensaje de confirmación del registro.
		*/
	    $app->post('companies','CompaniesController@store');

	    /**
		* @api {post} http://www.partidon.pe.hu/api/v1/auth/players Login for Players
		* @apiName PostAuth
		* @apiGroup Auth
		* @apiVersion 1.0.0
		*
		* @apiParam {string} email 		Correo del Jugador.
		* @apiParam {string} password 	Contraseña del Jugador.
		*
		* @apiSuccessExample {json} Success-Response:
		*	{
		*	    "id": 61,
		*	    "score": 0,
		*	    "user": {
		*	        "id": 61,
		*	        "name": "Hector",
		*	        "email": "hectorwatanabe.hw@gmail.com",
		*	        "address": "Los Pilares",
		*	        "icon_image": "mi_perfil",
		*	        "api_token": "6JCyGSjXsCpmVnaHXd3D7vW4eyFAqh4AZJ1MTKctqd6p7zTYnX4yuDcLZ8Yw"
		*	    }
		*	}
		*
		*/
	    $app->post('auth/players', 'AuthController@loginPlayer');
	}
);

$app->group(['prefix' => 'api/v1', 'middleware' => 'auth', 'namespace' => 'App\Http\Controllers'], function () use ($app){
		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/players/ List of Players
		* @apiName GetPlayers
		* @apiGroup Player
		* @apiVersion 1.0.0
		*
		* @apiParam {string} api_token Token de autentificación.
		*
		* @apiSuccess {Number} id       Identificador de Jugador.
		* @apiSuccess {Number} score    Calificación de Jugador.
		* @apiSuccess {Object} user     Información del perfil de Usuario.
		* @apiSuccess {Number} user.id          Identificador de Usuario.
		* @apiSuccess {String} user.name  	    Nombre del Usuario.
		* @apiSuccess {String} user.email  	    Correo del Usuario.
		* @apiSuccess {String} user.address     Dirección del Usuario.
		* @apiSuccess {String} user.icon_image  Nombre de la image del Usuario.
		* @apiSuccessExample {json} Success-Response:
		*     [
		*	    {
		*	        "id": 61,
		*	        "score": 0,
		*	        "user": {
		*	            "id": 61,
		*	            "name": "Hector",
		*	            "email": "hectorwatanabe.hw@gmail.com",
		*	            "address": "Los Pilares",
		*	            "icon_image": "mi_perfil"
		*	        }
		*	    },
		*	    {
		*	        "id": 62,
		*	        "score": 0,
		*	        "user": {
		*	            "id": 62,
		*	            "name": "Maria",
		*	            "email": "maria@gmail.com",
		*	            "address": "Las Oropendolas",
		*	            "icon_image": "defualt"
		*	        }
		*	    }
		*     ]
		*/
		$app->get('players','PlayersController@index');

		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/players/:id Show Player
		* @apiName GetPlayer
		* @apiGroup Player
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id        Identificador de Jugador.
		* @apiParam {string} api_token Token de autentificación.
		*
		* @apiSuccess {Number} id       		Identificador de Jugador.
		* @apiSuccess {Number} score     		Calificación de Jugador.
		* @apiSuccess {Object} user     		Información del perfil de Usuario.
		* @apiSuccess {Number} user.id          Identificador de Usuario.
		* @apiSuccess {String} user.name  	    Nombre del Usuario.
		* @apiSuccess {String} user.email  	    Correo del Usuario.
		* @apiSuccess {String} user.address     Dirección del Usuario.
		* @apiSuccess {String} user.icon_image  Nombre de la image del Usuario.
		* @apiSuccessExample {json} Success-Response:
		*	{
		*	    "id": 61,
		*	    "score": 0,
		*	    "user": {
		*	        "id": 61,
		*	        "name": "Hector",
		*	        "email": "hectorwatanabe.hw@gmail.com",
		*	        "address": "Los Pilares",
		*	        "icon_image": "mi_perfil"
		*	    }
		*	}
		*/
		$app->get('players/{player}','PlayersController@show');

		/**
		* @api {patch} http://www.partidon.pe.hu/api/v1/players/:id Update Player
		* @apiName PatchPlayer
		* @apiGroup Player
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id        	Identificador de Jugador.
		* @apiParam {string} api_token  	Token de autentificación.
		* @apiParam {String} name  	    	Nombre del Jugador.
		* @apiParam {String} email  		Correo del Jugador.
		* @apiParam {String} password  		Contraseña del Jugador.
		* @apiParam {String} address    	Dirección del Jugador.
		* @apiParam {String} icon_image     Nombre de la image del Jugador.
		*
		* @apiSuccess {String} message      Mensaje de confirmación de la actualización.
		*/
		$app->patch('players/{player}','PlayersController@update');

		/**
		* @api {delete} http://www.partidon.pe.hu/api/v1/players/:id Destroy Player
		* @apiName DeletePlayer
		* @apiGroup Player
		* @apiVersion 1.0.0
		*
		* @apiParam {Number}    :id        	Identificador de Jugador.
		* @apiParam {string}    api_token  	Token de autentificación.		
		*
		* @apiSuccess {String}  message      Mensaje de confirmación de la eliminación.
		*/
		$app->delete('players/{player}','PlayersController@destroy');

		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/players/:id/teams List of Teams By Player
		* @apiName GetTeamsByPlayer
		* @apiGroup Player
		* @apiVersion 1.0.0
		*
		* @apiParam {string} api_token Token de autentificación.
		* @apiParam {Number} :id       Identificador del Jugador.
		*
		* @apiSuccess {Number} id               	Identificador de la equipo.
		* @apiSuccess {String} name     			Nombre del equipo.
		* @apiSuccess {string} players      		Número de Jugadores.
		* @apiSuccess {string} icon_image       	Imagen del equipo.
		* @apiSuccess {string} author_id        	Identificador del jugador jefe.
		* @apiSuccess {string} sport_id         	Identificador del deporte.
		* @apiSuccess {Object} pivot     			Objeto Pivot.
		* @apiSuccess {Number} pivot.player_id      Identificador del jugador.
		* @apiSuccess {String} pivot.team_id  	    Identificador del equipo.
		*
		* @apiSuccessExample {json} Success-Response:
		*     [
		*	     {
		*	        "id": 1,
		*	        "name": "El mejor equipo",
		*	        "players": "10",
		*	        "icon_image": "default_team_1",
		*	        "author_id": "1",
		*	        "sport_id": "1",
		*	        "pivot": {
		*	            "player_id": "1",
		*	            "team_id": "1"
		*	        }
		*	    },
		*	    {
		*	        "id": 5,
		*	        "name": "Promoción 64",
		*	        "players": "4",
		*	        "icon_image": "default_team_2",
		*	        "author_id": "1",
		*	        "sport_id": "3",
		*	        "pivot": {
		*	            "player_id": "1",
		*	            "team_id": "5"
		*	        }
		*	    }
		*     ]
		*/
		$app->get('players/{player}/teams','PlayersController@player_teams');


		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/players/:id/matches List of Matches By Player
		* @apiName GetMatchesByPlayer
		* @apiGroup Player
		* @apiVersion 1.0.0
		*
		* @apiParam {string} api_token  		Token de autentificación.
		* @apiParam {Number} :id 				Identificador del jugador.
		*
		* @apiSuccess {Number} id               Identificador del partido.
		* @apiSuccess {String} name     		Nombre del partido.
		* @apiSuccess {string} address      	Dirección del partido.
		* @apiSuccess {string} district       	Distrito del partido.
		* @apiSuccess {string} icon_image       Imagen del partido.
		* @apiSuccess {Number} author_id        Identificador del jugador jefe.
		* @apiSuccess {Number} sport_id     	Identificador del deporte.
		* @apiSuccess {Number} team_red_id      Identificador del equipo rojo.
		* @apiSuccess {Number} team_blue_id  	Identificador del equipo azul.
		*
		* @apiSuccessExample {json} Success-Response:
		*   [
		*		{
		*	        "id": "5",
		*	        "name": "El duelo",
		*	        "address": "calle 31",
		*	        "district": "Surco",
		*	        "icon_image": "default_match_3",
		*	        "author_id": "6",
		*	        "sport_id": "2",
		*	        "team_red_id": "9",
		*	        "team_blue_id": "11"
		*	    },
		*	    {
		*	        "id": "1",
		*	        "name": "Primera Partida",
		*	        "address": "Los Caminos",
		*	        "district": "Lima",
		*	        "icon_image": "default_match_1",
		*	        "author_id": "1",
		*	        "sport_id": "3",
		*	        "team_red_id": "2",
		*	        "team_blue_id": "5"
		*	    }
		*   ]
		*/
		$app->get('players/{player}/matches','PlayersController@player_matches');

		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/companies/ List of Companies
		* @apiName GetCompanies
		* @apiGroup Company
		* @apiVersion 1.0.0
		*
		* @apiParam {string} api_token Token de autentificación.
		*
		* @apiSuccess {Number} id               Identificador de la Empresa.
		* @apiSuccess {Number} phone_number     Número de telefono de la Empresa.
		* @apiSuccess {string} description      Descripción de la Empresa.
		* @apiSuccess {string} district         Distrito de la Empresa.
		* @apiSuccess {string} latitude         Latitud de la Empresa.
		* @apiSuccess {string} length           Longitud de la Empresa.
		* @apiSuccess {Object} user     		Información del perfil de Usuario.
		* @apiSuccess {Number} user.id          Identificador de Usuario.
		* @apiSuccess {String} user.name  	    Nombre del Usuario.
		* @apiSuccess {String} user.email  	    Correo del Usuario.
		* @apiSuccess {String} user.address     Dirección del Usuario.
		* @apiSuccess {String} user.icon_image  Nombre de la image del Usuario.
		*
		* @apiSuccessExample {json} Success-Response:
		*     [
		*	    {
		*	        "id": 3,
		*	        "phone_number": 987336940,
		*	        "description": "Empresa dedicada a la reserva de canchas de futbol",
		*	        "district": "Lima",
		*	        "latitude": "null",
		*	        "length": "null",
		*	        "user": {
		*	            "id": 66,
		*	            "name": "Tu Cancha de Futbol",
		*	            "email": "tucancha@gmail.com",
		*	            "address": "Los Portales",
		*	            "icon_image": "defualt"
		*	        }
		*	    }
		*     ]
		*/

		$app->get('companies','CompaniesController@index');

		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/companies/:id Show Company
		* @apiName GetCompany
		* @apiGroup Company
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id                Identificador de la Empresa.
		* @apiParam {string} api_token          Token de autentificación.
		*
		* @apiSuccess {Number} id              Identificador de la Empresa.
		* @apiSuccess {Number} phone_number     Número de telefono de la Empresa.
		* @apiSuccess {string} description      Descripción de la Empresa.
		* @apiSuccess {string} district         Distrito de la Empresa.
		* @apiSuccess {string} latitude         Latitud de la Empresa.
		* @apiSuccess {string} length           Longitud de la Empresa.
		* @apiSuccess {Object} user     		Información del perfil de Usuario.
		* @apiSuccess {Number} user.id          Identificador de Usuario.
		* @apiSuccess {String} user.name  	    Nombre del Usuario.
		* @apiSuccess {String} user.email  	    Correo del Usuario.
		* @apiSuccess {String} user.address     Dirección del Usuario.
		* @apiSuccess {String} user.icon_image  Nombre de la image del Usuario.
		*
		* @apiSuccessExample {json} Success-Response:
		*	    {
		*	        "id": 3,
		*	        "phone_number": 987336940,
		*	        "description": "Empresa dedicada a la reserva de canchas de futbol",
		*	        "district": "Lima",
		*	        "latitude": "null",
		*	        "length": "null",
		*	        "user": {
		*	            "id": 66,
		*	            "name": "Tu Cancha de Futbol",
		*	            "email": "tucancha@gmail.com",
		*	            "address": "Los Portales",
		*	            "icon_image": "defualt"
		*	        }
		*	    }
		*/
		$app->get('companies/{company}','CompaniesController@show');

		/**
		* @api {patch} http://www.partidon.pe.hu/api/v1/companies/:id Update Company
		* @apiName PatchCompany
		* @apiGroup Company
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id              Identificador de la Empresa.
		* @apiParam {string} api_token        Token de autentificación.
		*
		* @apiParam {String} name  	   		  Nombre de la Empresa.
		* @apiParam {String} email  	      Correo de la Empresa.
		* @apiParam {String} password  	      Password de la Empresa.
		* @apiParam {String} address    	  Dirección de la Empresa.
		* @apiParam {String} icon_image  	  Imagen de la Empresa.
		* @apiParam {Number} phone_number     Número de telefono de la Empresa.
		* @apiParam {string} description      Descripción de la Empresa.
		* @apiParam {string} district         Distrito de la Empresa.
		* @apiParam {string} latitude         Latitud de la Empresa.
		* @apiParam {string} length           Longitud de la Empresa.
		*
		* @apiSuccess {String}  message       Mensaje de confirmación de la actualización.
		*/
		$app->patch('companies/{company}','CompaniesController@update');

		/**
		* @api {delete} http://www.partidon.pe.hu/api/v1/companies/:id Destroy Company
		* @apiName DeleteCompany
		* @apiGroup Company
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id              Identificador de la Empresa.
		* @apiParam {string} api_token        Token de autentificación.
		*
		*
		* @apiSuccess {String}  message       Mensaje de confirmación de la eliminación.
		*/
		$app->delete('companies/{company}','CompaniesController@destroy');

		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/sports/ List of Sports
		* @apiName  GetSports
		* @apiGroup Sport
		* @apiVersion 1.0.0
		*
		* @apiParam {string} api_token        Token de autentificación.
		*
		*
		* @apiSuccessExample {json} Success-Response:
		*		[
		*		    {
		*		        "id": 1,
		*		        "name": "Futbol"
		*		    },
		*		    {
		*		        "id": 2,
		*		        "name": "Tenis"
		*		    }
		*		]
		*/
		$app->get('sports','SportsController@index');

		/**
		* @api {post} http://www.partidon.pe.hu/api/v1/sports/ Register Sport
		* @apiName  PostSport
		* @apiGroup Sport
		* @apiVersion 1.0.0
		*
		* @apiParam {string} api_token        Token de autentificación.
		* @apiParam {string} name        	  Nombre del Deporte.
		*
		*
		* @apiSuccess {String}  message       Mensaje de confirmación del registro del deporte.
		*/
		$app->post('sports','SportsController@store');

		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/sports/:id Show Sport
		* @apiName  GetSport
		* @apiGroup Sport
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id        	  Identificador del Deporte.
		* @apiParam {string} api_token        Token de autentificación.
		*
		*
		* @apiSuccessExample {json} Success-Response:
		*		{
		*		   "id": 1,
		*		   "name": "Futbol"
		*		}
		*/
		$app->get('sports/{sport}','SportsController@show');

		/**
		* @api {patch} http://www.partidon.pe.hu/api/v1/sports/:id Update Sport
		* @apiName  PatchSport
		* @apiGroup Sport
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id        	  Identificador del Deporte.
		* @apiParam {string} api_token        Token de autentificación.
		* @apiParam {string} name        	  Nombre del Deporte.
		*
		*
		* @apiSuccess {String}  message       Mensaje de confirmación de la actualización.
		*/
		$app->patch('sports/{sport}','SportsController@update');

		/**
		* @api {delete} http://www.partidon.pe.hu/api/v1/sports/:id Destroy Sport
		* @apiName  DeleteSport
		* @apiGroup Sport
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id        	  Identificador del Deporte.
		* @apiParam {string} api_token        Token de autentificación.
		*
		* @apiSuccess {String}  message       Mensaje de confirmación de la eliminación.
		*/
		$app->delete('sports/{sport}','SportsController@destroy');


		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/players/:id/sports List of Specialties
		* @apiName  GetSpecialties
		* @apiGroup Specialty
		* @apiVersion 1.0.0
		* 
		* @apiParam {Number} :id              Identificador de Jugador.
		* @apiParam {string} api_token        Token de autentificación.
		*
		*
		* @apiSuccessExample {json} Success-Response:
		*		[
		*		    {
		*		        "id": 3,
		*		        "player_id": 61,
		*				"sport": 2
		*		    }
		*		]
		*/
		$app->get('players/{player}/sports','SpecialtiesController@index');

		/**
		* @api {post} http://www.partidon.pe.hu/api/v1/players/:id/sports Register Specialty
		* @apiName  PostSpecialty
		* @apiGroup Specialty
		* @apiVersion 1.0.0
		* 
		* @apiParam {Number} :id              Identificador de Jugador.
		* @apiParam {string} api_token        Token de autentificación.
		*
		* @apiParam {Number} sport_id         Identificador de Deporte.
		*
		*
		* @apiSuccess {String}  message       Mensaje de confirmación del registro.
		*/
		$app->post('players/{player}/sports','SpecialtiesController@store');

		/**
		* @api {delete} http://www.partidon.pe.hu/api/v1/players/:id_player/sports/:id_sport Destroy Specialty
		* @apiName  DeleteSpecialty
		* @apiGroup Specialty
		* @apiVersion 1.0.0
		* 
		* @apiParam {Number} :id_player       Identificador de Jugador.
		* @apiParam {Number} :id_sport        Identificador de Deporte.
		* @apiParam {string} api_token        Token de autentificación.
		*
		*
		* @apiSuccess {String}  message       Mensaje de confirmación de eliminación.
		*/
		$app->delete('players/{player}/sports/{sport}','SpecialtiesController@destroy');


		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/sports/:id/businesses List of Businesses by Sport
		* @apiName  GetBusinessesBySport
		* @apiGroup Business
		* @apiVersion 1.0.0
		* 
		* @apiParam {Number} :id       		  Identificador del deporte.
		* @apiParam {string} api_token        Token de autentificación.
		*
		* @apiSuccessExample {json} Success-Response:
		*		[
		*		    {
		*		        "id": 1,
		*		        "company_id": "1",
		*		        "sport_id": "1",
		*		        "company": {
		*		            "id": 1,
		*		            "phone_number": "987336940",
		*		            "description": "Empresa dedicada a la reserva de canchas de futbol",
		*		            "district": "Lima",
		*		            "latitude": "-12.0927761",
		*		            "length": "-77.0216685"
		*		        }
		*		    },
		*		    {
		*		        "id": 4,
		*		        "company_id": "4",
		*		        "sport_id": "1",
		*		        "company": {
		*		            "id": 4,
		*		            "phone_number": "5139000",
		*		            "description": "Empresa dedicada a la reserva de canchas de futbol y basket",
		*		            "district": "San Isidro",
		*		            "latitude": "-12.0896963",
		*		            "length": "-77.060111"
		*		        }
		*		    }
		*		]
		*/
		$app->get('sports/{sport}/businesses','BusinessesController@index2');

		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/companies/:id/sports List of Businesses
		* @apiName  GetBusinesses
		* @apiGroup Business
		* @apiVersion 1.0.0
		* 
		* @apiParam {Number} :id       		  Identificador de la Empresa.
		* @apiParam {string} api_token        Token de autentificación.
		*
		* @apiSuccessExample {json} Success-Response:
		*		[
		*		    {
		*		        "id": 3,
		*		        "company_id": 3,
		*		        "sport": 2
		*		    }
		*		]
		*/
		$app->get('companies/{company}/sports','BusinessesController@index');

		/**
		* @api {post} http://www.partidon.pe.hu/api/v1/companies/:id/sports Register Business
		* @apiName  PostBusiness
		* @apiGroup Business
		* @apiVersion 1.0.0
		* 
		* @apiParam {Number} :id       		  Identificador de la Empresa.
		* @apiParam {string} api_token        Token de autentificación.
		*
		* @apiParam {Number} sport_id         Identificador del Deporte.
		*
		* @apiSuccess {String}  message       Mensaje de confirmación de registro de negocio.
		*/
		$app->post('companies/{company}/sports','BusinessesController@store');

		/**
		* @api {delete} http://www.partidon.pe.hu/api/v1/companies/:id_company/sports/:id_sport Destroy Business
		* @apiName  DeleteBusiness
		* @apiGroup Business
		* @apiVersion 1.0.0
		* 
		* @apiParam {Number} :id_company	  Identificador de la Empresa.
		* @apiParam {Number} :id_sport_id	  Identificador del Deporte.
		* @apiParam {string} api_token        Token de autentificación.
		*
		*
		* @apiSuccess {String}  message       Mensaje de confirmación de eliminación.
		*/
		$app->delete('companies/{company}/sports/{sport}','BusinessesController@destroy');


		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/companies/:id/sportsfields List of Sports Fields by Company
		* @apiName  GetSportsFieldsByCompany
		* @apiGroup SportField
		* @apiVersion 1.0.0
		* 
		* @apiParam {string} api_token        Token de autentificación.
		*
		*
		* @apiSuccessExample {json} Success-Response:
		*		[
		*		    {
		*		        "id": 4,
		*		        "material": "sintético",
		*		        "size": "80x80",
		*		        "seat": "0",
		*		        "price": "15",
		*		        "offer": "10",
		*		        "image1": "default",
		*		        "image2": "default",
		*		        "score": "0",
		*		        "sport_id": "2",
		*		        "company": {
		*		            "id": 4,
		*		            "phone_number": "5139000",
		*		            "description": "Empresa dedicada a la reserva de canchas de futbol y basket",
		*		            "district": "San Isidro",
		*		            "latitude": "-12.0896963",
		*		            "length": "-77.060111"
		*		        }
		*		    },
		*		    {
		*		        "id": 5,
		*		        "material": "sintético",
		*		        "size": "80x80",
		*		        "seat": "0",
		*		        "price": "15",
		*		        "offer": "10",
		*		        "image1": "default",
		*		        "image2": "default",
		*		        "score": "0",
		*		        "sport_id": "2",
		*		        "company": {
		*		            "id": 4,
		*		            "phone_number": "5139000",
		*		            "description": "Empresa dedicada a la reserva de canchas de futbol y basket",
		*		            "district": "San Isidro",
		*		            "latitude": "-12.0896963",
		*		            "length": "-77.060111"
		*		        }
		*		    }
		*		]
		*/
		$app->get('companies/{id}/sportsfields','SportsFieldsController@index');

		/**
		* @api {post} http://www.partidon.pe.hu/api/v1/companies/:id/sportsfields Register Sport Field
		* @apiName  PostSportField
		* @apiGroup SportField
		* @apiVersion 1.0.0
		* 
		* @apiParam {string} api_token        Token de autentificación.
		*
		* @apiParam {string}  material        Material del campo deportivo.
		* @apiParam {string}  size        	  Tamaño del campo deportivo.
		* @apiParam {Boolean} seat        	  Si hay o No, asientos disponibles.
		* @apiParam {Double}  price        	  Precio por el uso del campo deportivo.
		* @apiParam {Double}  offer           Precio oferta por el uso del campo deportivo.
		* @apiParam {string}  image1          Primera imagen del campo deportivo.
		* @apiParam {string}  image2          Segunda imagen del campo deportivo.
		* @apiParam {Number}  score        	  Puntuación del campo deportivo.
		* @apiParam {Number}  sport_id        Identificador del tipo de deporte.
		* @apiParam {Number}  company_id      Identificador de la empresa.
		*
		* @apiSuccess {String}  message       Mensaje de confirmación de registro.
		*/
		$app->post('sportsfields','SportsFieldsController@store');

		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/sportsfields/:id Show Sport Field
		* @apiName  GetSportField
		* @apiGroup SportField
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id 	          Identificador del campo deportivo. 
		* @apiParam {string} api_token        Token de autentificación.
		*
		*
		* @apiSuccessExample {json} Success-Response:
		*		{
		*		    "id": 1,
		*		    "material": "sintético",
		*		    "size": "80x80",
		*		    "seat": 0,
		*		    "price": 0,
		*		    "offer": 0,
		*		    "image1": "default",
		*		    "image2": "default",
		*		    "score": 0,
		*		    "sport": 2,
		*		    "company": {
		*		        "id": 3,
		*		        "phone_number": 987336940,
		*		        "description": "Empresa dedicada a la reserva de canchas de futbol",
		*		        "district": "Lima",
		*		        "latitude": "null",
		*		        "length": "null"
		*		    }
		*		}
		*/
		$app->get('sportsfields/{sportfield}','SportsFieldsController@show');

		/**
		* @api {patch} http://www.partidon.pe.hu/api/v1/sportsfields/:id Update Sport Field
		* @apiName  PatchSportField
		* @apiGroup SportField
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id 	          Identificador del campo deportivo. 
		* @apiParam {string} api_token        Token de autentificación.
		*
		* @apiParam {string} material        Material del campo deportivo.
		* @apiParam {string} size      		 Tamaño del campo deportivo.
		* @apiParam {string} seat        	 Si hay o no asientos.
		* @apiParam {Double} price       	 Precio por hora del campo deportivo.
		* @apiParam {Double} offer       	 Precio oferta por hora del campo deportivo.
		* @apiParam {String} imagen1       	 Imagen1 del campo deportivo.
		* @apiParam {String} imagen2       	 Imagen2 del campo deportivo.
		* @apiParam {Number} score       	 Puntaje del campo deportivo.
		* @apiParam {Number} sport_id        Identificador del deporte.
		* @apiParam {Number} company_id      Identificador de la compañía.
		*
		* @apiSuccess {String}  message       Mensaje de confirmación de la actualización.
		*/
		$app->patch('sportsfields/{sportfield}','SportsFieldsController@update');

		/**
		* @api {delete} http://www.partidon.pe.hu/api/v1/sportsfields/:id Destroy Sport Field
		* @apiName  DeleteSportField
		* @apiGroup SportField
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id 	          Identificador del campo deportivo. 
		* @apiParam {string} api_token        Token de autentificación.
		*
		* @apiSuccess {String}  message       Mensaje de confirmación de la eliminación.
		*/
		$app->delete('sportsfields/{sportfield}','SportsFieldsController@destroy');

		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/teams List of Teams
		* @apiName  GetTeams
		* @apiGroup Team
		* @apiVersion 1.0.0
		*
		* @apiParam {string} api_token        Token de autentificación.
		*
		*
		* @apiSuccessExample {json} Success-Response:
		*		[
		*		    {
		*		        "id": 2,
		*		        "name": "El mejor equipo",
		*		        "players": 10,
		*		        "icon_image": "default",
		*		        "author_id": 61,
		*		        "sport_id": 2
		*		    },
		*		    {
		*		        "id": 4,
		*		        "name": "Los futboleros",
		*		        "players": 10,
		*		        "icon_image": "default",
		*		        "author_id": 62,
		*		        "sport_id": 2
		*		    }
		*		]
		*/
		$app->get('teams','TeamsController@index');

		/**
		* @api {post} http://www.partidon.pe.hu/api/v1/teams Register Team
		* @apiName  PostTeam
		* @apiGroup Team
		* @apiVersion 1.0.0
		*
		* @apiParam {String} api_token        Token de autentificación.
		*
		* @apiParam {String} name        	  Nombre del equipo deportivo.
		* @apiParam {Number} players          Número de jugadores del equipo.
		* @apiParam {String} icon_image       Imagen del equipo deportivo.
		* @apiParam {Number} author_id        Identificador del jugador que creo el equipo.
		* @apiParam {Number} sport_id         Identificador del deporte.
		*
		* @apiSuccess {String}  message       Mensaje de confirmación del registro.
		*
		*/
		$app->post('teams','TeamsController@store');


		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/teams/:id Show Team
		* @apiName  GetTeam
		* @apiGroup Team
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id  	          Identificador del equipo.
		* @apiParam {String} api_token        Token de autentificación.
		*
		* @apiSuccessExample {json} Success-Response:
		*	    {
		*	        "id": 2,
		*	        "name": "El mejor equipo",
		*	        "players": 10,
		*	        "icon_image": "default",
		*	        "author_id": 61,
		*	        "sport_id": 2
		*	    }
		*/
		$app->get('teams/{team}','TeamsController@show');

		/**
		* @api {patch} http://www.partidon.pe.hu/api/v1/teams/:id Update Team
		* @apiName  PatchTeam
		* @apiGroup Team
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id        	  Identificador del equipo.
		* @apiParam {String} api_token        Token de autentificación.
		*
		* @apiParam {String} name        	  Nombre del equipo deportivo.
		* @apiParam {Number} players          Número de jugadores del equipo.
		* @apiParam {String} icon_image       Imagen del equipo deportivo.
		* @apiParam {Number} author_id        Identificador del jugador que creo el equipo.
		* @apiParam {Number} sport_id         Identificador del deporte.
		*
		* @apiSuccess {String}  message       Mensaje de confirmación de la actualización.
		*
		*/
		$app->patch('teams/{team}','TeamsController@update');

		/**
		* @api {delete} http://www.partidon.pe.hu/api/v1/teams/:id Destroy Team
		* @apiName  DeleteTeam
		* @apiGroup Team
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id        	  Identificador del equipo.
		* @apiParam {String} api_token        Token de autentificación.
		*
		*
		* @apiSuccess {String}  message       Mensaje de confirmación de la eliminación.
		*
		*/
		$app->delete('teams/{team}','TeamsController@destroy');

		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/teams/:id/players List of Members of Team
		* @apiName  GetMembers
		* @apiGroup Member
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id        	  Identificador del equipo.
		* @apiParam {String} api_token        Token de autentificación.
		*
		* @apiSuccessExample {json} Success-Response:
		*	[
		*	    {
		*	        "id": 5,
		*	        "team_id": "1",
		*	        "player_id": "1",
		*	        "player": {
		*	            "id": 1,
		*	            "score": "0",
		*	            "user": {
		*	                "id": 1,
		*	                "name": "Héctor",
		*	                "email": "hectorwatanabe.hw@gmail.com",
		*	                "address": "Los Pilares",
		*	                "icon_image": "defualt_player_1"
		*	            }
		*	        }
		*	    },
		*	    {
		*	        "id": 14,
		*	        "team_id": "1",
		*	        "player_id": "6",
		*	        "player": {
		*	            "id": 6,
		*	            "score": "0",
		*	            "user": {
		*	                "id": 12,
		*	                "name": "Pandora Alba Roman",
		*	                "email": "pandora@gmail.com",
		*	                "address": "av. Salaverry 234",
		*	                "icon_image": "default_player_2"
		*	            }
		*	        }
		*	    }
		*	]
		*/
		$app->get('teams/{team}/players','MembersController@index');

		/**
		* @api {post} http://www.partidon.pe.hu/api/v1/teams/:id/players Register Member of Team
		* @apiName  PostMember
		* @apiGroup Member
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id        	  Identificador del equipo.
		* @apiParam {String} api_token        Token de autentificación.
		*
		* @apiParam {String} role        	  Rol del jugador.
		* @apiParam {Number} player_id        Identificador del jugador.
		*
		*
		* @apiSuccess {String}  message       Mensaje de confirmación del registro.
		*
		*/
		$app->post('teams/{team}/players','MembersController@store');

		/**
		* @api {delete} http://www.partidon.pe.hu/api/v1/teams/:id_team/players/:id_player Destroy Member of Team
		* @apiName  DeleteMember
		* @apiGroup Member
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id_team      	  Identificador del equipo.
		* @apiParam {Number} :id_player    	  Identificador del jugador.
		* @apiParam {String} api_token        Token de autentificación.
		*
		* @apiSuccess {String}  message       Mensaje de confirmación de la eliminación.
		*
		*/
		$app->delete('teams/{team}/players/{player}','MembersController@destroy');



		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/companies/:id/attentionhours List of Attention Hours
		* @apiName  GetAttentionHours
		* @apiGroup AttentionHour
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id        	  Identificador de la empresa.
		* @apiParam {String} api_token        Token de autentificación.
		*
		* @apiSuccessExample {json} Success-Response:
		*		[
		*		    {
		*		        "id": 4,
		*		        "weekday": 1,
		*		        "start_at": "05:00 p.m",
		*		        "end_at": "10:00 p.m",
		*		        "company_id": 3
		*		    },
		*		    {
		*		        "id": 5,
		*		        "weekday": 1,
		*		        "start_at": "05:00 p.m",
		*		        "end_at": "10:00 p.m",
		*		        "company_id": 3
		*		    }
		*		]
		*
		*/
		$app->get('companies/{company}/attentionhours','AttentionHoursController@index');


		/**
		* @api {post} http://www.partidon.pe.hu/api/v1/companies/:id/attentionhours Register Attention Hour
		* @apiName  PostAttentionHour
		* @apiGroup AttentionHour
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id        	  Identificador de la empresa.
		* @apiParam {String} api_token        Token de autentificación.
		*
		* @apiParam {String} weekday          Día de la semana de la atención.
		* @apiParam {String} start_at         Inicio de la atención.
		* @apiParam {String} end_at           Fin de la atención.
		*
		* @apiSuccess {String}  message       Mensaje de confirmación del registro.
		*/
		$app->post('companies/{company}/attentionhours','AttentionHoursController@store');

		/**
		* @api {delete} http://www.partidon.pe.hu/api/v1/attentionhours/:id Destroy Attention Hour
		* @apiName  DeleteAttentionHour
		* @apiGroup AttentionHour
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id        	  Identificador del horario de atención.
		* @apiParam {String} api_token        Token de autentificación.
		*
		* @apiSuccess {String}  message       Mensaje de confirmación de la eliminación.
		*/
		$app->delete('attentionhours/{attentionhour}','AttentionHoursController@destroy');


		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/players/:id/friends List of Friendships
		* @apiName  GetFriendships
		* @apiGroup Friendship
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id        	  Identificador del jugador.
		* @apiParam {String} api_token        Token de autentificación.
		*
		* @apiSuccessExample {json} Success-Response:
		*		[
		*		    {
		*		        "id": 13,
		*		        "player_id": "1",
		*		        "friend_id": "3",
		*		        "friend": {
		*		            "id": 3,
		*		            "score": "0",
		*		            "user": {
		*		                "id": 3,
		*		                "name": "María Fernanda Segovia Chacón",
		*		                "email": "msegoviachacon@gmail.com",
		*		                "address": "Las Oropendolas 313",
		*		                "icon_image": "default_player_2"
		*		            }
		*		        }
		*		    }
		*		]
		*/
		$app->get('players/{player}/friends','FriendshipsController@index');

		/**
		* @api {post} http://www.partidon.pe.hu/api/v1/players/:id/friends Register Friendship
		* @apiName  PostFriendship
		* @apiGroup Friendship
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id        	  Identificador del jugador.
		* @apiParam {String} api_token        Token de autentificación.
		*
		* @apiParam {Number} friend_id        Identificador del jugador amigo.
		*
		* @apiSuccess {String}  message       Mensaje de confirmación del registro.
		*/
		$app->post('players/{player}/friends','FriendshipsController@store');

		/**
		* @api {delete} http://www.partidon.pe.hu/api/v1/friendships/:id Destroy Friendship
		* @apiName  DeleteFriendship
		* @apiGroup Friendship
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id        	  Identificador de la amistad.
		* @apiParam {String} api_token        Token de autentificación.
		*
		* @apiSuccess {String}  message       Mensaje de confirmación de la eliminación.
		*/
		$app->delete('friendships/{friend}','FriendshipsController@destroy');



		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/matches List of Matches
		* @apiName  GetMatches
		* @apiGroup Match
		* @apiVersion 1.0.0
		*
		* @apiParam {String} api_token        Token de autentificación.
		*
		* @apiSuccessExample {json} Success-Response:
		*		[
		*		    {
		*		        "id": 1,
		*		        "name": "Primera Partida",
		*		        "address": "Los Caminos",
		*		        "district": "Lima",
		*		        "match_date": "2017-07-01",
		*		        "icon_image": "default_match_1",
		*		        "author_id": "1",
		*		        "sport_id": "3",
		*		        "team_red_id": "2",
		*		        "team_blue_id": "5",
		*		        "team_red": {
		*		            "id": 2,
		*		            "name": "Las tenistas",
		*		            "players": "4",
		*		            "icon_image": "default_team_2",
		*		            "author_id": "3",
		*		            "sport_id": "3"
		*		        },
		*		        "team_blue": {
		*		            "id": 5,
		*		            "name": "Promoción 64",
		*		            "players": "4",
		*		            "icon_image": "default_team_2",
		*		            "author_id": "1",
		*		            "sport_id": "3"
		*		        }
		*		    },
		*		    {
		*		        "id": 2,
		*		        "name": "Segunda Partida",
		*		        "address": "Los Caminos",
		*		        "district": "Lima",
		*		        "match_date": "2017-07-03",
		*		        "icon_image": "default_match_1",
		*		        "author_id": "1",
		*		        "sport_id": "3",
		*		        "team_red_id": "2",
		*		        "team_blue_id": "5",
		*		        "team_red": {
		*		            "id": 2,
		*		            "name": "Las tenistas",
		*		            "players": "4",
		*		            "icon_image": "default_team_2",
		*		            "author_id": "3",
		*		            "sport_id": "3"
		*		        },
		*		        	"team_blue": {
		*		            "id": 5,
		*		            "name": "Promoción 64",
		*		            "players": "4",
		*		            "icon_image": "default_team_2",
		*		            "author_id": "1",
		*		            "sport_id": "3"
		*		        }
		*		    }
		*		]
		*
		*/
		$app->get('matches','MatchesController@index');

		/**
		* @api {post} http://www.partidon.pe.hu/api/v1/matches Register Match
		* @apiName  PostMatch
		* @apiGroup Match
		* @apiVersion 1.0.0
		*
		* @apiParam {String} api_token        Token de autentificación.
		*
		* @apiParam {String} name        	  Nombre del partido.
		* @apiParam {String} address          Dirección del partido.
		* @apiParam {String} district         Distrito del partido.
		* @apiParam {String} match_date       Fecha del partido.
		* @apiParam {String} icon_image       Imagen del partido.
		* @apiParam {Number} author_id        Identificador del jugador creador del partido.
		* @apiParam {Number} referee_id       Identificador del jugador referí.
		* @apiParam {Number} sport_id         Identificador del deporte del partido.
		* @apiParam {Number} team_red_id      Identificador del equipo rojo.
		* @apiParam {Number} team_blue_id     Identificador del equipo azul.
		*
		* @apiSuccess {String}  message       Mensaje de confirmación del registro.
		*
		*/
		$app->post('matches','MatchesController@store');

		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/matches/:id Show Match
		* @apiName  GetMatch
		* @apiGroup Match
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id        	  Identificador del partido.
		* @apiParam {String} api_token        Token de autentificación.
		*
		* @apiSuccessExample {json} Success-Response:
		*		{
		*		    "id": 2,
		*		    "name": "El partido",
		*		    "address": "Los Partidos",
		*		    "district": "Lima",
		*		    "match_date": "2017-06-11",
		*		    "icon_image": "default",
		*		    "author_id": 61,
		*		    "referee_id": 61,
		*		    "sport_id": 2,
		*		    "team_red_id": 2,
		*		    "team_blue_id": 4
		*		}
		*
		*/
		$app->get('matches/{match}','MatchesController@show');

		/**
		* @api {patch} http://www.partidon.pe.hu/api/v1/matches/:id Update Match
		* @apiName  PatchMatch
		* @apiGroup Match
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id        	  Identificador del partido.
		* @apiParam {String} api_token        Token de autentificación.
		*
		* @apiParam {String} name        	  Nombre del partido.
		* @apiParam {String} address          Dirección del partido.
		* @apiParam {String} district         Distrito del partido.
		* @apiParam {String} match_date       Fecha del partido.
		* @apiParam {String} icon_image       Imagen del partido.
		* @apiParam {Number} author_id        Identificador del jugador creador del partido.
		* @apiParam {Number} referee_id       Identificador del jugador réferi.
		* @apiParam {Number} sport_id         Identificador del deporte del partido.
		* @apiParam {Number} team_red_id      Identificador del equipo rojo.
		* @apiParam {Number} team_blue_id     Identificador del equipo azul.
		*
		* @apiSuccess {String}  message       Mensaje de confirmación de la actualización.
		*
		*/
		$app->patch('matches/{match}','MatchesController@update');

		/**
		* @api {delete} http://www.partidon.pe.hu/api/v1/matches/:id Destroy Match
		* @apiName  DeleteMatch
		* @apiGroup Match
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id        	  Identificador del partido.
		* @apiParam {String} api_token        Token de autentificación.
		*
		* @apiSuccess {String}  message       Mensaje de confirmación de la eliminación.
		*
		*/
		$app->delete('matches/{match}','MatchesController@destroy');

		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/matches/:id/scores List of Scoreboards of Match
		* @apiName  GetScoreboards
		* @apiGroup Scoreboard
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id        	  Identificador del partido.
		* @apiParam {String} api_token        Token de autentificación.
		*
		* @apiSuccessExample {json} Success-Response:
		*		[
		*		    {
		*		        "id": 1,
		*		        "score_team_red": 2,
		*		        "score_team_blue": 0,
		*		        "match_id": 2
		*		    },
		*		    {
		*		        "id": 3,
		*		        "score_team_red": 2,
		*		        "score_team_blue": 1,
		*		        "match_id": 2
		*		    }
		*		]
		*/
		$app->get('matches/{match}/scores','ScoreboardsController@index');

		/**
		* @api {post} http://www.partidon.pe.hu/api/v1/matches/:id/scores Register Scoreboard
		* @apiName  PostScoreboard
		* @apiGroup Scoreboard
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id        	  	   Identificador del partido.
		* @apiParam {String} api_token        	   Token de autentificación.
		*
		* @apiParam {Number} score_team_red        Puntaje del Equipo Rojo.
		* @apiParam {Number} score_team_blue       Puntaje del Equipo Azul.
		*
		* @apiSuccess {String}  message       Mensaje de confirmación del registro.
		*
		*/
		$app->post('matches/{match}/scores','ScoreboardsController@store');


		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/users/:id/wall Wall of Publications of User
		* @apiName  GetPublicationsUser
		* @apiGroup Publication
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id        	  	   Identificador del usuario.
		* @apiParam {String} api_token        	   Token de autentificación.
		*
		* @apiSuccessExample {json} Success-Response:
		*	[
		*	    {
		*	        "id": 7,
		*	        "comment": "El partido de ayer estubo genial",
		*	        "author_id": 61,
		*	        "user_id": 62,
		*	        "match_id": null,
		*	        "team_id": null
		*	    },
		*	    {
		*	        "id": 8,
		*	        "comment": "Hay que ponerle mayor empeño",
		*	        "author_id": 61,
		*	        "user_id": 62,
		*	        "match_id": null,
		*	        "team_id": null
		*	    }
		*	]
		*
		*/
		$app->get('users/{user}/wall','PublicationsController@indexUser');

		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/matches/:id/wall Wall of Publications of Match
		* @apiName  GetPublicationsMatch
		* @apiGroup Publication
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id        	  	   Identificador del partido.
		* @apiParam {String} api_token        	   Token de autentificación.
		*
		* @apiSuccessExample {json} Success-Response:
		*	[
		*	    {
		*	        "id": 31,
		*	        "comment": "Esto va hacer un partidaso",
		*	        "author_id": 61,
		*	        "user_id": null,
		*	        "match_id": 2,
		*	        "team_id": null
		*	    },
		*		{
		*	        "id": 32,
		*	        "comment": "Practicando para el partidaso",
		*	        "author_id": 61,
		*	        "user_id": null,
		*	        "match_id": 2,
		*	        "team_id": null
		*	    }
		*	]
		*
		*/
		$app->get('matches/{match}/wall','PublicationsController@indexMatch');


		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/teams/:id/wall Wall of Publications of Team
		* @apiName  GetPublicationsTeam
		* @apiGroup Publication
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id        	  	   Identificador del equipo.
		* @apiParam {String} api_token        	   Token de autentificación.
		*
		* @apiSuccessExample {json} Success-Response:
		*	[
		*	    {
		*	        "id": 31,
		*	        "comment": "Si se puede equipo",
		*	        "author_id": 61,
		*	        "user_id": null,
		*	        "match_id": null,
		*	        "team_id": 4
		*	    },
		*		{
		*	        "id": 32,
		*	        "comment": "Vamos Equipo",
		*	        "author_id": 61,
		*	        "user_id": null,
		*	        "match_id": null,
		*	        "team_id": 4,
		*	    }
		*	]
		*
		*/
		$app->get('teams/{team}/wall','PublicationsController@indexTeam');


		/**
		* @api {post} http://www.partidon.pe.hu/api/v1/publications Register Publications
		* @apiName  PostPublication
		* @apiGroup Publication
		* @apiVersion 1.0.0
		*
		* @apiParam {String} api_token        	   Token de autentificación.
		*
		* @apiParam {String} comment        	   Comentario de la publicación.
		* @apiParam {Number} author_id        	   Identificador del jugador autor de la publicación.
		* @apiParam {Number} user_id        	   Identificador del usuario al que va dirigido.
		* @apiParam {Number} match_id        	   Identificador del partido al que va dirigido.
		* @apiParam {Number} team_id        	   Identificador del equipo al que va dirigido.
		*
		* @apiSuccess {String}  message       	   Mensaje de confirmación del registro.
		*
		*/
		$app->post('publications','PublicationsController@store');


		/**
		* @api {get} http://www.partidon.pe.hu/api/v1/players/:id/notifications List of Notifications
		* @apiName  GetNotification
		* @apiGroup Notification
		* @apiVersion 1.0.0
		*
		* @apiParam {Number} :id        	   	   Identificador de jugador.
		* @apiParam {String} api_token        	   Token de autentificación.
		*
		* @apiSuccessExample {json} Success-Response:
		*		[
		*		    {
		*		        "id": 26,
		*		        "status": "Nueva publicación en Primera Partida",
		*		        "player_id": "1",
		*		        "match_id": "1",
		*		        "team_id": null,
		*		        "player_tarjet": "1",
		*		        "created_at": "2017-07-06 18:12:04",
		*		        "team": null,
		*		        "match": {
		*		            "id": 1,
		*		            "name": "Primera Partida",
		*		            "address": "Los Caminos",
		*		            "district": "Lima",
		*		            "match_date": "2017-07-01",
		*		            "icon_image": "default_match_1",
		*		            "author_id": "1",
		*		            "sport_id": "3",
		*		            "team_red_id": "2",
		*		            "team_blue_id": "5",
		*		            "team_red": {
		*		                "id": 2,
		*		                "name": "Las tenistas",
		*		                "players": "4",
		*		                "icon_image": "default_team_2",
		*		                "author_id": "3",
		*		                "sport_id": "3"
		*		            },
		*		            "team_blue": {
		*		                "id": 5,
		*		                "name": "Promoción 64",
		*		                "players": "4",
		*		                "icon_image": "default_team_2",
		*		                "author_id": "1",
		*		                "sport_id": "3"
		*		            }
		*		        },
		*		        "player": {
		*		            "id": 1,
		*		            "score": "0",
		*		            "user": {
		*		                "id": 1,
		*		                "name": "Héctor",
		*		                "email": "hectorwatanabe.hw@gmail.com",
		*		                "address": "Los Pilares",
		*		                "icon_image": "defualt_player_1"
		*		            }
		*		        }
		*		    },
		*		    {
		*		        "id": 24,
		*		        "status": "Nueva publicación en Primera Partida",
		*		        "player_id": "1",
		*		        "match_id": "1",
		*		        "team_id": null,
		*		        "player_tarjet": "1",
		*		        "created_at": "2017-07-06 18:09:08",
		*		        "team": null,
		*		        "match": {
		*		            "id": 1,
		*		            "name": "Primera Partida",
		*		            "address": "Los Caminos",
		*		            "district": "Lima",
		*		            "match_date": "2017-07-01",
		*		            "icon_image": "default_match_1",
		*		            "author_id": "1",
		*		            "sport_id": "3",
		*		            "team_red_id": "2",
		*		            "team_blue_id": "5",
		*		            "team_red": {
		*		                "id": 2,
		*		                "name": "Las tenistas",
		*		                "players": "4",
		*		                "icon_image": "default_team_2",
		*		                "author_id": "3",
		*		                "sport_id": "3"
		*		            },
		*		            "team_blue": {
		*		                "id": 5,
		*		                "name": "Promoción 64",
		*		                "players": "4",
		*		                "icon_image": "default_team_2",
		*		                "author_id": "1",
		*		                "sport_id": "3"
		*		            }
		*		        },
		*		        "player": {
		*		            "id": 1,
		*		            "score": "0",
		*		            "user": {
		*		                "id": 1,
		*		                "name": "Héctor",
		*		                "email": "hectorwatanabe.hw@gmail.com",
		*		                "address": "Los Pilares",
		*		                "icon_image": "defualt_player_1"
		*		            }
		*		        }
		*		    },
		*		]
		*
		*/
		$app->get('players/{player}/notifications','NotificationsController@index');

	}
);