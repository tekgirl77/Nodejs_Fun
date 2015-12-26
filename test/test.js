/*jslint node: true */
"use strict";
var request = require('request');



var options = {
    url: 'https://app.close.io/hackwithus/',
    contentType: 'application/json',
    method: 'POST',
    json: {
        "first_name": "Salle",
        "last_name": "Ingle",
        "email": "tekgirl77@gmail.com",
        "phone": "+1.608.469.1600",
        "cover_letter": "Hi There!\n\nI was very excited to come across your DevOps job posting on careers.stackoverflow.com and the technologies being used in your stack!  I have years of infrastructure, networking, full-stack development, DevOps and leadership experience.\n\nFor the past couple of years, I have been working 100% remote as a DevOps Engineer for Security Innovation, a security training and consulting company.  I have enjoyed working with other passionate individuals and being empowered to be forward thinking, independent, and creative with my own work.  I love automation and efficiency. I loved having opportunities to optimize the build, deploy, and service delivery processes using bash, multiple scripting languages, and AWS resources.  I truly enjoyed having the pleasure of working with top-notch development teams on NodeJS/ExpressJS and Django full-stack web development projects.\n\nI excel and thrive on continually learning and diving into new and uncharted territories.  I love solving complex problems with clean and elegant solutions.  I am a highly motivated self-starter who takes initiative, seeks understanding, and works well both collaboratively and independently.  I have a very diverse background with a proven track record of delivering excellent service and rising to any occasion presented.\n\nI am currently looking for freelance work or a position with the right organization; and I must say that I am very excited to have come across this particular opportunity.  I look forward to hearing from you soon!\n\nCheers,\n\nSalle J. Ingle",
        "urls": ["https://github.com/tekgirl77", "https://www.linkedin.com/in/salleingle", "http://sallesslice.com"]
    }
};

request(options, function (error, response, body) {
    if (error) {
        console.log("error is: " + error);
    }
    console.log("response is: " + response.statusCode);
    var i;
    for (i in body) {
        if (body.hasOwnProperty(i)) {
            console.log(i + " : " + body[i]);
        }
    }
    console.log("body keys are: " + Object.keys(body));
    console.log("body.further_reading: " + body.further_reading);
    console.log("body.you_are_awesome: " + body.you_are_awesome);
    console.log("body.id: " + body.id);
});
