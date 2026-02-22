document.getElementById("rejected-1")
    .addEventListener('click',function(){
        const badge = document.getElementById("replace-1");
        badge.innerText = "REJECTED";
        badge.classList.remove("bg-emerald-100/40");
        badge.classList.remove("text-green-500");
        badge.classList.remove("bg-slate-200");
        badge.classList.add("bg-red-100/40");
        badge.classList.add("text-red-600");
        const rejectedCount = document.getElementById("count-rejected");
        rejectedCount.innerText = Number(rejectedCount.innerText) + 1;

    })