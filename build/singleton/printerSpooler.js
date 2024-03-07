export class PrinterSpooler {
    constructor() {
        this.jobs = [];
    }
    static getInstance() {
        if (!PrinterSpooler.instance) {
            PrinterSpooler.instance = new PrinterSpooler();
            return PrinterSpooler.instance;
        }
        else {
            return PrinterSpooler.instance;
        }
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
}
