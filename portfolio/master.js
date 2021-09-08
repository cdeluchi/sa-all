const cluster = require("cluster");
const os = require("os");
const numOfCpus = os.cpus().length;

cluster.setupMaster({
    exec: `${__dirname}/index.js`,
});

for (let index = 0; index < numOfCpus; index++) {
    cluster.fork();
}

cluster.on("exit", (worker) => {
    console.log(`WORKER ${worker.process.pid} DIED`);
    cluster.fork();
});
