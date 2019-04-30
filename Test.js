let Notify = require('./PostService');
let Noti = new Notify(null);
    let EventData = {
	"Option":"SendNotify",	
	"data": {
				"url":"null",
				"label": "Entrada 1",
				"input": false,
				"button": "null",
				"alerta": false,
				"id_EventComponent": "2",
				"eventDate": "2019-04-23 09:26:39",
				"validity":5
			}
};
	
Noti.SendEvent(EventData,(err,data)=>{
    console.log(data)
})