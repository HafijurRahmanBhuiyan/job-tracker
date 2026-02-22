document.getElementById("interview-1")
    .addEventListener('click',function(){
        const badge = document.getElementById("replace-1");
        badge.innerText = "INTERVIEW";
        badge.classList.add("bg-emerald-100/40");
        badge.classList.add("text-green-500");
        badge.classList.remove("bg-slate-200");
        badge.classList.remove("bg-red-100/40");
        badge.classList.remove("text-red-600");
        const interviewCount = document.getElementById("count-interview");
        interviewCount.innerText = Number(interviewCount.innerText) + 1;

    })