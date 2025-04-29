import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DatePickerModule } from 'primeng/datepicker';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { FloatLabel, FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SpeedDialModule } from 'primeng/speeddial';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-primeng',
  imports: [
    AccordionModule,
    ButtonModule,
    CheckboxModule,
    ColorPickerModule,
    CommonModule,
    DatePickerModule,
    DividerModule,
    FieldsetModule,
    FloatLabel,
    FloatLabelModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    KnobModule,
    ListboxModule,
    MultiSelectModule,
    ReactiveFormsModule,
    ScrollPanelModule,
    SpeedDialModule,
    SplitButtonModule,
    ToastModule,
    ToolbarModule,
    TooltipModule
  ],
  templateUrl: './primeng.component.html',
  styleUrl: './primeng.component.scss'
})
export class PrimengComponent {

  constructor(private messageService: MessageService, private cdr: ChangeDetectorRef) { }
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

  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  selectedCity = { name: 'Rome', code: 'RM' };
  selectedCities = [];

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
