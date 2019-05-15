/*--------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------SKILLS-------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------*/

var el_skills = document.getElementById('skills');
el_skills.innerHTML = '';
for(let i =0;i<skills.length;i++){
   newSkill = document.createElement("div");
   newSkill.setAttribute('class', 'skill');
   newSkill.innerText = skills[i];
   el_skills.appendChild(newSkill);
}

/*--------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------ACHIEVEMENTS----------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------*/

var el_tree = document.getElementById('tree');
el_tree.innerHTML = '';
for(let i=0;i<achievements.length;i++){
   newAchievement = document.createElement("div");
   newAchievement.setAttribute('class', 'event');

   newName = document.createElement("div");
   newName.innerText = achievements[i].name;
   newName.setAttribute('class', 'name');
   newAchievement.appendChild(newName);

   newTechs = document.createElement("div");
   newTechs.setAttribute('class', 'techgrp');
   for(let j=0;j<achievements[i].technologies.length;j++){
      newTechEl = document.createElement("span");
      newTechEl.innerText = achievements[i].technologies[j];
      newTechEl.setAttribute('class', 'tech');

      newTechs.appendChild(newTechEl);
   }
   newAchievement.appendChild(newTechs);

   el_tree.appendChild(newAchievement);
}
