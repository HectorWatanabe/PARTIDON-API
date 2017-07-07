define({ "api": [
  {
    "type": "delete",
    "url": "http://www.partidon.pe.hu/api/v1/attentionhours/:id",
    "title": "Destroy Attention Hour",
    "name": "DeleteAttentionHour",
    "group": "AttentionHour",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del horario de atención.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación de la eliminación.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "AttentionHour"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/companies/:id/attentionhours",
    "title": "List of Attention Hours",
    "name": "GetAttentionHours",
    "group": "AttentionHour",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador de la empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\": 4,\n        \"weekday\": 1,\n        \"start_at\": \"05:00 p.m\",\n        \"end_at\": \"10:00 p.m\",\n        \"company_id\": 3\n    },\n    {\n        \"id\": 5,\n        \"weekday\": 1,\n        \"start_at\": \"05:00 p.m\",\n        \"end_at\": \"10:00 p.m\",\n        \"company_id\": 3\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "AttentionHour"
  },
  {
    "type": "post",
    "url": "http://www.partidon.pe.hu/api/v1/companies/:id/attentionhours",
    "title": "Register Attention Hour",
    "name": "PostAttentionHour",
    "group": "AttentionHour",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador de la empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "weekday",
            "description": "<p>Día de la semana de la atención.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_at",
            "description": "<p>Inicio de la atención.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_at",
            "description": "<p>Fin de la atención.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación del registro.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "AttentionHour"
  },
  {
    "type": "post",
    "url": "http://www.partidon.pe.hu/api/v1/auth/players",
    "title": "Login for Players",
    "name": "PostAuth",
    "group": "Auth",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Correo del Jugador.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña del Jugador.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 61,\n    \"score\": 0,\n    \"user\": {\n        \"id\": 61,\n        \"name\": \"Hector\",\n        \"email\": \"hectorwatanabe.hw@gmail.com\",\n        \"address\": \"Los Pilares\",\n        \"icon_image\": \"mi_perfil\",\n        \"api_token\": \"6JCyGSjXsCpmVnaHXd3D7vW4eyFAqh4AZJ1MTKctqd6p7zTYnX4yuDcLZ8Yw\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Auth"
  },
  {
    "type": "delete",
    "url": "http://www.partidon.pe.hu/api/v1/companies/:id_company/sports/:id_sport",
    "title": "Destroy Business",
    "name": "DeleteBusiness",
    "group": "Business",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id_company",
            "description": "<p>Identificador de la Empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id_sport_id",
            "description": "<p>Identificador del Deporte.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación de eliminación.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Business"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/companies/:id/sports",
    "title": "List of Businesses",
    "name": "GetBusinesses",
    "group": "Business",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador de la Empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\": 3,\n        \"company_id\": 3,\n        \"sport\": 2\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Business"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/sports/:id/businesses",
    "title": "List of Businesses by Sport",
    "name": "GetBusinessesBySport",
    "group": "Business",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del deporte.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\": 1,\n        \"company_id\": \"1\",\n        \"sport_id\": \"1\",\n        \"company\": {\n            \"id\": 1,\n            \"phone_number\": \"987336940\",\n            \"description\": \"Empresa dedicada a la reserva de canchas de futbol\",\n            \"district\": \"Lima\",\n            \"latitude\": \"-12.0927761\",\n            \"length\": \"-77.0216685\"\n        }\n    },\n    {\n        \"id\": 4,\n        \"company_id\": \"4\",\n        \"sport_id\": \"1\",\n        \"company\": {\n            \"id\": 4,\n            \"phone_number\": \"5139000\",\n            \"description\": \"Empresa dedicada a la reserva de canchas de futbol y basket\",\n            \"district\": \"San Isidro\",\n            \"latitude\": \"-12.0896963\",\n            \"length\": \"-77.060111\"\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Business"
  },
  {
    "type": "post",
    "url": "http://www.partidon.pe.hu/api/v1/companies/:id/sports",
    "title": "Register Business",
    "name": "PostBusiness",
    "group": "Business",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador de la Empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sport_id",
            "description": "<p>Identificador del Deporte.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación de registro de negocio.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Business"
  },
  {
    "type": "delete",
    "url": "http://www.partidon.pe.hu/api/v1/companies/:id",
    "title": "Destroy Company",
    "name": "DeleteCompany",
    "group": "Company",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador de la Empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación de la eliminación.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/companies/",
    "title": "List of Companies",
    "name": "GetCompanies",
    "group": "Company",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador de la Empresa.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "phone_number",
            "description": "<p>Número de telefono de la Empresa.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la Empresa.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "district",
            "description": "<p>Distrito de la Empresa.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitud de la Empresa.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "length",
            "description": "<p>Longitud de la Empresa.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Información del perfil de Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>Identificador de Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>Nombre del Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>Correo del Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.address",
            "description": "<p>Dirección del Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.icon_image",
            "description": "<p>Nombre de la image del Usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    [\n\t    {\n\t        \"id\": 3,\n\t        \"phone_number\": 987336940,\n\t        \"description\": \"Empresa dedicada a la reserva de canchas de futbol\",\n\t        \"district\": \"Lima\",\n\t        \"latitude\": \"null\",\n\t        \"length\": \"null\",\n\t        \"user\": {\n\t            \"id\": 66,\n\t            \"name\": \"Tu Cancha de Futbol\",\n\t            \"email\": \"tucancha@gmail.com\",\n\t            \"address\": \"Los Portales\",\n\t            \"icon_image\": \"defualt\"\n\t        }\n\t    }\n    ]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/companies/:id",
    "title": "Show Company",
    "name": "GetCompany",
    "group": "Company",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador de la Empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador de la Empresa.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "phone_number",
            "description": "<p>Número de telefono de la Empresa.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la Empresa.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "district",
            "description": "<p>Distrito de la Empresa.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitud de la Empresa.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "length",
            "description": "<p>Longitud de la Empresa.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Información del perfil de Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>Identificador de Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>Nombre del Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>Correo del Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.address",
            "description": "<p>Dirección del Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.icon_image",
            "description": "<p>Nombre de la image del Usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 3,\n    \"phone_number\": 987336940,\n    \"description\": \"Empresa dedicada a la reserva de canchas de futbol\",\n    \"district\": \"Lima\",\n    \"latitude\": \"null\",\n    \"length\": \"null\",\n    \"user\": {\n        \"id\": 66,\n        \"name\": \"Tu Cancha de Futbol\",\n        \"email\": \"tucancha@gmail.com\",\n        \"address\": \"Los Portales\",\n        \"icon_image\": \"defualt\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Company"
  },
  {
    "type": "patch",
    "url": "http://www.partidon.pe.hu/api/v1/companies/:id",
    "title": "Update Company",
    "name": "PatchCompany",
    "group": "Company",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador de la Empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre de la Empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo de la Empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password de la Empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Dirección de la Empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon_image",
            "description": "<p>Imagen de la Empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone_number",
            "description": "<p>Número de telefono de la Empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la Empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "district",
            "description": "<p>Distrito de la Empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitud de la Empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "length",
            "description": "<p>Longitud de la Empresa.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación de la actualización.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Company"
  },
  {
    "type": "post",
    "url": "http://www.partidon.pe.hu/api/v1/companies/",
    "title": "Register Company",
    "name": "PostCompany",
    "group": "Company",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre de la Empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Correo de la Empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña de la Empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>Dirección de la Empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "icon_image",
            "description": "<p>Nombre de la imagen de la Empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone_number",
            "description": "<p>Número telefónico de la Empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la Empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "district",
            "description": "<p>Distrito de la localización de la Empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitud de la Empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "length",
            "description": "<p>Longitud de la Empresa.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación del registro.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Company"
  },
  {
    "type": "delete",
    "url": "http://www.partidon.pe.hu/api/v1/friendships/:id",
    "title": "Destroy Friendship",
    "name": "DeleteFriendship",
    "group": "Friendship",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador de la amistad.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación de la eliminación.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Friendship"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/players/:id/friends",
    "title": "List of Friendships",
    "name": "GetFriendships",
    "group": "Friendship",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del jugador.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\": 13,\n        \"player_id\": \"1\",\n        \"friend_id\": \"3\",\n        \"friend\": {\n            \"id\": 3,\n            \"score\": \"0\",\n            \"user\": {\n                \"id\": 3,\n                \"name\": \"María Fernanda Segovia Chacón\",\n                \"email\": \"msegoviachacon@gmail.com\",\n                \"address\": \"Las Oropendolas 313\",\n                \"icon_image\": \"default_player_2\"\n            }\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Friendship"
  },
  {
    "type": "post",
    "url": "http://www.partidon.pe.hu/api/v1/players/:id/friends",
    "title": "Register Friendship",
    "name": "PostFriendship",
    "group": "Friendship",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del jugador.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "friend_id",
            "description": "<p>Identificador del jugador amigo.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación del registro.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Friendship"
  },
  {
    "type": "delete",
    "url": "http://www.partidon.pe.hu/api/v1/matches/:id",
    "title": "Destroy Match",
    "name": "DeleteMatch",
    "group": "Match",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del partido.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación de la eliminación.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Match"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/matches/:id",
    "title": "Show Match",
    "name": "GetMatch",
    "group": "Match",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del partido.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 2,\n    \"name\": \"El partido\",\n    \"address\": \"Los Partidos\",\n    \"district\": \"Lima\",\n    \"match_date\": \"2017-06-11\",\n    \"icon_image\": \"default\",\n    \"author_id\": 61,\n    \"referee_id\": 61,\n    \"sport_id\": 2,\n    \"team_red_id\": 2,\n    \"team_blue_id\": 4\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Match"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/matches",
    "title": "List of Matches",
    "name": "GetMatches",
    "group": "Match",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\": 1,\n        \"name\": \"Primera Partida\",\n        \"address\": \"Los Caminos\",\n        \"district\": \"Lima\",\n        \"match_date\": \"2017-07-01\",\n        \"icon_image\": \"default_match_1\",\n        \"author_id\": \"1\",\n        \"sport_id\": \"3\",\n        \"team_red_id\": \"2\",\n        \"team_blue_id\": \"5\",\n        \"team_red\": {\n            \"id\": 2,\n            \"name\": \"Las tenistas\",\n            \"players\": \"4\",\n            \"icon_image\": \"default_team_2\",\n            \"author_id\": \"3\",\n            \"sport_id\": \"3\"\n        },\n        \"team_blue\": {\n            \"id\": 5,\n            \"name\": \"Promoción 64\",\n            \"players\": \"4\",\n            \"icon_image\": \"default_team_2\",\n            \"author_id\": \"1\",\n            \"sport_id\": \"3\"\n        }\n    },\n    {\n        \"id\": 2,\n        \"name\": \"Segunda Partida\",\n        \"address\": \"Los Caminos\",\n        \"district\": \"Lima\",\n        \"match_date\": \"2017-07-03\",\n        \"icon_image\": \"default_match_1\",\n        \"author_id\": \"1\",\n        \"sport_id\": \"3\",\n        \"team_red_id\": \"2\",\n        \"team_blue_id\": \"5\",\n        \"team_red\": {\n            \"id\": 2,\n            \"name\": \"Las tenistas\",\n            \"players\": \"4\",\n            \"icon_image\": \"default_team_2\",\n            \"author_id\": \"3\",\n            \"sport_id\": \"3\"\n        },\n        \t\"team_blue\": {\n            \"id\": 5,\n            \"name\": \"Promoción 64\",\n            \"players\": \"4\",\n            \"icon_image\": \"default_team_2\",\n            \"author_id\": \"1\",\n            \"sport_id\": \"3\"\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Match"
  },
  {
    "type": "patch",
    "url": "http://www.partidon.pe.hu/api/v1/matches/:id",
    "title": "Update Match",
    "name": "PatchMatch",
    "group": "Match",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del partido.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del partido.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Dirección del partido.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>Distrito del partido.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "match_date",
            "description": "<p>Fecha del partido.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon_image",
            "description": "<p>Imagen del partido.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "author_id",
            "description": "<p>Identificador del jugador creador del partido.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "referee_id",
            "description": "<p>Identificador del jugador réferi.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sport_id",
            "description": "<p>Identificador del deporte del partido.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "team_red_id",
            "description": "<p>Identificador del equipo rojo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "team_blue_id",
            "description": "<p>Identificador del equipo azul.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación de la actualización.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Match"
  },
  {
    "type": "post",
    "url": "http://www.partidon.pe.hu/api/v1/matches",
    "title": "Register Match",
    "name": "PostMatch",
    "group": "Match",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del partido.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Dirección del partido.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>Distrito del partido.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "match_date",
            "description": "<p>Fecha del partido.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon_image",
            "description": "<p>Imagen del partido.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "author_id",
            "description": "<p>Identificador del jugador creador del partido.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "referee_id",
            "description": "<p>Identificador del jugador referí.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sport_id",
            "description": "<p>Identificador del deporte del partido.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "team_red_id",
            "description": "<p>Identificador del equipo rojo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "team_blue_id",
            "description": "<p>Identificador del equipo azul.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación del registro.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Match"
  },
  {
    "type": "delete",
    "url": "http://www.partidon.pe.hu/api/v1/teams/:id_team/players/:id_player",
    "title": "Destroy Member of Team",
    "name": "DeleteMember",
    "group": "Member",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id_team",
            "description": "<p>Identificador del equipo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id_player",
            "description": "<p>Identificador del jugador.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación de la eliminación.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Member"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/teams/:id/players",
    "title": "List of Members of Team",
    "name": "GetMembers",
    "group": "Member",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del equipo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\": 5,\n        \"team_id\": \"1\",\n        \"player_id\": \"1\",\n        \"player\": {\n            \"id\": 1,\n            \"score\": \"0\",\n            \"user\": {\n                \"id\": 1,\n                \"name\": \"Héctor\",\n                \"email\": \"hectorwatanabe.hw@gmail.com\",\n                \"address\": \"Los Pilares\",\n                \"icon_image\": \"defualt_player_1\"\n            }\n        }\n    },\n    {\n        \"id\": 14,\n        \"team_id\": \"1\",\n        \"player_id\": \"6\",\n        \"player\": {\n            \"id\": 6,\n            \"score\": \"0\",\n            \"user\": {\n                \"id\": 12,\n                \"name\": \"Pandora Alba Roman\",\n                \"email\": \"pandora@gmail.com\",\n                \"address\": \"av. Salaverry 234\",\n                \"icon_image\": \"default_player_2\"\n            }\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Member"
  },
  {
    "type": "post",
    "url": "http://www.partidon.pe.hu/api/v1/teams/:id/players",
    "title": "Register Member of Team",
    "name": "PostMember",
    "group": "Member",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del equipo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Rol del jugador.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "player_id",
            "description": "<p>Identificador del jugador.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación del registro.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Member"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/players/:id/notifications",
    "title": "List of Notifications",
    "name": "GetNotification",
    "group": "Notification",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador de jugador.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\": 26,\n        \"status\": \"Nueva publicación en Primera Partida\",\n        \"player_id\": \"1\",\n        \"match_id\": \"1\",\n        \"team_id\": null,\n        \"player_tarjet\": \"1\",\n        \"created_at\": \"2017-07-06 18:12:04\",\n        \"team\": null,\n        \"match\": {\n            \"id\": 1,\n            \"name\": \"Primera Partida\",\n            \"address\": \"Los Caminos\",\n            \"district\": \"Lima\",\n            \"match_date\": \"2017-07-01\",\n            \"icon_image\": \"default_match_1\",\n            \"author_id\": \"1\",\n            \"sport_id\": \"3\",\n            \"team_red_id\": \"2\",\n            \"team_blue_id\": \"5\",\n            \"team_red\": {\n                \"id\": 2,\n                \"name\": \"Las tenistas\",\n                \"players\": \"4\",\n                \"icon_image\": \"default_team_2\",\n                \"author_id\": \"3\",\n                \"sport_id\": \"3\"\n            },\n            \"team_blue\": {\n                \"id\": 5,\n                \"name\": \"Promoción 64\",\n                \"players\": \"4\",\n                \"icon_image\": \"default_team_2\",\n                \"author_id\": \"1\",\n                \"sport_id\": \"3\"\n            }\n        },\n        \"player\": {\n            \"id\": 1,\n            \"score\": \"0\",\n            \"user\": {\n                \"id\": 1,\n                \"name\": \"Héctor\",\n                \"email\": \"hectorwatanabe.hw@gmail.com\",\n                \"address\": \"Los Pilares\",\n                \"icon_image\": \"defualt_player_1\"\n            }\n        }\n    },\n    {\n        \"id\": 24,\n        \"status\": \"Nueva publicación en Primera Partida\",\n        \"player_id\": \"1\",\n        \"match_id\": \"1\",\n        \"team_id\": null,\n        \"player_tarjet\": \"1\",\n        \"created_at\": \"2017-07-06 18:09:08\",\n        \"team\": null,\n        \"match\": {\n            \"id\": 1,\n            \"name\": \"Primera Partida\",\n            \"address\": \"Los Caminos\",\n            \"district\": \"Lima\",\n            \"match_date\": \"2017-07-01\",\n            \"icon_image\": \"default_match_1\",\n            \"author_id\": \"1\",\n            \"sport_id\": \"3\",\n            \"team_red_id\": \"2\",\n            \"team_blue_id\": \"5\",\n            \"team_red\": {\n                \"id\": 2,\n                \"name\": \"Las tenistas\",\n                \"players\": \"4\",\n                \"icon_image\": \"default_team_2\",\n                \"author_id\": \"3\",\n                \"sport_id\": \"3\"\n            },\n            \"team_blue\": {\n                \"id\": 5,\n                \"name\": \"Promoción 64\",\n                \"players\": \"4\",\n                \"icon_image\": \"default_team_2\",\n                \"author_id\": \"1\",\n                \"sport_id\": \"3\"\n            }\n        },\n        \"player\": {\n            \"id\": 1,\n            \"score\": \"0\",\n            \"user\": {\n                \"id\": 1,\n                \"name\": \"Héctor\",\n                \"email\": \"hectorwatanabe.hw@gmail.com\",\n                \"address\": \"Los Pilares\",\n                \"icon_image\": \"defualt_player_1\"\n            }\n        }\n    },\n]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Notification"
  },
  {
    "type": "delete",
    "url": "http://www.partidon.pe.hu/api/v1/players/:id",
    "title": "Destroy Player",
    "name": "DeletePlayer",
    "group": "Player",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador de Jugador.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación de la eliminación.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Player"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/players/:id/matches",
    "title": "List of Matches By Player",
    "name": "GetMatchesByPlayer",
    "group": "Player",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del jugador.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador del partido.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del partido.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>Dirección del partido.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "district",
            "description": "<p>Distrito del partido.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "icon_image",
            "description": "<p>Imagen del partido.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "author_id",
            "description": "<p>Identificador del jugador jefe.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sport_id",
            "description": "<p>Identificador del deporte.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "team_red_id",
            "description": "<p>Identificador del equipo rojo.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "team_blue_id",
            "description": "<p>Identificador del equipo azul.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  [\n\t\t{\n\t        \"id\": \"5\",\n\t        \"name\": \"El duelo\",\n\t        \"address\": \"calle 31\",\n\t        \"district\": \"Surco\",\n\t        \"icon_image\": \"default_match_3\",\n\t        \"author_id\": \"6\",\n\t        \"sport_id\": \"2\",\n\t        \"team_red_id\": \"9\",\n\t        \"team_blue_id\": \"11\"\n\t    },\n\t    {\n\t        \"id\": \"1\",\n\t        \"name\": \"Primera Partida\",\n\t        \"address\": \"Los Caminos\",\n\t        \"district\": \"Lima\",\n\t        \"icon_image\": \"default_match_1\",\n\t        \"author_id\": \"1\",\n\t        \"sport_id\": \"3\",\n\t        \"team_red_id\": \"2\",\n\t        \"team_blue_id\": \"5\"\n\t    }\n  ]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Player"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/players/:id",
    "title": "Show Player",
    "name": "GetPlayer",
    "group": "Player",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador de Jugador.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador de Jugador.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>Calificación de Jugador.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Información del perfil de Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>Identificador de Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>Nombre del Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>Correo del Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.address",
            "description": "<p>Dirección del Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.icon_image",
            "description": "<p>Nombre de la image del Usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 61,\n    \"score\": 0,\n    \"user\": {\n        \"id\": 61,\n        \"name\": \"Hector\",\n        \"email\": \"hectorwatanabe.hw@gmail.com\",\n        \"address\": \"Los Pilares\",\n        \"icon_image\": \"mi_perfil\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Player"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/players/",
    "title": "List of Players",
    "name": "GetPlayers",
    "group": "Player",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador de Jugador.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>Calificación de Jugador.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Información del perfil de Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>Identificador de Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>Nombre del Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>Correo del Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.address",
            "description": "<p>Dirección del Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.icon_image",
            "description": "<p>Nombre de la image del Usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    [\n\t    {\n\t        \"id\": 61,\n\t        \"score\": 0,\n\t        \"user\": {\n\t            \"id\": 61,\n\t            \"name\": \"Hector\",\n\t            \"email\": \"hectorwatanabe.hw@gmail.com\",\n\t            \"address\": \"Los Pilares\",\n\t            \"icon_image\": \"mi_perfil\"\n\t        }\n\t    },\n\t    {\n\t        \"id\": 62,\n\t        \"score\": 0,\n\t        \"user\": {\n\t            \"id\": 62,\n\t            \"name\": \"Maria\",\n\t            \"email\": \"maria@gmail.com\",\n\t            \"address\": \"Las Oropendolas\",\n\t            \"icon_image\": \"defualt\"\n\t        }\n\t    }\n    ]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Player"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/players/:id/teams",
    "title": "List of Teams By Player",
    "name": "GetTeamsByPlayer",
    "group": "Player",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del Jugador.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador de la equipo.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del equipo.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "players",
            "description": "<p>Número de Jugadores.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "icon_image",
            "description": "<p>Imagen del equipo.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "author_id",
            "description": "<p>Identificador del jugador jefe.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "sport_id",
            "description": "<p>Identificador del deporte.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "pivot",
            "description": "<p>Objeto Pivot.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pivot.player_id",
            "description": "<p>Identificador del jugador.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pivot.team_id",
            "description": "<p>Identificador del equipo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    [\n\t     {\n\t        \"id\": 1,\n\t        \"name\": \"El mejor equipo\",\n\t        \"players\": \"10\",\n\t        \"icon_image\": \"default_team_1\",\n\t        \"author_id\": \"1\",\n\t        \"sport_id\": \"1\",\n\t        \"pivot\": {\n\t            \"player_id\": \"1\",\n\t            \"team_id\": \"1\"\n\t        }\n\t    },\n\t    {\n\t        \"id\": 5,\n\t        \"name\": \"Promoción 64\",\n\t        \"players\": \"4\",\n\t        \"icon_image\": \"default_team_2\",\n\t        \"author_id\": \"1\",\n\t        \"sport_id\": \"3\",\n\t        \"pivot\": {\n\t            \"player_id\": \"1\",\n\t            \"team_id\": \"5\"\n\t        }\n\t    }\n    ]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Player"
  },
  {
    "type": "patch",
    "url": "http://www.partidon.pe.hu/api/v1/players/:id",
    "title": "Update Player",
    "name": "PatchPlayer",
    "group": "Player",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador de Jugador.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del Jugador.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo del Jugador.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña del Jugador.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Dirección del Jugador.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon_image",
            "description": "<p>Nombre de la image del Jugador.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación de la actualización.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Player"
  },
  {
    "type": "post",
    "url": "http://www.partidon.pe.hu/api/v1/players/",
    "title": "Register Player",
    "name": "PostPlayer",
    "group": "Player",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del Jugador.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Correo del Jugador.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña del Jugador.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>Dirección del Jugador.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "icon_image",
            "description": "<p>Nombre de la imagen del Jugador.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación del registro.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Player"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/matches/:id/wall",
    "title": "Wall of Publications of Match",
    "name": "GetPublicationsMatch",
    "group": "Publication",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del partido.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\": 31,\n        \"comment\": \"Esto va hacer un partidaso\",\n        \"author_id\": 61,\n        \"user_id\": null,\n        \"match_id\": 2,\n        \"team_id\": null\n    },\n\t{\n        \"id\": 32,\n        \"comment\": \"Practicando para el partidaso\",\n        \"author_id\": 61,\n        \"user_id\": null,\n        \"match_id\": 2,\n        \"team_id\": null\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Publication"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/teams/:id/wall",
    "title": "Wall of Publications of Team",
    "name": "GetPublicationsTeam",
    "group": "Publication",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del equipo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\": 31,\n        \"comment\": \"Si se puede equipo\",\n        \"author_id\": 61,\n        \"user_id\": null,\n        \"match_id\": null,\n        \"team_id\": 4\n    },\n\t{\n        \"id\": 32,\n        \"comment\": \"Vamos Equipo\",\n        \"author_id\": 61,\n        \"user_id\": null,\n        \"match_id\": null,\n        \"team_id\": 4,\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Publication"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/users/:id/wall",
    "title": "Wall of Publications of User",
    "name": "GetPublicationsUser",
    "group": "Publication",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\": 7,\n        \"comment\": \"El partido de ayer estubo genial\",\n        \"author_id\": 61,\n        \"user_id\": 62,\n        \"match_id\": null,\n        \"team_id\": null\n    },\n    {\n        \"id\": 8,\n        \"comment\": \"Hay que ponerle mayor empeño\",\n        \"author_id\": 61,\n        \"user_id\": 62,\n        \"match_id\": null,\n        \"team_id\": null\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Publication"
  },
  {
    "type": "post",
    "url": "http://www.partidon.pe.hu/api/v1/publications",
    "title": "Register Publications",
    "name": "PostPublication",
    "group": "Publication",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Comentario de la publicación.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "author_id",
            "description": "<p>Identificador del jugador autor de la publicación.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Identificador del usuario al que va dirigido.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "match_id",
            "description": "<p>Identificador del partido al que va dirigido.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "team_id",
            "description": "<p>Identificador del equipo al que va dirigido.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación del registro.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Publication"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/matches/:id/scores",
    "title": "List of Scoreboards of Match",
    "name": "GetScoreboards",
    "group": "Scoreboard",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del partido.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\": 1,\n        \"score_team_red\": 2,\n        \"score_team_blue\": 0,\n        \"match_id\": 2\n    },\n    {\n        \"id\": 3,\n        \"score_team_red\": 2,\n        \"score_team_blue\": 1,\n        \"match_id\": 2\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Scoreboard"
  },
  {
    "type": "post",
    "url": "http://www.partidon.pe.hu/api/v1/matches/:id/scores",
    "title": "Register Scoreboard",
    "name": "PostScoreboard",
    "group": "Scoreboard",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del partido.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score_team_red",
            "description": "<p>Puntaje del Equipo Rojo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score_team_blue",
            "description": "<p>Puntaje del Equipo Azul.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación del registro.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Scoreboard"
  },
  {
    "type": "delete",
    "url": "http://www.partidon.pe.hu/api/v1/players/:id_player/sports/:id_sport",
    "title": "Destroy Specialty",
    "name": "DeleteSpecialty",
    "group": "Specialty",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id_player",
            "description": "<p>Identificador de Jugador.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id_sport",
            "description": "<p>Identificador de Deporte.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación de eliminación.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Specialty"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/players/:id/sports",
    "title": "List of Specialties",
    "name": "GetSpecialties",
    "group": "Specialty",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador de Jugador.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\": 3,\n        \"player_id\": 61,\n\t\t\"sport\": 2\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Specialty"
  },
  {
    "type": "post",
    "url": "http://www.partidon.pe.hu/api/v1/players/:id/sports",
    "title": "Register Specialty",
    "name": "PostSpecialty",
    "group": "Specialty",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador de Jugador.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sport_id",
            "description": "<p>Identificador de Deporte.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación del registro.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Specialty"
  },
  {
    "type": "delete",
    "url": "http://www.partidon.pe.hu/api/v1/sports/:id",
    "title": "Destroy Sport",
    "name": "DeleteSport",
    "group": "Sport",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del Deporte.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación de la eliminación.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Sport"
  },
  {
    "type": "delete",
    "url": "http://www.partidon.pe.hu/api/v1/sportsfields/:id",
    "title": "Destroy Sport Field",
    "name": "DeleteSportField",
    "group": "SportField",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del campo deportivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación de la eliminación.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "SportField"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/sportsfields/:id",
    "title": "Show Sport Field",
    "name": "GetSportField",
    "group": "SportField",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del campo deportivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"material\": \"sintético\",\n    \"size\": \"80x80\",\n    \"seat\": 0,\n    \"price\": 0,\n    \"offer\": 0,\n    \"image1\": \"default\",\n    \"image2\": \"default\",\n    \"score\": 0,\n    \"sport\": 2,\n    \"company\": {\n        \"id\": 3,\n        \"phone_number\": 987336940,\n        \"description\": \"Empresa dedicada a la reserva de canchas de futbol\",\n        \"district\": \"Lima\",\n        \"latitude\": \"null\",\n        \"length\": \"null\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "SportField"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/companies/:id/sportsfields",
    "title": "List of Sports Fields by Company",
    "name": "GetSportsFieldsByCompany",
    "group": "SportField",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\": 4,\n        \"material\": \"sintético\",\n        \"size\": \"80x80\",\n        \"seat\": \"0\",\n        \"price\": \"15\",\n        \"offer\": \"10\",\n        \"image1\": \"default\",\n        \"image2\": \"default\",\n        \"score\": \"0\",\n        \"sport_id\": \"2\",\n        \"company\": {\n            \"id\": 4,\n            \"phone_number\": \"5139000\",\n            \"description\": \"Empresa dedicada a la reserva de canchas de futbol y basket\",\n            \"district\": \"San Isidro\",\n            \"latitude\": \"-12.0896963\",\n            \"length\": \"-77.060111\"\n        }\n    },\n    {\n        \"id\": 5,\n        \"material\": \"sintético\",\n        \"size\": \"80x80\",\n        \"seat\": \"0\",\n        \"price\": \"15\",\n        \"offer\": \"10\",\n        \"image1\": \"default\",\n        \"image2\": \"default\",\n        \"score\": \"0\",\n        \"sport_id\": \"2\",\n        \"company\": {\n            \"id\": 4,\n            \"phone_number\": \"5139000\",\n            \"description\": \"Empresa dedicada a la reserva de canchas de futbol y basket\",\n            \"district\": \"San Isidro\",\n            \"latitude\": \"-12.0896963\",\n            \"length\": \"-77.060111\"\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "SportField"
  },
  {
    "type": "patch",
    "url": "http://www.partidon.pe.hu/api/v1/sportsfields/:id",
    "title": "Update Sport Field",
    "name": "PatchSportField",
    "group": "SportField",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del campo deportivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "material",
            "description": "<p>Material del campo deportivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "size",
            "description": "<p>Tamaño del campo deportivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "seat",
            "description": "<p>Si hay o no asientos.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "price",
            "description": "<p>Precio por hora del campo deportivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "offer",
            "description": "<p>Precio oferta por hora del campo deportivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imagen1",
            "description": "<p>Imagen1 del campo deportivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imagen2",
            "description": "<p>Imagen2 del campo deportivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>Puntaje del campo deportivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sport_id",
            "description": "<p>Identificador del deporte.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "company_id",
            "description": "<p>Identificador de la compañía.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación de la actualización.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "SportField"
  },
  {
    "type": "post",
    "url": "http://www.partidon.pe.hu/api/v1/companies/:id/sportsfields",
    "title": "Register Sport Field",
    "name": "PostSportField",
    "group": "SportField",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "material",
            "description": "<p>Material del campo deportivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "size",
            "description": "<p>Tamaño del campo deportivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "seat",
            "description": "<p>Si hay o No, asientos disponibles.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "price",
            "description": "<p>Precio por el uso del campo deportivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "offer",
            "description": "<p>Precio oferta por el uso del campo deportivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image1",
            "description": "<p>Primera imagen del campo deportivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image2",
            "description": "<p>Segunda imagen del campo deportivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>Puntuación del campo deportivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sport_id",
            "description": "<p>Identificador del tipo de deporte.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "company_id",
            "description": "<p>Identificador de la empresa.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación de registro.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "SportField"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/sports/:id",
    "title": "Show Sport",
    "name": "GetSport",
    "group": "Sport",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del Deporte.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"id\": 1,\n   \"name\": \"Futbol\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Sport"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/sports/",
    "title": "List of Sports",
    "name": "GetSports",
    "group": "Sport",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\": 1,\n        \"name\": \"Futbol\"\n    },\n    {\n        \"id\": 2,\n        \"name\": \"Tenis\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Sport"
  },
  {
    "type": "patch",
    "url": "http://www.partidon.pe.hu/api/v1/sports/:id",
    "title": "Update Sport",
    "name": "PatchSport",
    "group": "Sport",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del Deporte.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del Deporte.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación de la actualización.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Sport"
  },
  {
    "type": "post",
    "url": "http://www.partidon.pe.hu/api/v1/sports/",
    "title": "Register Sport",
    "name": "PostSport",
    "group": "Sport",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del Deporte.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación del registro del deporte.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Sport"
  },
  {
    "type": "delete",
    "url": "http://www.partidon.pe.hu/api/v1/teams/:id",
    "title": "Destroy Team",
    "name": "DeleteTeam",
    "group": "Team",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del equipo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación de la eliminación.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Team"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/teams/:id",
    "title": "Show Team",
    "name": "GetTeam",
    "group": "Team",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del equipo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 2,\n    \"name\": \"El mejor equipo\",\n    \"players\": 10,\n    \"icon_image\": \"default\",\n    \"author_id\": 61,\n    \"sport_id\": 2\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Team"
  },
  {
    "type": "get",
    "url": "http://www.partidon.pe.hu/api/v1/teams",
    "title": "List of Teams",
    "name": "GetTeams",
    "group": "Team",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\": 2,\n        \"name\": \"El mejor equipo\",\n        \"players\": 10,\n        \"icon_image\": \"default\",\n        \"author_id\": 61,\n        \"sport_id\": 2\n    },\n    {\n        \"id\": 4,\n        \"name\": \"Los futboleros\",\n        \"players\": 10,\n        \"icon_image\": \"default\",\n        \"author_id\": 62,\n        \"sport_id\": 2\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Team"
  },
  {
    "type": "patch",
    "url": "http://www.partidon.pe.hu/api/v1/teams/:id",
    "title": "Update Team",
    "name": "PatchTeam",
    "group": "Team",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Identificador del equipo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del equipo deportivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "players",
            "description": "<p>Número de jugadores del equipo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon_image",
            "description": "<p>Imagen del equipo deportivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "author_id",
            "description": "<p>Identificador del jugador que creo el equipo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sport_id",
            "description": "<p>Identificador del deporte.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación de la actualización.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Team"
  },
  {
    "type": "post",
    "url": "http://www.partidon.pe.hu/api/v1/teams",
    "title": "Register Team",
    "name": "PostTeam",
    "group": "Team",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>Token de autentificación.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del equipo deportivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "players",
            "description": "<p>Número de jugadores del equipo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon_image",
            "description": "<p>Imagen del equipo deportivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "author_id",
            "description": "<p>Identificador del jugador que creo el equipo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sport_id",
            "description": "<p>Identificador del deporte.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de confirmación del registro.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/routes.php",
    "groupTitle": "Team"
  }
] });
