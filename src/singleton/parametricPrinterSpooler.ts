import type { PrinterJob } from '../types.js';

export class ParametricPrinterSpooler {

    private static instances: { [key: string]: ParametricPrinterSpooler } = {};
    private jobs: Array<PrinterJob> = [];
    private _name: string;

    private constructor(name: string) {
        this._name = name;
        this.jobs = [];
    }

    public static getInstance(name: string) {
        if (!ParametricPrinterSpooler.instances[name]) {
            ParametricPrinterSpooler.instances[name] = new ParametricPrinterSpooler(name);
        }
        return ParametricPrinterSpooler.instances[name];
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

    public get name(): string {
        return this._name;
    }
}
