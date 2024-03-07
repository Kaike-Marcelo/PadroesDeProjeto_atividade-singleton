export class ParametricPrinterSpooler {
    constructor(name) {
        this.jobs = [];
        this._name = name;
        this.jobs = [];
    }
    static getInstance(name) {
        if (!ParametricPrinterSpooler.instances[name]) {
            ParametricPrinterSpooler.instances[name] = new ParametricPrinterSpooler(name);
        }
        return ParametricPrinterSpooler.instances[name];
    }
    addJob(job) {
        this.jobs.unshift(job);
    }
    getNextJob() {
        return this.jobs.pop();
    }
    listAllJobs() {
        return [...this.jobs];
    }
    clearJobs() {
        this.jobs = [];
    }
    get name() {
        return this._name;
    }
}
ParametricPrinterSpooler.instances = {};
