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

export class LabComponent implements OnInit {
  constructor(private messageService: MessageService, private cdr: ChangeDetectorRef) { }

  currentTheme!: Preset;
  mode: "light" | "dark" = "light";
  modeIcon: "pi pi-sun" | "pi pi-moon" = "pi pi-sun";

  primitiveColors!: Omit<Primitive, 'borderRadius'>
  semanticColors!: { primary: ColorPalette, surface: ColorPalette };

  speedDialItems = [
    { icon: 'pi pi-pencil' },
    { icon: 'pi pi-refresh' },
    { icon: 'pi pi-trash' },
    { icon: 'pi pi-upload' },
    { icon: 'pi pi-external-link' }
  ];

  items = [
    { label: 'Update', command: () => { this.success(); } },
    { label: 'Delete', command: () => { this.info(); } },
    { label: 'Angular Website', url: 'http://angular.io' },
    { label: 'Upload', command: () => { this.info(); } }
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
    const { primary, ...restSemantic } = this.currentTheme.semantic;
    this.primitiveColors = restPrimitive;
    console.log("this.mode", this.mode)
    this.semanticColors = { primary: primary, surface: this.currentTheme.semantic.colorScheme[this.mode].surface };
    console.log(this.primitiveColors);
    console.log(this.semanticColors);
    
    // updates the actual underlying theme 
    usePreset(newPreset);
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

  exportTheme() {
    // Generate the TypeScript file content
    // this should be able to import different themes besides Aura
    const fileContent = `
      import Aura from "@primeng/themes/aura";
      import { definePreset } from "@primeng/themes";

      export const NewPreset = definePreset(Aura, ${JSON.stringify(this.currentTheme, null, 2)});`;

    // Create a Blob for the file
    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });

    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'new-preset.ts'; // File name

    // Trigger the download
    link.click();
    window.URL.revokeObjectURL(link.href);
  }

  handleFileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
  
    if (input?.files?.length) {
      const file = input.files[0];
  
      if (!file.name.endsWith('.ts')) {
        alert('Please upload a valid TypeScript file.');
        return;
      }
  
      const reader = new FileReader();
  
      reader.onload = () => {
        const content = reader.result as string;
  
        try {
          this.validateAndLoadTheme(content);
        } catch (error) {
          alert('Invalid theme file. Please check the file format.');
          console.error('Error processing file:', error);
        }
      };
  
      reader.onerror = () => {
        alert('An error occurred while reading the file.');
      };
  
      reader.readAsText(file);
    }
  }

  validateAndLoadTheme(content: string): void {
    // Should add more validation here
    if (!content.includes('export const ') || !content.includes('definePreset')) {
      throw new Error('Invalid theme file structure.');
    }
  
    // Extract the theme object from the file
    const match = content.match(/definePreset\(.*?,\s*([\s\S]*)\);/);
  
    if (!match || match.length < 2) {
      throw new Error('Unable to extract theme object.');
    }
  
    const themeObjectString = match[1].trim();
  
    try {
      const themeObject = eval(`(${themeObjectString})`);
  
      if (typeof themeObject !== 'object') {
        throw new Error('Invalid theme object.');
      }
  
      // theme doesnt update before the alert pops up! 
      this.setPreset(themeObject);
      this.cdr.detectChanges();
      alert('Theme uploaded and applied successfully!');
    } catch (error: any) {
      throw new Error('Error parsing theme object: ' + error.message);
    }
  }
}
