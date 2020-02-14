import {FlatTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name:string;
  children?: FoodNode[];

}

const TREE_DATA: FoodNode[] = [
  {
    name: 'session',
    children: [
      {name: "session 123",
          children: [
          {name: "5e45131ecb622e1aa8c29931",
            children: [
              {name: "5e45120d7376311c7c2fa679"},
              {name: "5e38451766b2871114d3111a",
                children: [
                  {name: "5e397872e408f156acd3d474"},
                  {name: "135"},
                  {name: "1"},
                  {name: "thomas"},
                  {name: "good"},
                  {name: "medecin"},        
                ]},
            ]
          }
          ]
      }
    ]
  }]
          
          
            
        

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
})
export class SessionComponent {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }



  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
