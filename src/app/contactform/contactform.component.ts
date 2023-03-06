import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent {
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;


  async sendMail() {
    console.log('sending mail',);
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    mailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    console.log('i was here ')
    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('message', messageField.value);

    fetch('https://f0153156@ingo-hermsen.developerakademie.net/_sendphp/send_mail.php',
      {
        method: 'POST',
        body: formData
      }
    )

    nameField.disabled = false;
    mailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;

  }

}
