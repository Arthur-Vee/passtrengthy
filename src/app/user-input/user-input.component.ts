import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
  
})


export class UserInputComponent {

  passwordForm!:FormGroup;
  progressBarColor:string = "warn";
  progressBarValue!:number;
  password!:string;

  sectionOne!:string
  sectionTwo!:string
  sectionThree!:string




  constructor(private formBuilder:FormBuilder){
      this.passwordForm = this.formBuilder.group({
        password:["", Validators.required],
      })
  }

  getProgressColor(progressBarColor:string){
    progressBarColor = this.progressBarColor
    return progressBarColor
  }

  calculateStrenght(){

    var hasLetters = false;
    var hasNumbers = false;
    var hasSymbols = false;

   
    for(var char of this.passwordForm.value.password){
      hasLetters = hasLetters || /[a-zA-Z]/.test(char)
      hasNumbers = hasNumbers || /[0-9]/.test(char);
      hasSymbols = hasSymbols || /[^\w\s]/.test(char);
      
    }
    
    if((!hasLetters || !hasNumbers || !hasSymbols) && this.passwordForm.value.password.length < 1){
      this.sectionOne = ""
      this.sectionTwo = ""
      this.sectionThree = ""
    }
    if(this.passwordForm.value.password.length > 0 && (this.passwordForm.value.password.length <= 7)){
      this.sectionOne = "easy"
      this.sectionTwo = "easy"
      this.sectionThree = "easy"
    }
    if((hasLetters || hasNumbers || hasSymbols) && this.passwordForm.value.password.length > 8){ 
      this.sectionOne = "easy"
      this.sectionTwo = "defaultPasswordStrengthColor"
      this.sectionThree = "defaultPasswordStrengthColor"
      
    }
    if((hasLetters && hasNumbers && this.passwordForm.value.password.length >= 8)){
      this.sectionOne = "medium"
      this.sectionTwo = "medium"
      this.sectionThree = "defaultPasswordStrengthColor"
    }
    if((hasLetters && hasSymbols) && this.passwordForm.value.password.length >= 8){
      this.sectionOne = "medium"
      this.sectionTwo = "medium"
      this.sectionThree = "defaultPasswordStrengthColor"
      
    }
    if((hasNumbers && hasSymbols) && this.passwordForm.value.password.length >= 8){
      this.sectionOne = "medium"
      this.sectionTwo = "medium"
      this.sectionThree = "defaultPasswordStrengthColor"
    }
    if((hasLetters && hasNumbers && hasSymbols) && this.passwordForm.value.password.length >= 8){
      this.sectionOne = "strong"
      this.sectionTwo = "strong"
      this.sectionThree = "strong"
    }
  }

}
