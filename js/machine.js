const allCards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6', 'card-7', 'card-8'];
const interviewCards = [];
const rejectedCards = [];

// Remove Button
function remove(id){
    document.getElementById(id).remove();
    const index = allCards.indexOf(id);
    allCards.splice(index,1);

    if(interviewCards.includes(id)){
        const interviewCardIndex = interviewCards.indexOf(id);
        interviewCards.splice(interviewCardIndex,1);
    }
    if(rejectedCards.includes(id)){
        const rejectedCardIndex = rejectedCards.indexOf(id);
        rejectedCards.splice(rejectedCardIndex,1);
    }
    
    const interviewCount = document.getElementById("count-interview");
    interviewCount.innerText = interviewCards.length;

    const rejectedCount = document.getElementById("count-rejected");
    rejectedCount.innerText = rejectedCards.length;

    let totalJob = document.getElementsByClassName("total-job");
    for(const job of totalJob){
        // job.innerText = job.innerText - 1;
        job.innerText = allCards.length;
    }
    if(allCards.length === 0){
        const noJob = document.getElementById('no-job');
        noJob.classList.remove('hidden')
    }
}

function interview(id){
    if(interviewCards.includes(id) ===false){
        interviewCards.push(id);
    }
    const lastDigit = id.slice(-1);
    const badge = document.getElementById(`replace-${lastDigit}`);
    badge.innerText = "INTERVIEW";
    badge.classList.add("bg-emerald-100/40");
    badge.classList.add("text-green-500");
    badge.classList.remove("bg-slate-200");
    badge.classList.remove("bg-red-100/40");
    badge.classList.remove("text-red-600");
    const interviewCount = document.getElementById("count-interview");
    interviewCount.innerText = interviewCards.length;

    if(rejectedCards.includes(id)){
        const indexOfRejectedCards = rejectedCards.indexOf(id);
        rejectedCards.splice(indexOfRejectedCards,1);
        const rejectedCount = document.getElementById("count-rejected");
        rejectedCount.innerText = rejectedCards.length;
    }
}

function rejected(id){
    if(rejectedCards.includes(id) === false){
        rejectedCards.push(id);
    }
    const lastDigit = id.slice(-1);
    const badge = document.getElementById(`replace-${lastDigit}`);
    badge.innerText = "REJECTED";
    badge.classList.remove("bg-emerald-100/40");
    badge.classList.remove("text-green-500");
    badge.classList.remove("bg-slate-200");
    badge.classList.add("bg-red-100/40");
    badge.classList.add("text-red-600");
    const rejectedCount = document.getElementById("count-rejected");
    rejectedCount.innerText = rejectedCards.length;

    if(interviewCards.includes(id)){
        const indexOfInterviewCards = interviewCards.indexOf(id);
        interviewCards.splice(indexOfInterviewCards,1);
        const interviewCount = document.getElementById("count-interview");
        interviewCount.innerText = interviewCards.length;
    }
}


