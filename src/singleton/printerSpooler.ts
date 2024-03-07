import type { PrinterJob } from '../types.js';

export class PrinterSpooler {

    private static instance : PrinterSpooler
    private jobs : Array<PrinterJob>

    private constructor() {
        this.jobs = []
    }

    public static getInstance() {
        if (!PrinterSpooler.instance) {
            PrinterSpooler.instance = new PrinterSpooler()
            return PrinterSpooler.instance
            
        } else {
            return PrinterSpooler.instance
        }
    }

    public addJob(job : PrinterJob) {
        this.jobs.unshift(job)
    }

    public getNextJob() : PrinterJob | undefined {
        return this.jobs.pop()
    }

    public listAllJobs() : Array<PrinterJob> {
        return [...this.jobs]
    }

    public clearJobs() {
        this.jobs = []
    }
}
