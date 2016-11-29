import { Component, OnInit } from '@angular/core';
import { StreamingService } from '../services/streaming.service';
import { Configuration } from '../app.constants';


@Component({
  selector: 'app-streaming',
  templateUrl: 'streaming.component.html',
  styleUrls: ['streaming.component.css'],
  providers: [StreamingService, Configuration]
})
export class StreamingComponent implements OnInit {
  val: any;
  errorMessage: String;

  constructor(private streamingServiceInstance: StreamingService) { }



  private getStreaming(usernameToFind: String): void {
    this.streamingServiceInstance
      .refresh(usernameToFind)
      .subscribe(
        val => this.val = val,
        error =>  console.log(error),//this.errorMessage = <any>error,
        () => console.log('get streaming twitch complete')

      );
  }

  public findStreamer(username: String)
  {
    this.getStreaming(username);
  }

  ngOnInit() {

  }

}
