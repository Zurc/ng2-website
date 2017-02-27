import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cj-fine-arts',
  template: `
    <div class="container bajo-el-nav">
        <div class="row">
        <div class="col-xs-12">
            <h1>Cruz Jurado Fine Arts</h1>
            <br>
            <!-- text -->
            <section>
                <p>This is one of my passions: Arts.</p>
                <p>Recently my personal site as an artist has been hacked, so still in process of re-making, but… you can enjoy the viewing of many of my works now.</p>
                <p>I love freedom on my art, and that is translated on the styles that I choose, materials I use and the actual ‘motivs’ that I decide to&nbsp;create.</p>
                <p>Once I was told that I’m like ‘many artists in one’, 🙂</p>
                <p class="mb-2">Feel free to <a href="http://cruzjurado.com/" target="_blank">visit my page</a>.</p>
            </section>
            <img src="../../../assets/images/cj-finearts.png" alt="" class="mb-2 img-responsive">
            </div>
        </div>
    </div>
  `,
})
export class CjFineArtsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
