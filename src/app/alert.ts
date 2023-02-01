export class Alert {
    constructor(
        public id: number,
        public type: AlertType,
        public title: string,
        public message: string,
        public timeout: number
    ) {}
}

export enum AlertType {
    success = 0,
    warning = 1,
    error = 2,
    info = 3
}