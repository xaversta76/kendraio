import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { select } from 'd3-selection';
import { forceCenter, forceLink, forceManyBody, forceSimulation, Simulation } from 'd3-force';
import { Store } from '@ngrx/store';
import { AppState, getNodesState } from '../../app/state';
import { Subscription } from 'rxjs/Subscription';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { Node } from '../../app/model/node';
import { Link } from '../../app/model/link';
import { drag } from 'd3-drag';
import { event as d3event } from 'd3';

@Component({
  selector: 'page-visualise',
  templateUrl: 'visualise.html'
})
export class VisualisePage implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('svg') svgEl: ElementRef;

  sub: Subscription;

  svg;
  width = 0;
  height = 0;
  color = scaleOrdinal(schemeCategory10);

  simulation: Simulation<Node, Link>;

  nodes;
  links;
  isLoaded = false;

  constructor(public navCtrl: NavController, private store: Store<AppState>, private zone: NgZone) {

  }

  ngOnInit() {
    this.sub = this.store.select(getNodesState).subscribe(({ nodes, links }) => {
      this.nodes = nodes;
      this.links = links;
      console.log({ nodes, links });
    })
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  ngAfterViewInit() {
    this.svg = select(this.svgEl.nativeElement);
    this.width = +this.svgEl.nativeElement.clientWidth;
    this.height = +this.svgEl.nativeElement.clientHeight;
    console.log({ w: this.width, h: this.height });
    this.zone.runOutsideAngular(() => {
      this.initSimulation();
    });
  }

  initSimulation() {
    console.log({ n: this.nodes, l: this.links });
    this.simulation = forceSimulation<Node, Link>()
      .force('link', forceLink()
        .id((n: Node) => n.id).strength(l => 0.01))
      .force('charge', forceManyBody())
      .force('center', forceCenter(this.width / 2, this.height / 2));

    this.links = this.svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(this.links)
      .enter().append("line")
      .attr('stroke', '#999')
      .attr("stroke-width", 1);

    this.nodes = this.svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(this.nodes)
      .enter().append("circle")
      .attr("r", 5)
      .attr("fill", d => this.color(d.type))
      .call(drag()
        .on("start", (d: any) => {
          if (!d3event.active) this.simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on("drag", (d: any) => {
          d.fx = d3event.x;
          d.fy = d3event.y;
        })
        .on("end", (d: any) => {
          if (!d3event.active) this.simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }));

    this.nodes.append('title')
      .text((d: Node) => d.id);

    this.simulation.nodes(this.nodes).on('tick', () => {
      this.links
        .attr("x1", (d) => d.source.x) // function(d) { return d.source.x; })
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      this.nodes
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
    });

    (this.simulation.force('link') as any).links(this.links);
  }
}
