import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MyPreset } from '../../styles/MyTheme';
import { Preset, Primitive, Semantic } from './theme';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { palette, updatePreset, usePreset } from '@primeng/themes';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { ColorPickerChangeEvent, ColorPickerModule } from 'primeng/colorpicker';
import { SpeedDialModule } from 'primeng/speeddial';
import { MessageService } from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-lab',
  standalone: true,
  imports: [
    AccordionModule,
    ButtonModule,
    ColorPickerModule, 
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    SpeedDialModule,
    SplitButtonModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss']
})

export class LabComponent implements OnInit {
  constructor(private messageService: MessageService) { }

  currentTheme!: Preset;

  primitiveColors!: Omit<Primitive, 'borderRadius'>
  semanticColors!: Pick<Semantic, 'primary'>

  speedDialItems = [
    { icon: 'pi pi-pencil'},
    { icon: 'pi pi-refresh'},
    { icon: 'pi pi-trash'},
    { icon: 'pi pi-upload'},
    { icon: 'pi pi-external-link'}
  ];

  items = [
    {label: 'Update',command: () => {this.success();} },
    { label: 'Delete',command: () => {this.info();} },
    { label: 'Angular Website', url: 'http://angular.io' },
    { label: 'Upload', command: () => {this.info();} }
  ];

  ngOnInit(): void {
    this.setPreset(MyPreset);
  }

  setPreset(newPreset: Preset) {
    this.currentTheme = newPreset;
    const { borderRadius, ...restPrimitive } = this.currentTheme.primitive;
    const { primary, ...restSemantic} = this.currentTheme.semantic;
    this.primitiveColors = restPrimitive;
    this.semanticColors= {primary: primary};
    console.log(this.primitiveColors);
    console.log(this.semanticColors);
  }

  // creates a new palette with the given hex code
  updatePalette(color: string, $event: ColorPickerChangeEvent, type: 'primitive' | 'semantic') {
    const newPalette = palette($event.value as string);
    const newPreset = updatePreset({
      [type]: {
        [color]: newPalette
      }
    });
    usePreset(newPreset);
    this.setPreset(newPreset);
  }

  updateSwatch(color: string, ) {
    // const newPalette = palette($event.value as string);
    // const newPreset = updatePreset({
    //   primitive: {
    //     [color]: newPalette
    //   }
    // });
    // usePreset(newPreset);
    // this.setPreset(newPreset);
  }

  // custom sorting function for palette keys
  sortPaletteKeys = (a: any, b: any) => {
    return parseInt(a.key) - parseInt(b.key);
  }

  // for toast displaying
  success() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Success Toast' });
  }

  warn() {
    this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Warning Toast' });
  }

  info() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Info Toast' });
  }

}
