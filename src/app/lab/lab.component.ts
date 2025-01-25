import { Component, OnInit } from '@angular/core';
import { MyPreset } from '../../styles/MyTheme';
import { Primitive, Semantic } from './theme';
import { CommonModule } from '@angular/common';
import { palette } from '@primeng/themes';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-lab',
  standalone: true,
  imports: [
    AccordionModule,
    CommonModule
  ],
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss']
})

/* TODO
- lab should parse the current theme and display it so the user can see every option
- allow the user to edit each option in the theme and see it update the components on the right
- allow users to download and allow theme files 
- display all primeng components
- is it possible: allow users a sandbox to configure their own html so they can see how their theme will look in a particular configuration of UI components
- alternatively, allow users to move around and duplicate the primeng components on the screen
- allow users to generate color gradients that are not the default primitive or semantic colors
- allow users to edit the component design token of each component individually 
*/
export class LabComponent implements OnInit {
  constructor() { }

  // currentTheme: {
  //   primitive: any, 
  //   semantic: any, 
  //   components?: any
  // } = {primitive: {}, semantic: {}};
  currentTheme!: {
    primitive: Primitive 
    semantic: Semantic, 
    components?: any
  }

  primitiveColors!: Omit<Primitive, 'borderRadius'>

  ngOnInit(): void {
    this.currentTheme = MyPreset;

    const { borderRadius, ...rest } = this.currentTheme.primitive;
    this.primitiveColors = rest;

    console.log("primitive",this.primitiveColors.amber);
    //console.log("palette", palette('#f59e0b'))
    for (let color in this.primitiveColors.amber) {
      console.log(color + " ")
    }
    console.log("600", palette('#d97706'))
    console.log("100", palette('#fef3c7'))
    console.log("950", palette('#451a03'))
    console.log("900", palette('#78350f'))
    console.log("800", palette('#92400e'))
    console.log("700", palette('#b45309'))
    console.log("400", palette('#fbbf24'))
    console.log("300", palette('#fcd34d'))
    console.log("200", palette('#fde68a'))
  }

}
