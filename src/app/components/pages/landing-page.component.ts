import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  template: `
    <div class="container bajo-el-nav">
    <div class="row">
    <div class="col-xs-12">
        <h1>Web Application user interface | Landing page | User flow map</h1>
        <br>
        <!-- text -->
        <section>
            <p>I was requested to create a landing page for this product, as well as improving the user interface and show a user flow map.</p>
            <p class="mb-2">The landing page shows key info about the product and sign in / up forms with their respective CTA buttons.</p>
        </section>
        <img src="../../../assets/images/extract-landing.jpg" alt="" class="mb-2 img-responsive">
        <img src="../../../assets/images/extract-user-journey-2.png" alt="" class="mb-2 img-responsive">
        <img src="../../../assets/images/extract-cluster-view.jpg" alt="" class="mb-2 img-responsive">
        </div>
    </div>
</div>
  `,
  styles: []
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
