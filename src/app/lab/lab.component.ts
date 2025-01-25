import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MyPreset } from '../../styles/MyTheme';
import { ColorPalette, Preset, Primitive, Semantic } from './theme';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { $dt, palette, updatePreset, updateSurfacePalette, usePreset } from '@primeng/themes';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ColorPickerChangeEvent, ColorPickerModule } from 'primeng/colorpicker';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabel, FloatLabelModule } from 'primeng/floatlabel';
import { KnobModule } from 'primeng/knob';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SpeedDialModule } from 'primeng/speeddial';
import { MessageService } from 'primeng/api';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { FieldsetModule } from 'primeng/fieldset';



@Component({
  selector: 'app-lab',
  standalone: true,
  imports: [
    AccordionModule,
    ButtonModule,
    CheckboxModule,
    ColorPickerModule, 
    CommonModule, 
    DatePickerModule,
    FieldsetModule,
    FloatLabel,
    FloatLabelModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    KnobModule,
    ReactiveFormsModule,
    ScrollPanelModule,
    SpeedDialModule,
    SplitButtonModule,
    ToastModule,
    ToolbarModule
  ],
  providers: [MessageService],
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
✅ differentiate between light and dark mode and update the theme accordingly
- it would be nice to map each design token to components so users can see which components will be affected by changing a particular design token
*/

export class LabComponent implements OnInit {
  constructor(private messageService: MessageService) { }

  currentTheme!: Preset;
  mode: "light" | "dark" = "light";
  modeIcon: "pi pi-sun" | "pi pi-moon" = "pi pi-sun";

  primitiveColors!: Omit<Primitive, 'borderRadius'>
  semanticColors!: {primary: ColorPalette, surface: ColorPalette};

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
    const isDark = window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches;
    this.mode = isDark ? 'dark' : 'light';
    console.log(`we are  in ${this.mode} mode`);
    this.modeIcon = isDark ? 'pi pi-moon' : 'pi pi-sun';
    

    this.setPreset(MyPreset);

    const element = document.querySelector('html');
    if (element) {
      element.classList.toggle('dark');
    }
  }

  // updates the variables in this class with the preset that was just applied
  setPreset(newPreset: Preset) {
    this.currentTheme = newPreset;
    const { borderRadius, ...restPrimitive } = this.currentTheme.primitive;
    const { primary, ...restSemantic} = this.currentTheme.semantic;
    this.primitiveColors = restPrimitive;
    console.log("this.mode", this.mode)
    this.semanticColors= {primary: primary, surface: this.currentTheme.semantic.colorScheme[this.mode].surface};
    console.log(this.primitiveColors);
    console.log(this.semanticColors);
  }

  // updates an entire palette with an array of shades the given hex code
  updatePalette(color: string, $event: ColorPickerChangeEvent, type: 'primitive' | 'semantic' | 'surface'): void {
    const newPalette = palette($event.value as string);

    if (color === 'surface') {
      const newPreset = updateSurfacePalette({
        [this.mode]: newPalette
      });
      usePreset(newPreset);
      this.setPreset(newPreset);
      return
    }

    const newPreset = updatePreset({
      [type]: {
        [color]: newPalette
      }
    });
    usePreset(newPreset);
    this.setPreset(newPreset);
  }

  // updates a single swatch with a hex code
  updateSwatch(color: string, shade: string, hex: string, type: 'primitive' | 'semantic' | 'surface'): void {
    
    if (color === 'surface') {
      const newPreset = updateSurfacePalette({
        [this.mode]: {
          [shade]: hex
        }
      });
      usePreset(newPreset);
      this.setPreset(newPreset);
      return
    }

    const newPreset = updatePreset({
      [type]: {
        [color]: {
          [shade]: hex
        }
      }
    });
    usePreset(newPreset);
    this.setPreset(newPreset);
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

  updateBorders() { 
    // this should update the color used by all components that have a border design token. 
    // the components currently use one of the 'surface' colors for borders, 
    // but if you want to have a unique border color and leave the surface palette alone,
    // we should let people do that 
  }

  toggleDarkMode(): void {
    this.mode = this.mode === 'light' ? 'dark' : 'light';
    this.modeIcon = this.mode === 'light' ? 'pi pi-sun' : 'pi pi-moon';
    const element = document.querySelector('html');
    if (element) {
      element.classList.toggle('dark');
      console.log("setting dark")

      // still uses the current theme, but updates the surface colors to the new mode
      this.setPreset(this.currentTheme);
    }
  }
}
