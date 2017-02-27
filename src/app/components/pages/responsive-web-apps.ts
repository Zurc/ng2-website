import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'responsive-web-apps',
    template: `
        <div class="container bajo-el-nav">
    <div class="row">
    <div class="col-xs-12">
        <h1>Responsive Web Applications</h1>
        <br>
        <!-- text -->
        <section>
            <p>We started this project from scratch. The process involves several steps:</p>
            <ul class="steps">
                <li><i class="fa fa-check-square-o" aria-hidden="true"></i> Identifying business requirements</li>
                <li><i class="fa fa-check-square-o" aria-hidden="true"></i> Researching among leading websites and competitors (competitive analysis)</li>
                <li><i class="fa fa-check-square-o" aria-hidden="true"></i> Brainstorming, sketching ideas, generating concepts (concept design)</li>
                <li><i class="fa fa-check-square-o" aria-hidden="true"></i> Wire framing with different levels of detail depending on necessity.</li>
                <li><i class="fa fa-check-square-o" aria-hidden="true"></i> User journeys and flow maps</li>
                <li><i class="fa fa-check-square-o" aria-hidden="true"></i> Prototypes</li>
            </ul>
            <p>We follow an agile process with continuous reviews and improvements for a fast delivery and less prone to errors.</p>
            <p>Once the final prototype is accepted we proceed to the final mockup</p>
            <p>On approval we start coding HTML, CSS and JS to build the real project (structure, functionality, interaction…) in collaboration with back-end developers.</p>
            <p class="mb-2">Our apps are mobile ready, so for that we can use frameworks such as Bootstrap or Foundation.</p>
        </section>
        <img src="../../../assets/images/overview.jpg" alt="" class="mb-2">
        <img src="../../../assets/images/duplicates.jpg" alt="" class="mb-2">
        <img src="../../../assets/images/settings.jpg" alt="" class="mb-2">
        <img src="../../../assets/images/repos.jpg" alt="" class="mb-2">
        </div>
    </div>
</div>
    `,
    styles: [`
        .steps li {
            list-style: none;
        }
        img {
            width: 100%;
        }
    `]
})
export class ResponsiveWebAppsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}