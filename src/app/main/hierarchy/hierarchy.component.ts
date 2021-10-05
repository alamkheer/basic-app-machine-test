import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { HierarchyData, HierarchyDataInterface } from './dto/hierarchy-data';

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.css']
})
export class HierarchyComponent implements OnInit {
  treeControl = new NestedTreeControl<HierarchyDataInterface>(node => node.children);
  dataSource = new MatTreeNestedDataSource<HierarchyDataInterface>();

  constructor() { 
    this.dataSource.data =new HierarchyData().data;
  }

  ngOnInit(): void {
  }
  hasChild = (_: number, node: HierarchyDataInterface) => !!node.children && node.children.length > 0;

}
