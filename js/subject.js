// render all subject cards into subject-container 

function renderSubject (list) {
    const container = document.getElementById("subject-container");
    container.innerHTML = ""; // clear all existing content 

    if (list.length === 0) {
        container.innerHTML = '<p class="empty-msg">No subjects found.</p>';
        return;
    }

    list.forEach(function(subject) {
        const getGradeInfo = getGradeLetter(subject.grade); //from app.js 

        // create the cards element 
        const card = document.createElement("article");
        card.className = "subject-card";
        card.dataset.id = subject.id;

        // build our inner HTML

        card.innerHTML = `
        <div class="card-header">
            <h3>${subject.name}</h3>
            <span class="badge">${subject.code}</span>
        </div>
        <div class="card-body">
            <div class="grade-badge ${getGradeInfo.css}">
               ${subject.grade}% - ${getGradeInfo.letter}
            </div>
            <p class="credits">Credits: ${subject.credits}</p>
            <p class="description">${subject.description}</p>
        </div>
        `;
        
        container.appendChild(card);
    });
}

// run when dom is ready

document.addEventListener("DOMContentLoaded", function() {
    renderSubject(subjects);
});

// reaserch about methods 