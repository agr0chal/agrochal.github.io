var prjList = document.getElementById('prj-list');
prjList.innerHTML = '';
for(let i=0;i<projects.length;i++){
   newProject = document.createElement("div");
   newProject.setAttribute('class', 'prj-el');

   /*IMAGE*/
   newImageBox = document.createElement("div");
   newImageBox.setAttribute('class', 'prj-img');

   newImage = document.createElement("img");
   newImage.src = "img/project" + i + ".PNG";

   newImageBox.appendChild(newImage);
   /*NAME*/
   newName = document.createElement("h3");
   newName.setAttribute('class', 'prj-title');
   newName.innerText = projects[i].name;
   /*TECH*/
   newTechGroup = document.createElement("div");
   newTechGroup.setAttribute('class', 'prj-tech techgrp');
   for(let j=0;j<projects[i].technologies.length;j++){
      newTechEl = document.createElement("span");
      newTechEl.setAttribute('class', 'tech');
      newTechEl.innerText = projects[i].technologies[j];
      newTechGroup.appendChild(newTechEl);
   }
   /*DESC*/
   newDesc = document.createElement("div");
   newDesc.setAttribute('class', 'prj-desc');
   newDesc.innerText = projects[i].desc;
   /*BUTTON*/
   newButton = document.createElement("a");
   newButton.setAttribute('class', 'prj-btn');
   newButton.href = projects[i].link;
   newButton.target = "_blank";
   newSpan = document.createElement("span");
   newSpan.innerText = "Podgląd";
   newButton.appendChild(newSpan);
   /*ALL TOGETHER*/

   newProject.appendChild(newImageBox);
   newProject.appendChild(newName);
   newProject.appendChild(newTechGroup);
   newProject.appendChild(newDesc);
   newProject.appendChild(newButton);
   prjList.appendChild(newProject);
}
