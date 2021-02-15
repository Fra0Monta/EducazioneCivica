import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServizioService {

  constructor(private http: HttpClient) { }
accesso(query: string) {
    const url = `https://3000-violet-goat-cpu6l0ae.ws-eu03.gitpod.io/accesso/accessorurale/${query}`;
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }
  morte(query: string) {
    const url = `https://3000-violet-goat-cpu6l0ae.ws-eu03.gitpod.io/morte/morterurale/${query}`;
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }
  popolazione(query: string) {
    const url = `https://3000-violet-goat-cpu6l0ae.ws-eu03.gitpod.io/popolazione/popolazionerurale/${query}`;
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }
}
