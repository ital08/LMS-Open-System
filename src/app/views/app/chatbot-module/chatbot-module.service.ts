import { Injectable } from '@angular/core';
import axios from 'axios';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatbotModuleService {
<<<<<<< HEAD

  private apiKey = environment.chatGptApiKey;
=======
  //private apiKey = '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';
  // private apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';

  private apiKey = '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';
>>>>>>> 6d8841285c64a7633a6444b48b88305284571cb1
  private apiUrl = 'https://api.openai.com/v1/completions';

  async getChatbotResponse(inputText: string): Promise<string> {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    };

    const data = {
      model: 'text-davinci-003',
      prompt: inputText,
      max_tokens: 150,
      temperature: 0.6,
    };

    try {
      const response = await axios.post(this.apiUrl, data, { headers });
      return response.data.choices[0].text;
    } catch (error) {
      console.error('Error al obtener la respuesta del chatbot:', error);
      return 'Lo siento, ha ocurrido un error.';
    }
  }
}
