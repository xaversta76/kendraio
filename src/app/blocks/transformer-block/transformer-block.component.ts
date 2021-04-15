import {Component, OnDestroy, OnInit} from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import { get, has } from 'lodash';
import { v4 } from 'uuid';

@Component({
  selector: 'app-transformer-block',
  templateUrl: './transformer-block.component.html',
  styleUrls: ['./transformer-block.component.scss']
})
export class TransformerBlockComponent  extends BaseBlockComponent implements OnInit, OnDestroy {

  // a unique identifier for if multiple transformers are active at once
  uniqueId = v4();
  code = '';
  hasError = false;
  errorMessage = '';
  boundMessageCallback = this.messageCallback.bind(this);

  onConfigUpdate(config: any) {
    this.code = `(function (data) { ${ get(config, 'code', 'return data;') } })(data)`;
  }

  messageCallback(e) {
    if (this.uniqueId !== e.data.uuid) {
      return;
    }
    this.hasError = false;
    const frame = document.getElementById('sandboxed') as HTMLIFrameElement;
    if (e.origin === 'null' && e.source === frame.contentWindow) {
      const data = e.data;
      if (has(data, 'error')) {
        this.hasError = true;
        this.errorMessage = get(data, 'error');
        return;
      }
      if (has(data, 'result')) {
        this.output.emit(e.data.result);
      }
    }
  }

  ngOnInit() {
    super.ngOnInit();
    window.addEventListener('message', this.boundMessageCallback);
  }

  ngOnDestroy() {
    window.removeEventListener('message', this.boundMessageCallback);
  }

  onData(data: any, firstChange: boolean) {
    const frame = document.getElementById('sandboxed') as HTMLIFrameElement;
    this.hasError = false;
    try {
      frame.contentWindow.postMessage({ code: this.code, data: this.model, uuid: this.uniqueId }, '*');
    } catch (e) {
      this.hasError = true;
      this.errorMessage = e.message;
    }
  }

}
