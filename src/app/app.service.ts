import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private data = [];

  addData(data: any) {
    this.data.push(data);
  }

  getData() {
    return this.data;
  }
}
