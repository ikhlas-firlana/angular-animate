import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations: [
    trigger('matItemState', [
      //
      state('normal', style({
        'background-color': 'red',
        // transform: 'translateY(0)',
      })),
      state('highlighted', style({
        'background-color': 'blue',
        // transform: 'translateY(100px)',
      })),
      transition('normal <=> highlighted', animate(8000))
    ]),
    trigger('wildItemState', [
      //
      state('normal', style({
        'background-color': 'red',
        width: '80px',
        height: '80px',
        // transform: 'translateY(0)',
      })),
      state('highlighted', style({
        'background-color': 'blue',
        width: '80px',
        height: '80px',
        // transform: 'translateY(100px)',
      })),
      state('shrunken', style({
        'background-color': 'green',
        width: '40px',
        height: '40px',
        // transform: 'translateY(100px)',
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'yellow',
        }),
        animate(400, style({
          'background-color': 'purple',
          width: '40px',
          height: '40px',
        })),
        animate(600),
        // animate(4000, style({
        //   'background-color': 'yellow',
        // })),
        // animate(6000, style({
        //   'background-color': 'purple',
        // })),
      ]),
    ]),
    trigger('list', [
      //
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)',
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
        }),
        animate(600)
      ]),
      transition('* => void', [
        animate(600, style({
          transform: 'translateX(100px)',
          opacity: 0,
        }))
      ])
    ]),
  ],
})
export class FormComponent implements OnInit {
  state = 'normal';
  wildState = 'normal';
  data: string[] = [
    'HELLO This Dummy Data',
    'Again dummy data',
  ];
  item: string;

  constructor() { }

  ngOnInit() {
  }

  private onAdd(value: string): void {
    console.log('run add');
    this.data.push(value);
    this.data.splice(0, 1);
    this.item = '';
  }

  onAddAnimate_one(value: string): void {
   this.onAdd(value);
   this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
   this.wildState === 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }

  onAddAnimate_two(value: string): void {
    this.onAdd(value);
    this.wildState = 'shrunken';
  }
}
