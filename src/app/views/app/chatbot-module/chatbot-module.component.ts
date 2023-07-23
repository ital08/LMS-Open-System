import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatbotModuleService } from './chatbot-module.service';
import { Configuration, OpenAIApi } from "openai";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chatbot-module',
  templateUrl: './chatbot-module.component.html',
  styleUrls: ['./chatbot-module.component.scss']
})

export class ChatbotModuleComponent implements OnInit, AfterViewChecked  {
  // chatbotResponse: any;
  // inputText: string = 'Hola, ¿cómo estás?';

  // configuration = new Configuration({
  //   apiKey: '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',
  // });
  // openai = new OpenAIApi(this.configuration);

  // constructor(private chatbotService: ChatbotModuleService) 
  // { }

  // 

  // generatePrompt(animal) {
  //   const capitalizedAnimal =
  //     animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  //   return `Hola`;
  // }

  // async getChatbotReply() {
  //   // this.chatbotService.getChatbotResponse(this.inputText).subscribe(
  //   //   (response) => {
  //   //     this.chatbotResponse = response.choices[0].text;
  //   //   },
  //   //   (error) => {
  //   //     console.error('Error al obtener la respuesta del chatbot:', error);
  //   //     this.chatbotResponse = 'Lo siento, ha ocurrido un error.';
  //   //   }
  //   // );

  //   this.chatbotResponse = await this.openai.createCompletion({
  //     model: "text-davinci-003",
  //     prompt: 'Hola',
  //     temperature: 0.6,
  //   });
    
  //   console.log('chatbotResponse',this.chatbotResponse);
  // }

  inputText: string = '';
  chatbotResponse: string = '';
  arrayStringRequest: string[] = [];
  arrayStringResponsive: string[] = [];
  booleanButton: boolean = false;
  cargandoBoolean: boolean = false;

  @ViewChild('chatList', { static: false }) chatListRef: ElementRef;

  constructor(private chatbotService: ChatbotModuleService) { }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  ngOnInit(): void {
  }

  async getChatbotReply() {
    this.booleanButton = true;
    console.log('booleanButton',this.booleanButton)
    if(this.inputText){
      this.cargandoBoolean = true;
      const varibaleTexto = this.inputText;
      this.inputText = '';
      this.arrayStringRequest.push(varibaleTexto);
      this.chatbotResponse = await this.chatbotService.getChatbotResponse(varibaleTexto);
      this.arrayStringResponsive.push(this.chatbotResponse);
      this.cargandoBoolean = false;
      this.scrollToBottom();
    }
    this.booleanButton = false;
  }

  scrollToBottom() {
    if (this.chatListRef && this.chatListRef.nativeElement) {
      const chatListElement = this.chatListRef.nativeElement;
      chatListElement.scrollTop = chatListElement.scrollHeight + 40;
    }
  }

}
