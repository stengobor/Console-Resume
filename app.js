console.log("Name: " + "Sofi Engobor")
console.log("Career: " + "Full Stack Developer")
console.log("Description: " + "Looking for a position as Front End Developer.")

let nextLine = 'My Interests:';

console.log(nextLine);

let interests = ['* Graphic Design', '* Cooking', '* Painting'];

for (let i = 0; i < interests.length; i++) {
    console.log(interests[i]);
}

let nextPart = 'My Previous Experience:';

console.log(nextPart);


function displayPosition(companyname, jobtitle, jobdescription) {
        console.log('* ' + companyname + ' - ' + jobtitle + ', ' + jobdescription);
}

displayPosition('Shipt', 'Shipt Shopper', 'Delivered groceries.');
displayPosition('El Barrio', 'Hostess', 'Showed guests to their seats.');
displayPosition('Platos Closet', 'Key Holder', 'Opened/closed the store and delegated.');


let lastPart = 'My Skills:';

console.log(lastPart);


function displaySkill(skillname, skilltype) {
    if (skilltype == true) {
        console.log('*' + ' ' + 'BAM:' + ' ' + skillname);
    } else if (skilltype == false) {
        console.log('*' + ' ' + skillname);
    }
}

displaySkill('Adaptable', true);
displaySkill('Creative', true);
displaySkill('CSS', false);
displaySkill('HTML', false);
displaySkill('Javascript', false);
displaySkill('Great Communicator', true);


  

