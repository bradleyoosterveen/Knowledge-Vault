export class Alert {
    constructor(
        public id: number,
        public type: AlertType,
        public title: string,
        public timeout: number,
        public message?: string
    ) {}
}

export enum AlertType {
    success = 0,
    warning = 1,
    error = 2,
    info = 3
}