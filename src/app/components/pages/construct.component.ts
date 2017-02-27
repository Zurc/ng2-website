import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-construct',
  template: `
    <div class="container bajo-el-nav">
      <div class="row">
        <div class="col-xs-12">
          <h1>Construct</h1>
          <br>
          <!-- text -->
          <section>
            <p>I was contacted by the founders of Construct at the early stages of this London-based startup and the plan was to re-design the website. I designed a fully responsive site with distinct, easy to read sections strategically ordered in order to create a better experience and understanding around their product and direct visitors to contact them.</p>
            <p>I wanted for the user a pleasant ‘first impression’ on their arrival to this site. For that it was used a carousel with a couple of slides and&nbsp;full screen background images.</p>
            <p>Main features right after that, unfolded later for readers who want more information. ‘How it works’ section followed by a section with easy access to AppleStore.</p>
            <p>For visual users there is a video showing the benefits of the app, what is accesible from the second slide as well.</p>
            <p>At the bottom of the page there is a clear Contact form and latest tweets info.</p>
            <p class="mb-2">This are some of my concept / designs for some websites.</p>
          </section>
          <img src="../../../assets/images/construct-1250x1262.png" alt="" class="mb-2 img-responsive">
          <img src="../../../assets/images/construct.jpg" alt="" class="mb-2 img-responsive">
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ConstructComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
