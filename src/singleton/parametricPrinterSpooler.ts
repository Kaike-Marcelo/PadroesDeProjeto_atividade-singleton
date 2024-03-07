// import type { PrinterJob } from '../types.js';

// export class ParametricPrinterSpooler {

//     private static instances : ParametricPrinterSpooler[]
//     private jobs : Array<PrinterJob>
//     private _name : String

//     private constructor(name : String) {
//         this._name = name;
//         this.jobs = []
//     }

//     public static getInstance(name : String) {

//         let instance = ParametricPrinterSpooler.instances.find(inst => inst.name === name);

//         if (!instance) {
//             instance = new ParametricPrinterSpooler(name)
//             ParametricPrinterSpooler.instances.push(instance)
//             return instance

//         } else {
//             return instance
//         }

//     }

//     public addJob(job : PrinterJob) {
//         this.jobs.push(job)
//     }

//     public getNextJob() : PrinterJob | undefined {
//         return this.jobs[0]
//     }

//     public listAllJobs() : Array<PrinterJob> {
//         return this.jobs
//     }

//     public clearJobs() {
//         this.jobs = []
//     }

//     public get name() : String {
//         return this._name
//     }
// }

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

    public addJob(job: PrinterJob) {
        this.jobs.push(job);
    }

    public getNextJob(): PrinterJob | undefined {
        return this.jobs.shift();
    }

    public listAllJobs(): Array<PrinterJob> {
        return this.jobs;
    }

    public clearJobs() {
        this.jobs = [];
    }

    public get name(): string {
        return this._name;
    }
}
