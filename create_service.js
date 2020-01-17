var w;

function startWorker() {
    //criar o web worker
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("demo_workers.js");
        }
        w.onmessage = function(event) {

            document.getElementById("result").innerHTML = event.data;
            console.log("Teste");
            pegarLinkInfo()
        
        };
    } else {
        document.getElementById("result").innerHTML = "Você não possui suporte ao Web Worker.";
    }
}

function stopWorker() {
    //finalizando e resetando o web worker
    w.terminate();
    w = undefined;
}
