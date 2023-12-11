import { Injectable } from '@angular/core';
import { Chat } from './chat';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/chat'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  getAllChats(): Observable<Chat[]> {
    return this.http.get<Chat[]>(this.url);
  }

  postChat(text: string): Observable<any> {
    return this.http.post(this.url, {
      sender: 1,
      text: text
    }, this.httpOptions)
  }
}
