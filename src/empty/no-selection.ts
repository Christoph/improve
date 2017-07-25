import {EventAggregator} from 'aurelia-event-aggregator';
import {autoinject} from 'aurelia-framework';


@autoinject
export class NoSelection {

    constructor(ea: EventAggregator){
     this.ea = ea;
     this.message = "No Route Selected";

     this.sendMessage();
    }

    sendMessage(){
        console.log("send:"+this.message)
        this.ea.publish('model_data', this.message);
    }

}
