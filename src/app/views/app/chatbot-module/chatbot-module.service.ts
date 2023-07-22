import { Injectable } from '@angular/core';
import axios from 'axios';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatbotModuleService {

  private apiKey = environment.chatGptApiKey;
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
