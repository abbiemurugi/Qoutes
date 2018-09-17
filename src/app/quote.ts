export class Quote {
    public showDescription:boolean;
    constructor(public id:number,public description:string, public name:string, public author:string, public createDate:Date){
        this.showDescription=false
    }
}
