const MilestonesData =JSON.parse(data).data

// loadMilestones
function loadMilestones(){
   const Milestone =document.querySelector(".All-Milestone")
   Milestone.innerHTML = `${MilestonesData.map(function(Milestone){
    return `<div class="milestone boder-b" id = "${Milestone._id}">
    <div class="flex">
        <div class="checkbox">
            <input type="checkbox" class="checkbox" onclick="markMilestone(this,${Milestone._id})">
        </div>
        <div onclick='OpenMilestone(this, ${Milestone._id})'>
            <p>${Milestone.name}
            <span><i class="fas fa-chevron-down"></i></span>
            </p>
        

       </div>                
     </div>
<!-- course-Milestone-hiddenPanale-section-start  -->
     <div class="hidden-panale">
     ${Milestone.modules.map(function(modules){
        return `
         <div class="module boder-b">
        <p>
          ${modules.name}
        </p>
      </div>`
     }).join("")}
     </div>
<!-- course-Milestone-hiddenPanale-section-end -->
    </div>
</div>`
   }).join("")}`
}

function OpenMilestone(milestoneElement, id){
 const currentPanale = milestoneElement.parentNode.nextElementSibling
 const showPanel = document.querySelector(".show")
const activee = document.querySelector(".active")
if(activee && !milestoneElement.classList.contains('active')){
    activee.classList.remove('active')
}
milestoneElement.classList.toggle('active')


if(!currentPanale.classList.contains('show') && showPanel){
    showPanel.classList.remove('show')
}
 currentPanale.classList.toggle('show')
 showMilestone(id)
}

function showMilestone(id){
    const image = document.querySelector('.image')
    const title = document.querySelector('.title') 
    const description = document.querySelector('.details')

image.src=MilestonesData[id].image
title.innerText=MilestonesData[id].name
description.innerText=MilestonesData[id].description
}
const image = document.querySelector('.image')
image.onload =function (){
    this.style.opacity = '1'; 
}

function markMilestone ( checkbox , id){
    const fullMilestone = document.querySelector(".All-Milestone")
    const doneList = document.querySelector(".doneList")
    const done = document.getElementById(id)
if(checkbox.checked){
    fullMilestone.removeChild(done)
    doneList.appendChild(done)
}
else{
    doneList.removeChild(done)
    fullMilestone.appendChild(done)
 const divs = document.querySelectorAll(".All-Milestone .milestone"),
    listItem = [];
    divs.forEach(div =>listItem.push(div))
    listItem.sort((a,b) => a.id - b.id)
    listItem.forEach(done => fullMilestone.appendChild(done))

}

}



loadMilestones()