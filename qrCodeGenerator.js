import { LightningElement } from 'lwc';
import qrcode from './qrcode.js';

export default class QrCodeGenerator extends LightningElement {
    showQRCode = false;
    textValue;
    hasRendered = false;

    handleValue(evt){
        this.textValue = evt.target.value;
        this.showQRCode = false;
    }

    renderedCallback() {
        if(this.hasRendered){
            const qrCodeGenerated = new qrcode(0, 'H');
            qrCodeGenerated.addData(this.textValue);
            qrCodeGenerated.make();
            let element = this.template.querySelector(".qrcode2");
            element.innerHTML = qrCodeGenerated.createSvgTag({});
            this.hasRendered = false;
        }
    }

    handleGenerate(){
        this.hasRendered = true;
        this.showQRCode = true;
    }

    handlePDF(){
        window.print();
    }
}