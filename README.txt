PETICION AL API EJEMPLOS
EJEMPLO 1:

{
"Option":"SendNotify",	
"data": {
            "url": "['https://static.iris.net.co/dinero/upload/images/2009/3/25/75779_151948_1.jpg','http://simadrid.com.co/wp-content/uploads/2017/02/Placa-Madrid.png','http://farm4.static.flickr.com/3115/3097909261_89ae96b462.jpg?v=0']",
            "label": "Dijite la Placa",
            "input": true,
            "button": "null",
            "alerta": true,
            "id_EventComponent": "8",
            "eventDate": "2019-04-30 09:28:39.583",
            "validity": 30000,
            "UID":"POSTMAN",
            "Usuario":"Moviles.ci24"
        }
}

EJEMPLO 2:

{
"Option":"SendNotify",	
"data": {
            "url": "null",
            "label": "Camara 1 ",
            "input": true,
            "button": "null",
            "alerta": false,
            "id_EventComponent": "8",
            "eventDate": "2019-04-30 08:48:39.583",
            "validity": 25000,
            "UID":"POSTMAN",
            "Usuario":"Moviles.ci24"
        }
}