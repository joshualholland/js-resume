console.log('Name:');
let name = 'Joshua Holland'
console.log(name.toUpperCase());
console.log('Career: Software Developer'); 
console.log('Description: I love learning. I am a man of many hobbies because I hate being bored.');
console.log('My Interests:');
console.log('* Photography');
console.log('* Cats');
console.log('* Biking');
console.log('* Guitar');
console.log('* Gaming');
// previous experience position function
console.log('My Previous Experience:');
function displayPosition(company, title, description) {
    console.log(company, title, description);
};
displayPosition("* O'Henry's Coffees -", "Barista -", "Make Lattes");
displayPosition("* Van's -", "Shift Leader -", "Lead teams of sale's associates to make sales goals and maintain store");
displayPosition("* Best Buy -", "Sale's Associate -", "Sold and lead classes on cameras including Sony, Canon, and Nikon(Sony's the best)"); 
// true/false cool skills
console.log("My Skills:");
function displaySkill(skill, coolness) {
    if (coolness && true) {
        console.log('BAM:', skill)
    } else {
        console.log(skill)
    }
    
};
displaySkill("* Photography", 'coolness && true');
displaySkill("* guitar", 'coolness && true');
displaySkill("* gaming",);
displaySkill("* HTML",);
displaySkill("* CSS", 'coolness && true');
displaySkill("* Downhill mountain biking", 'coolness && true');
