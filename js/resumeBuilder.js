var bio ={
    "name" : "Jason Chen",
    "role" : "Front-end Web developer",
    "contact": {
        "mobile": "+886-975392085",
        "email": "r01941003@ntu.edu.tw",
        "github": "red1029ms27",
        "location":"Taiwan"
    },
    "welcomemessage": "歡迎,Welecome to my Jason Chen website",
    "skills": ["Semiconductor optical inspection", "HTML","CSS","Javascript","Python"],
    "bioPic": "images/photo_FB.jpg"
};

var education = {
    "schools": [
        {
            "name": "National Taiwan University",
            "location": "Taiwan",
            "major": "Photonics and Optoelectronics",
            "Thesis": "The Optical Characterization of Epitaxial SiGe, Al2O3 Passivated Si and Amorphous Silicon",
            "Period": "2012 - 2014",
            "degree": "M.A. Engineering",
            "url":"www.ntu.edu.tw",
        },
        {
            "name": "National Taiwan University",
            "location": "Taiwan",
            "major": "Engineering Science Ocean Engineering",
            "Project": "The Impact of Coherent Injection-Locking with Low Front-Facet Reflectance for DWDM-PON Transmission",
            "Period": "2008 - 2012",
            "degree": "B.A. Engineering",
            "url":"www.ntu.edu.tw"
        }    
    ],

    "OnlineCourse":
        {
            "Course":"Introduction to Interactive Programming in Python (Part 1)",
            "School":"Coursera",
            "Time": "April-2016"
        }
};

var work = {
    "jobs":
        {
			"employer": "KLA-Tencor",
			"title": " Applications Engineer",
			"location": "Taiwan",
			"WorkPeriod": "September 2014 - January 2016",
			"description": ["1: Cooperated with TSMC module customers to develop inspection recipes for detecting killer defects","2: Conducted pre-sales activities to promote products","3: Worked with multi-cultural colleagues, internal sales","4: Marketing and engineering teams to develop the product architect"
            ]
        }
};


var projects = {
    "project": [
        {
			"title": "Pong Game by Python",
			"datesWorked": "January 2016 - April 2016",
			"description": "Created an online game using HTML5 Canvas as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
//            "images": "images/ping.jpg",
			"images": ["images/ping.jpg","images/spaceship.png"],
			"url": "http://www.codeskulptor.org/#user41_FCAyAZ3zMv_14.py"
        },
        {
      		"title": "Online Portfolio",
			"datesWorked": "April 2016",
			"description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
			"images": ["images/portfolio.png"]
        }    
    ],
};

//------------------------------Bio Part-----------------------

function displayBio(){

var formattedemail = HTMLemail.replace("%data%",bio.contact.email);
var formattedemobile = HTMLmobile.replace("%data%",bio.contact.mobile);
var formattedegithub = HTMLgithub.replace("%data%",bio.contact.github);
var formattedlocation = HTMLlocation.replace("%data%",bio.contact.location);
var contactinfo =[formattedemail,formattedemobile,formattedegithub,formattedlocation];

var formattedrole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedrole);
var formattedname = HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(formattedname);

    
for (i in contactinfo) {
    $("#topContacts").prepend(contactinfo[i])
    $("#footerContacts").prepend(contactinfo[i]);
}

var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomemessage);
$("#header").append(formattedMessage);
    
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPic);
//    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
//    $("#skills").append(formattedSkill);
//    var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
//    $("#skills").append(formattedSkill);
//    var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
//    $("#skills").append(formattedSkill);
//    var formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
//    $("#skills").append(formattedSkill);
//    var formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
//    $("#skills").append(formattedSkill);
//    repeat the code --> need to loop to replace it
if(bio.skills.length >0) {
    
    $("#header").append(HTMLskillsStart); // add skill at a glance into skills part
    for(var i=0;i<5;i++){
        var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};
}
displayBio()

//------------------------------Work Part-----------------------

//

function displayWork(){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle

    var formattedlocation = HTMLworkLocation.replace("%data%",work.jobs.location);
    var formattedDates = HTMLworkDates.replace("%data%",work.jobs.WorkPeriod);


    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedlocation);
    $(".work-entry:last").append(formattedDates);
    for (i in work.jobs.description){
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs.description[i]);
        $(".work-entry:last").append(formattedDescription);
    }
}
displayWork();
//------------------------------Project Part---------------------

projects.display =function(){
    for (i in projects.project) {
        $("#projects").append(HTMLprojectStart);
        
        var ProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
        $(".project-entry:last").append(ProjectTitle);
        var ProjectPeriod = HTMLprojectDates.replace("%data%", projects.project[i].datesWorked);
        $(".project-entry:last").append(ProjectPeriod);
        var ProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);
        $(".project-entry:last").append(ProjectDescription);
        for (item in projects.project[i].images){
        var ProjectImage = HTMLprojectImage.replace("%data%", projects.project[i].images[item]);
        $(".project-entry:last").append(ProjectImage);
        }
    }
}


projects.display();
//------------------------------Education Part---------------------


//education.dispaly = function(){
function educationWork(){
    for (i in education.schools) {
        $("#education").append(HTMLschoolStart);
        
        var SchoolTitle = HTMLschoolName.replace("%data%", education.schools[i].name);
        $(".education-entry:last").append(SchoolTitle);
        var SchoolPeriod = HTMLschoolDates.replace("%data%", education.schools[i].Period);
        $(".education-entry:last").append(SchoolPeriod);
        var SchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
        $(".education-entry:last").append(SchoolMajor);
        var SchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(SchoolDegree);
        var SchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(SchoolLocation);
    }
}

educationWork()

//------------------------------function test ---------------------

//function locationizer(work_obj){
//    var locationArray =[];
//    
//    var newlocation =work_obj.jobs.location;
//    locationArray.push(newlocation);
//    
//    return locationArray;
//}


//function inName(name) {
//    name = name.trim().spilt("");
//    console.log(name);
//    name[1]=name[1].toUpperCase();
//    name[0]=name[0].slice(0,1).toUpperCase();
//    
//    return name[0] + " "+ name[1];
//}
$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);