import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-teran-frias',
  template: `
      <div class="container bajo-el-nav">
          <div class="row">
          <div class="col-xs-12">
              <h1>Teran Frias</h1>
              <br>
              <!-- text -->
              <section>
                  <p>This international graphic designer contacted me to build her professional website as a brochure and contact channel.</p>
                  <p>Keeping her style it was designed a responsive site in order to work for multiple devices.</p>
                  <p class="mb-2">Building code was created using Zurb Foundation front-end framework.</p>
              </section>
              <img src="../../../assets/images/teranfrias-homepage.jpg" alt="" class="mb-2 img-responsive">
              <img src="../../../assets/images/teranfrias-map.jpg" alt="" class="mb-2 img-responsive">
              </div>
          </div>
      </div>
  `,
  styles: []
})
export class TeranFriasComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
