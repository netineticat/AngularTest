import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser"

@Component({
  selector: 'app-youtube-list',
  templateUrl: './youtube-list.component.html',
  styleUrls: ['./youtube-list.component.css']
})
@Injectable()
export class YoutubeListComponent implements OnInit {
  //HTTP通信を可能にするクラス
  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) { }
  urls: SafeResourceUrl[][]

  ngOnInit() {
    this.getFromYoutube();
  }
  getFromYoutube(): SafeResourceUrl[][] {
    var endpointURL = "https://www.googleapis.com/youtube/v3/search";
    var type: string[] = ["id", "snippet"];
    var query = "HIKAKIN";
    var apiKey = "AIzaSyBCX7VidnT5XnS6hch_BIRC8YBKXaALjyA";

    var httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: null
    };

    
      //クオータ超えて403が帰ってきた時はこちらを使って開発するように。
        var returnArray = this.responseToStringArray(null);
        var safeUrls: SafeResourceUrl[][] = new Array();       
        for (var i=0;i<returnArray.length;i++) {
          safeUrls.push([this.sanitizer.bypassSecurityTrustResourceUrl(returnArray[i][0]), this.sanitizer.bypassSecurityTrustResourceUrl(returnArray[i][1])]);
          
          //console.log("safeurls[" + i + "][0] = " + safeUrls[i][0])
          //console.log("safeurls[" + i + "][1] = " + safeUrls[i][1])
        }
        this.urls = safeUrls
        return null;
        
    //GETリクエストを送信
    this.http.get(endpointURL + "?part=" + type[1] + "&q=" + query + "&key=" + apiKey, httpOptions)
      .toPromise()
      .then((res) => {
        //成功時
        const response: any = res;

        var returnArray = this.responseToStringArray(response);
        var safeUrls: SafeResourceUrl[][] = new Array();       
        for (var i=0;i<returnArray.length;i++) {
          safeUrls.push([this.sanitizer.bypassSecurityTrustResourceUrl(returnArray[i][0]), this.sanitizer.bypassSecurityTrustResourceUrl(returnArray[i][1])]);
          
          //console.log("safeurls[" + i + "][0] = " + safeUrls[i][0])
          //console.log("safeurls[" + i + "][1] = " + safeUrls[i][1])
        }
        this.urls = safeUrls
        return null;
      }).catch(this.errorHandler)
    return null;
  }
  errorHandler(error) {
    console.log(error);
    return null;
  }
  responseToStringArray(response: Response): string[][] {
    //mock
    var returnArray = [
      ['http://img.youtube.com/vi/mt388KniXzs/default.jpg', 'http://img.youtube.com/vi/oawPbJwoQ_I/default.jpg'],
      ['http://img.youtube.com/vi/09R8_2nJtjg/default.jpg', 'http://img.youtube.com/vi/SiAuAJBZuGs/default.jpg']
    ];
    for (var i in returnArray) {
      //console.log("returnArray[" + i + "][0] = " + returnArray[i][0])
      //console.log("returnArray[" + i + "][1] = " + returnArray[i][1])
    }
      return returnArray;
  }
}

