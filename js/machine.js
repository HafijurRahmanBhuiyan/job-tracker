function remove(id){
    document.getElementById(id).remove();
    let totalJob = document.getElementsByClassName("total-job");
    for(const job of totalJob){
        job.innerText = job.innerText - 1;
    }
}

