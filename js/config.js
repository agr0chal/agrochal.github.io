/*--------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------SKILLS-------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------*/

var skills = ["JavaScript","PHP","HTML","CSS","RWD","Algorithms","Drupal","C++","GitHub"];

/*--------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------ACHIEVEMENTS----------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------*/
function Achievement(name,technologies){
   this.name = name;
   this.technologies = technologies;
}
var achievements  = [];
var tmp_technologies = ['Drupal','PHP','GitHub'];
var tmp_achievement = new Achievement('Finalist in the Google Code-in 2018 contest with Drupal',tmp_technologies);

achievements.push(tmp_achievement);//-----------------------------------------------------------------------

tmp_technologies = ['C++','Algorithms'];
tmp_achievement = new Achievement('Laureate in the provincial IT competition - Lodz Province 2017/18',tmp_technologies);

achievements.push(tmp_achievement);//-----------------------------------------------------------------------


/*--------------------------------------------------------------------------------------------------------*/
/*------------------------------------------PROJECTS------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------*/

function Project(name,technologies,desc,link){
   this.name = name;
   this.technologies = technologies;
   this.desc = desc;
   this.link = link;
}

var projects = [];
tmp_technologies = ["JavaScript","HTML","CSS","RWD","PHP","MySql"];
tmp_project = new Project('kimbylmoraczewski.pl',tmp_technologies,"Strona internetowa stworzona na potrzeby konkursu Sejmu Dzieci i Młodzieży, jest ona responsywna i napisana w najnowszym standardzie.","http://kimbylmoraczewski.pl/");
projects.push(tmp_project);//---------------------------------------------------------------------------------
