import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { clone } from 'lodash-es';
import { DebugBlockComponent } from '../../blocks/debug-block/debug-block.component';
import { MappingBlockComponent } from '../../blocks/mapping-block/mapping-block.component';

@Component({
  selector: 'app-blocks-workflow',
  templateUrl: './blocks-workflow.component.html',
  styleUrls: ['./blocks-workflow.component.scss']
})
export class BlocksWorkflowComponent implements OnInit {

  @Input() blocks = [];
  @Input() models = [];
  @Input() context = {};

  @Output() workflowComplete = new EventEmitter();

  constructor(public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    // We dynamically add Angular components to the view using addBlock, popping them off the flow stack after yielding a subscription

    let flow = [
      { "component": MappingBlockComponent, "config": { "mapping": "uuid()" } },
      { "component": DebugBlockComponent, "config": {} },
    ]

    function addBlock(parent, block, config, model) {
      const component = parent.viewContainerRef.createComponent(block);
      component.instance.config = config;
      component.instance.model = model;
      component.instance.ngOnChanges({}); // Force change now we have set the config and model inputs
      return component;
    }
    // We could manually use like this:
    // const mappingBlock = addBlock(this, MappingBlockComponent, {"mapping": "uuid()"}, {});
    //console.dir(mappingBlock);

    //mappingBlock.instance.output.subscribe((value) => {
    //console.log(value);
    //addBlock(this, DebugBlockComponent, {}, value);
    // });

    // But instead, we add  block components specified in the flow array, and after each component has output, add the next block if any, feeding the value from the last output:
    let model = {}; // we start with no data output
    let activeFlow = 0; // start with the first flow item (that uses MappingBlockComponent, with a specific config and empty model).
    // while there are still flows to loop through, we add the next block, and subscribe to its output, which we then use to add the next block, and so on.
    function nextFlow(parent) {
      let component = flow[activeFlow].component;
      let config = flow[activeFlow].config;
      console.log("adding block", config)
      let block = addBlock(parent, component, config, model);
      block.instance.output.subscribe((value) => {
        console.log("block output", value);
        model = value;
        activeFlow++;
        if (activeFlow < flow.length) {
          nextFlow(parent);
        }
      });
      console.log("subscribing to block");
    }
    nextFlow(this);
  }

  updateModel(modelNumber, value) {
    // console.log({ modelNumber, value });
    // console.log(this.models);
    this.models = [...this.models.slice(0, modelNumber), value, ...this.models.slice(modelNumber + 1)];
    // Force change
    this.blocks = [...this.blocks];
    // Output as complete workflow if final block is causing the updating
    if (modelNumber >= this.blocks.length) {
      this.workflowComplete.emit(value);
    }
  }

  runWorkflow() {
    if (this.models.length > 0) {
      this.models[0] = clone(this.models[0]);
    }
  }
}
