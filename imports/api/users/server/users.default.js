var fs = Npm.require('fs')
var path = Npm.require('path');


var basePath = path.join(__meteor_bootstrap__.serverDir, "../web.browser/app/users");

usersDefault = [
	{
		"username":"spinard",
		"email":"spinard@trb.fr",
		"password":"spinard123",
		createdAt: new Date(),
		"type":"admin",
		"firstName":"Sébastien",
		"lastName":"PINARD",
		"location":"Lyon",
		"lng":[43.399880, 3.207370],
		"fonction":"administrateur",
		"tel":"479898745",
		"port":"0689654578",
		"photo":"/users/spinard.jpg",
		status : "ready",
	},
	{
		"username":"sduhamel",
		"email":"sduhamel@trb.fr",
		"password":"sduhamel123",
		createdAt: new Date(),
		"type":"admin",
		"firstName":"Stéphane",
		"lastName":"Duhamel",
		"location":"Lyon",
		"lng":[43.399880, 3.207370],
		"fonction":"administrateur",
		"tel":"479898745",
		"port":"0689654578",
		"photo":"/users/default.png",
		status : "ready",
	},
	{
		"username":"edufrenne",
		"email":"edufrenne@trb.fr",
		"password":"edufrenne123",
		createdAt: new Date(),
		"type":"admin",
		"firstName":"Etienne",
		"lastName":"Dufrenne",
		"location":"Nesles",
		"lng":[43.399880, 3.207370],
		"fonction":"administrateur",
		"tel":"479898745",
		"port":"0689654578",
		"photo":"/users/defaultProfile.png",
		status : "ready",
	},
]


usersDefault.forEach((item)=>{
    item.photo=fs.readFileSync(basePath+'/spinard.jpg')
})


module.exports = usersDefault