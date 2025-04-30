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
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { Select, SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { TextareaModule } from 'primeng/textarea';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToggleSwitch, ToggleSwitchModule } from 'primeng/toggleswitch';
import { TreeSelectModule } from 'primeng/treeselect';


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
    PasswordModule,
    RadioButtonModule,
    RatingModule,
    ReactiveFormsModule,
    ScrollPanelModule,
    SelectModule,
    SelectButtonModule,
    SliderModule,
    SpeedDialModule,
    SplitButtonModule,
    TextareaModule,
    ToastModule,
    ToggleButtonModule,
    ToggleSwitchModule,
    ToolbarModule,
    TooltipModule,
    TreeSelectModule
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
  selectedCity2 = { name: 'Istanbul', code: 'IST' };
  selectedCities = [];

  rating = 3;

  stateOptions = [
    { name: 'Option 1', code: '1' },
    { name: 'Option 2', code: '2' },
  ];
  selectedState = { name: 'Option 2', code: '2' };

  sliderValue=10;

  checked1 = true;
  checked2=true;

  // todo make your own values for the treenodes instead of copying primeng
  treeNodes = [
    {
      key: '0',
      label: 'Documents',
      data: 'Documents Folder',
      icon: 'pi pi-fw pi-inbox',
      children: [
        {
          key: '0-0',
          label: 'Work',
          data: 'Work Folder',
          icon: 'pi pi-fw pi-cog',
          children: [
            { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
            { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
          ]
        },
        {
          key: '0-1',
          label: 'Home',
          data: 'Home Folder',
          icon: 'pi pi-fw pi-home',
          children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
      ]
    },
    {
      key: '1',
      label: 'Events',
      data: 'Events Folder',
      icon: 'pi pi-fw pi-calendar',
      children: [
        { key: '1-0', label: 'Meeting', icon: 'pi pi-fw pi-calendar-plus', data: 'Meeting' },
        { key: '1-1', label: 'Product Launch', icon: 'pi pi-fw pi-calendar-plus', data: 'Product Launch' },
        { key: '1-2', label: 'Report Review', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' }
      ]
    },
    {
      key: '2',
      label: 'Movies',
      data: 'Movies Folder',
      icon: 'pi pi-fw pi-star-fill',
      children: [
        {
          key: '2-0',
          icon: 'pi pi-fw pi-star-fill',
          label: 'Al Pacino',
          data: 'Pacino Movies',
          children: [
            { key: '2-0-0', label: 'Scarface', icon: 'pi pi-fw pi-video', data: 'Scarface Movie' },
            { key: '2-0-1', label: 'Serpico', icon: 'pi pi-fw pi-video', data: 'Serpico Movie' }
          ]
        },
        {
          key: '2-1',
          label: 'Robert De Niro',
          icon: 'pi pi-fw pi-star-fill',
          data: 'De Niro Movies',
          children: [
            { key: '2-1-0', label: 'Goodfellas', icon: 'pi pi-fw pi-video', data: 'Goodfellas Movie' },
            { key: '2-1-1', label: 'Untouchables', icon: 'pi pi-fw pi-video', data: 'Untouchables Movie' }
          ]
        }
      ]
    }
  ];
  selectedTreeNodes: any;


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
