import { Component } from '@angular/core';
import { MatChipInputEvent, MatChipEditedEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { HttpClient } from '@angular/common/http';
import { FormArray,FormControl, FormGroup, Validators } from '@angular/forms';
export interface Tags {
  name: string;
}
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
constructor(private http:HttpClient){
}
 postedData:any[]=[];
 postdata = new FormGroup<any>({
  'title':new FormControl('',Validators.required),
  'description': new FormControl('', Validators.required),
  'tags': new FormArray([
    this.initSection(this),
    ]),
 })

onSubmit(){
  console.log(this.postdata.value);
// this.http.post("http://localhost:5000/submit", this.postdata.value).subscribe((a)=>{
//   console.log(a);
// }
// );
}

initSection(packages:any) {
  return new FormGroup({
    tagName: new FormControl(packages.tagName)
  });
}

//  onAdd(controlName: string) {
//     const control = new FormControl(null,Validators.required);
//     (<FormArray>this.postdata.get(controlName)).push(control);
//   }
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: Tags[] = [];

  add(event: MatChipInputEvent, packages:any): void {
    const value = (event.value || '').trim();
    const control = <FormArray>this.postdata.get('tags');
    control.push(this.initSection(packages));
    // Add our Tags
    if (value) {
      this.tags.push({name: value});
      this.postedData=this.tags;
      console.log(this.postedData)
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(Tags: Tags): void {
    const index = this.tags.indexOf(Tags);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  edit(Tags: Tags, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove Tags if it no longer has a name
    if (!value) {
      this.remove(Tags);
      return;
    }

    // Edit existing Tags
    const index = this.tags.indexOf(Tags);
    if (index > 0) {
      this.tags[index].name = value;
    }
  }
}
