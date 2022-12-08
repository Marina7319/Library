import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  id: any;
  title: any;
  subscription: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.id = params["id"];
      this.title = params["title"];
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
