import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  template: `
    <div class="container bajo-el-nav">
        <div class="row">
        <div class="col-xs-12">
            <h1>Filter feature</h1>
            <br>
            <!-- text -->
            <section>
                <p>On one of the RAVN’s products there are filters -displayed as a list of checkboxes- distributed on categories, each category in their own panel.</p>
                <p>Depending on the client (the companies using this product) that categories could be many.</p>
                <p class="mb-2">We come up with a new way to show easily which&nbsp;categories&nbsp;have one or more filters checked. Let me show you some sketches explaining the idea…</p>
                
                <p><img class="alignnone wp-image-139 size-full mb-2 img-responsive border-1" src="../../../assets/images/filters-feature-explained.gif" alt="filter feature explained gif" width="1479" height="1021"></p>
                
                <p class="mb-2">Here I was testing animations to unfold categories on hover (This is the CSS only test)</p>
                
                <div class="cp_embed_wrapper"><iframe id="cp_embed_ZOBoee" src="//codepen.io/cruzjurado/embed/ZOBoee?height=265&amp;theme-id=0&amp;slug-hash=ZOBoee&amp;default-tab=css%2Cresult&amp;user=cruzjurado&amp;embed-version=2" scrolling="no" frameborder="0" height="265" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="CodePen Embed 2" class="cp_embed_iframe " style="width: 100%; overflow: hidden;" kwframeid="1"></iframe></div>
                <p><script src="//assets.codepen.io/assets/embed/ei.js" async=""></script></p>
                
                <p class="mb-2">…and this is the JS (jQuery) version</p>
                
                <div class="cp_embed_wrapper"><iframe id="cp_embed_RRoYMO" src="//codepen.io/cruzjurado/embed/RRoYMO?height=265&amp;theme-id=0&amp;slug-hash=RRoYMO&amp;default-tab=js%2Cresult&amp;user=cruzjurado&amp;embed-version=2" scrolling="no" frameborder="0" height="265" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="CodePen Embed 1" class="cp_embed_iframe " style="width: 100%; overflow: hidden;" kwframeid="2"></iframe></div>
                <p><script async="" src="//assets.codepen.io/assets/embed/ei.js"></script></p>
                
                <p class="mb-2">…and this is a screenshot of the filter feature in action on one of RAVN’s products</p>
            </section>
            </div>
        </div>
    </div>
  `,
  styles: []
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
