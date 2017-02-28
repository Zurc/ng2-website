import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ravn-web',
  template: `
    <div class="container bajo-el-nav">
        <div class="row">
        <div class="col-xs-12">
            <h1>RAVN Systems website redesign</h1>
            <br>
            <!-- text -->
            <section>

            <p>I was requested to redesign the entire website for RAVN Systems.</p>
            <p>The idea was to enhance the look and feel of the website and show a fresh but solid corporate image for the whole company.</p>
            <p>Below you can see the original site. It’s showing&nbsp;some of the products and services the company had to offer. I decided to improve that ‘first impression’ for users navigating to the site, showing features hierarchically, adding more sections like awards, clients, news, contact info… among others</p>
            <p>After research and sketch ideas I did the wire framing on pen and paper divided into sections.&nbsp;With scissors cut, all sections were fast and easily interchangeable with the possibility to add new ones.</p>
            <p>The site was built on WordPress and Visual Composer. I was teaching how to use this Content Management System to colleagues from the Marketing department.</p>
            <p class="mb-2">Feel free to visit <a href="https://www.ravn.co.uk/" target="_blank">RAVN website</a></p>
            <div id="attachment_97" style="width: 310px" class="wp-caption aligncenter"><img class="size-medium wp-image-97" src="../../../assets/images/ravn-old-site.jpg" alt="ravn old site"><p class="wp-caption-text">RAVN original website</p></div>
            <p>&nbsp;</p>
            <div id="attachment_98" style="width: 210px" class="wp-caption aligncenter"><img class="size-medium wp-image-98" src="http://web.cruzjurado.com/wp-content/uploads/2016/05/ravn-website-interchangeable-sections-200x300.jpg" alt="ravn website interchangeable sections" width="200" height="300" srcset="http://web.cruzjurado.com/wp-content/uploads/2016/05/ravn-website-interchangeable-sections-200x300.jpg 200w, http://web.cruzjurado.com/wp-content/uploads/2016/05/ravn-website-interchangeable-sections-768x1155.jpg 768w, http://web.cruzjurado.com/wp-content/uploads/2016/05/ravn-website-interchangeable-sections-681x1024.jpg 681w, http://web.cruzjurado.com/wp-content/uploads/2016/05/ravn-website-interchangeable-sections.jpg 951w" sizes="(max-width: 200px) 100vw, 200px"><p class="wp-caption-text">interchangeable sections</p></div>
            <p>&nbsp;</p>
            <div id="attachment_99" style="width: 254px" class="wp-caption aligncenter"><img class="wp-image-99 size-large" src="http://web.cruzjurado.com/wp-content/uploads/2016/05/ravn-full-website-244x1024.jpg" alt="RAVN website redesigned" width="244" height="1024"><p class="wp-caption-text">RAVN website redesigned</p></div>

            
            </section>
            </div>
        </div>
    </div>
  `,
  styles: []
})
export class RavnWebComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
