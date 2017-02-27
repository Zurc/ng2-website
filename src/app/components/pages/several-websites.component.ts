import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-several-websites',
  template: `
      <div class="container bajo-el-nav">
          <div class="row">
          <div class="col-xs-12">
              <h1>Website Design</h1>
              <br>
              <!-- text -->
              <section>
                  <p class="mb-2">This are some of my concept / designs for some websites.</p>
              </section>
              <img src="../../../assets/images/with-cotton-and-linen.jpg" alt="" class="mb-2 img-responsive">
              <img src="../../../assets/images/just-spain.jpg" alt="" class="mb-2 img-responsive">
              <img src="../../../assets/images/chemist-direct.jpg" alt="" class="mb-2 img-responsive">
              <img src="../../../assets/images/clouding-systems.jpg" alt="" class="mb-2 img-responsive">
              <img src="../../../assets/images/eden-pansion.jpg" alt="" class="mb-2 img-responsive">
              <img src="../../../assets/images/asp.jpg" alt="" class="mb-2 img-responsive">
              <img src="../../../assets/images/alpha-e.jpg" alt="" class="mb-2 img-responsive">
              </div>
          </div>
        </div>
  `,
  styles: []
})
export class SeveralWebsitesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
