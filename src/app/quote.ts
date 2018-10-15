export class Quote {
    public showDescription:boolean;
    constructor(public id:number,public description:string, public name:string, public author:string,public likes:number, public dislikes:number, public completeDate:Date){
        this.showDescription=false
    }
}
