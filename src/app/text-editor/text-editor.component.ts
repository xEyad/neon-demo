import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {

  value:string = "NEON";
  @Output() valueChanged = new EventEmitter<string>();
  constructor() { }
  emit()
  {
    this.valueChanged.emit(this.value);
  }
  ngOnInit() {
  }

}
