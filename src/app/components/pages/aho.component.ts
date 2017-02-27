import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aho',
  template: `
     <div class="container bajo-el-nav">
        <div class="row">
        <div class="col-xs-12">
            <h1>Africa Hands On</h1>
            <br>
            <!-- text -->
            <section>
                <p>I was requested me to design a site for this amazing organisation. Any adventure lover will have the opportunity to explore, volunteer or exchange ideas in Uganda. The aim of the design was to create an experience of openness, adventure and lots of fun and finally an invitation to contact with them.</p>
                <p class="mb-2">After research and wire framing, a prototype was launched with Fireworks and on approval the site was built with Foundation. I created their logo trying to convey their spirit and love for Africa.</p>
            </section>
            <img src="../../../assets/images/africa-hands-on-home.jpg" alt="" class="mb-2 img-responsive">
            <img src="../../../assets/images/africa-hands-on-fireworks.jpg" alt="" class="mb-2 img-responsive">
            </div>
        </div>
    </div>
  `,
})
export class AhoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
