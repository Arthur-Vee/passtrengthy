import { Component, ElementRef, ViewChild } from '@angular/core'



@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']

})


export class UserInputComponent {
  @ViewChild('passwordInput') passwordInput!: ElementRef


  passwordValue!: string

  sectionOne = "defaultPasswordStrengthColor"
  sectionTwo = "defaultPasswordStrengthColor"
  sectionThree = "defaultPasswordStrengthColor"

  calculateStrenght() {
    this.passwordValue = this.passwordInput.nativeElement.value
    var hasLetters = false
    var hasNumbers = false
    var hasSymbols = false
    var hasSpaces = false


    for (var char of this.passwordValue) {
      hasLetters = hasLetters || /[a-zA-Z]/.test(this.passwordValue)
      hasNumbers = hasNumbers || /[0-9]/.test(this.passwordValue);
      hasSymbols = hasSymbols || /[^\w\s]/.test(this.passwordValue);
      hasSpaces = hasSpaces || /\s/.test(this.passwordValue);

    }
    if (this.passwordValue.length < 1 || hasSpaces) {
      this.sectionOne = "defaultPasswordStrengthColor"
      this.sectionTwo = "defaultPasswordStrengthColor"
      this.sectionThree = "defaultPasswordStrengthColor"
    } else if ((this.passwordValue.length > 0 && this.passwordValue.length < 7)) {
      this.sectionOne = "easy"
      this.sectionTwo = "easy"
      this.sectionThree = "easy"
    } else if ((hasLetters && hasNumbers && hasSymbols)) {
      this.sectionOne = "strong"
      this.sectionTwo = "strong"
      this.sectionThree = "strong"
    } else if ((hasLetters && hasSymbols || hasSymbols && hasNumbers || hasLetters && hasNumbers)) {
      this.sectionOne = "medium"
      this.sectionTwo = "medium"
      this.sectionThree = "defaultPasswordStrengthColor"
    } else if ((hasLetters || hasNumbers || hasSymbols)) {
      this.sectionOne = "easy"
      this.sectionTwo = "defaultPasswordStrengthColor"
      this.sectionThree = "defaultPasswordStrengthColor"
    }

  }

}
