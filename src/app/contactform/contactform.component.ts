import { Component, ViewChild, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})

export class ContactformComponent {
  mailSent: boolean = false;
  validation: boolean = false;

  nameValidation: boolean = true;
  mailValidation: boolean = true;
  messageValidation: boolean = true;

  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;


  validateForm() {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;

    this.nameValidation = nameField.value == '' ? false : true;
    this.mailValidation = mailField.value == '' ? false : true;
    this.messageValidation = messageField.value == '' ? false : true;

    if (this.nameValidation && this.mailValidation && this.messageValidation) {
      this.sendMail();
    } else {
      this.resetValidation();

    }
  }

  resetValidation() {
    setTimeout(() => {
      this.nameValidation = true;
      this.mailValidation = true;
      this.messageValidation = true;
    }, 3000)
  }


  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    mailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    nameField.value = '';
    mailField.value = '';
    messageField.value = '';

    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('message', messageField.value);

    fetch('https://ingo-hermsen.developerakademie.net/_sendphp/send_mail.php',
      {
        method: 'POST',
        body: formData
      }
    )

    this.showMailSentMessage()

    nameField.disabled = false;
    mailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;

  }

  showMailSentMessage() {
    this.mailSent = true;
    let mailSentTimeout = setTimeout(() => {
      this.mailSent = false;
      clearTimeout(mailSentTimeout);
    }, 3000)
  }

}
