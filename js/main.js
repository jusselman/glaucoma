// window.onscroll = function() {myFunction()};
//
// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;
//
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }// $('.carousel').carousel();


// function yHandler() {
//     var wrap = document.getElementById('wrap');
//     var contentHeight = wrap.offsetHeight;
//     var yOffset = window.pageYOffset;
//     var y = yOffest + window.innerHeight;
//
//     if(y >= contentHeight) {
//       wrap.innerHTML += 'div class="newData"></div>';
//       // AJAX CALL TO GET MORE DYNAMICA DATA //
//       }
//       var status = document.getElementById('status');
//       status.innerHTML = contentHeight+" | "+y;
// }
// window.onscroll = yHandler;

const one = {
  template: `<section class="section-main" section id="main">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="brand">
          <img class="logo" src="img/eyecon.png">
        </div>
      </div>
    </div>
        <div data-ride="carousel" class="carousel carousel-fade" id="carousel-example-captions">
  <ol class="carousel-indicators">
    <li class="active" data-slide-to="0" data-target="#carousel-example-captions"></li>
    <li data-slide-to="1" data-target="#carousel-example-captions" class=""></li>
    <li data-slide-to="2" data-target="#carousel-example-captions" class=""></li>
  </ol>
  <div role="listbox" class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 img-responsive" src="img/goldengate1.png" alt="First Slide">
    </div>
    <div class="carousel-item">
        <img class="d-block w-100 img-responsive" src="img/baybridge1.png" alt="Second Slide">
    </div>
    <div class="carousel-item">
        <img class="d-block w-100 img-responsive" src="img/coit.png" alt="Third Slide">
      </div>
    </div>
  </div>


<div class="main-content">

          <h1 class="content">GLAUCOMA SPECIALISTS</h1>
          <h2>Drs. Marc F. Lieberman, Patricia C. Wong, and H. George Tanaka</h2>
          <h4><span class="address">711 VAN NESS AVENUE, SUITE 440, SAN FRANCISCO, CA 94102<br>
              T: (415)771-4020, F: (415)771-4095</span></h4><br>
          <h4>Our board-certified physicians specialize in the diagnosis, management and treatment of glaucoma.
            Supported by a wonderful staff, they offer their significant
            expertise for patients and referring physicians throughout the Bay Area.</h4><br>
            <h4>Our services include various YAG laser treatments, cutting-edge surgical procedures,
              and comprehensive medical consultations for both glaucoma and cataracts.  </h4>
  </div>


    <!-- <div class="container"> -->
      <div class="row eyeSmart">
        <div class="col-md-6 text-center">
          <a href="https://www.aao.org/eye-health" target="_blank">
            <img src="img/eyeSmart.jpg" alt="Eye Smart">
          </a>
        </div>
        <div class="col-md-6 text-center">
          <a href="https://www.aao.org/salud-ocular" target="_blank">
            <img src="img/ojosSanos.jpg" alt="Ojos Sanos">
          </a>
        </div>
      </div>
    </div>

  </section>`
}

const two = {
  template: `<section class="section-locations" section id="locations">
    <div class="container">
      <div class="row">
          <div class="col-12">
            <img src="img/clinic.png">
            <h2><u>MAIN OFFICE</u></h2>
          <h3>711 Van Ness Avenue, Suite 440, San Francisco, CA 94102</h3><br>
          <h2><u>SATELITE OFFICES</u></h2>
            <h3>491 30th St # 103 Oakland, CA 94609, T: (510) 763-9775<br>
            1860 El Camino Real, Suite 439, Burlingame, CA 94010</h3>
        </div>
      </div>
    </div>
  </section>`
}

const three = {
  template: `<section class="section-faq" section id="faq">
    <div class="container">
      <div class="row">
          <div class="col-12">
            <img src="img/faq.jpg">
            <h2>Frequently Asked Questions about Glaucoma</h2>
            <p>by H. George Tanaka, MD
              Q: How common is glaucoma?

              A: Glaucoma affects more than 3 million Americans. The scary part is that half
              of those people don’t even know they have glaucoma. And with the number of aging
              Americans expected to increase in the next century with the “baby-boomer” generation,
              glaucoma will continue to be a major public health concern in the future.

              Q: What is glaucoma, anyway?

              A: Glaucoma is not just one disease, but a group of many different diseases. They all
              have one thing in common – damage to the nerve that connects the eye to the brain,
              called the optic nerve, which results in a gradual loss of vision. Many, but not all,
              cases are associated with elevated pressure in the eye.

              Q: Who is at risk for glaucoma?

              A: The risk of developing glaucoma increases with a person’s age. Young adults and even
              children can develop glaucoma, but this is very uncommon. People who have a blood relative
              with glaucoma are more likely to develop glaucoma themselves. People who have taken steroid
              medications for a long time (such as Prednisone or steroid eye drops), have seriously injured
              their eyes, or have diabetes are at higher risk for glaucoma. Particular kinds of glaucoma
              are more common in certain ethnic groups. African-Americans are at higher risk of developing
               primary open-angle glaucoma. People of Scandinavian or Russian ancestry are more likely to
               develop pseudoexfoliative glaucoma. Even the type of eyeglasses prescription you have predisposes
               you to certain types of glaucoma. Near-sighted persons are more likely to acquire pigmentary
               glaucoma. Far-sighted persons are more likely to develop angle-closure glaucoma.
             </p>
          </div>
        </div>
      </div>
    </div>
  </section>
`
}

const four = {
  template: `  <section class="sections-doctors" section id="doctors">
      <div class="container">
        <div class="row">

            <div class="col-12">
              <img class='doctorPortal' src="img/doctors.jpg">
            </div>

            <div class="col-12 col-md-4">
              <img class="headshot" src="img/drlieberman.jpg">
                <h3>Marc F. Lieberman, M.D.EDUCATION</h3>
            </div>

            <div class="col-12 col-md-4">
              <img class="headshot" src="img/drwong.jpg">
              <h3>PATRICIA C. WONG, M.D.</h3>
            </div>

            <div class="col-12 col-md-4">
              <img class="headshot" src="img/drtanaka.jpg">
              <h3>H. GEORGE TANAKA, M.D.</h3>
            </div>

          </div>
        </div>
    </section>`
}

const five = {
  template: `<section class="section-staff" section id="staff">
    <div class="container">
      <div class="row">
          <div class="col-12">
            <img src="img/ourstaff.jpg">
            <p>Our team is fully committed to providing each and every patient with the highest quality of care.
              Translators are available for Russian, Mandarin, Cantonese and Korean-speaking patients. To make
              an appointment, please call our office at 415-771-4020. General inquiries can be sent to
              irene711vanness@gmail.com.</p>
          </div>
        </div>
      </div>
  </section>`
}

const six = {
  template: `<section class="section-media" section id="media">
    <div class="container">
      <div class="row">
          <div class="col-12">
            <img src="img/media.jpg">
            <h3>Dr. Tanaka's recent segment on CNET can be found <a href="http://www.cnet.com/videos/smallest-human-implant-could-help-fight-blindness/"><span class="media-link">here</span></a>.</h3><br>
            <p>Feel free to call our office requesting information on the new <br>i-stent procedure or our other glaucoma and cataract surgeries.</p>

          </div>
        </div>
      </div>
  </section>`
}

const router = new VueRouter ({
    routes: [
      {
          path: '/one',
          component: one
      },
      {
        path: '/two',
        component: two
      },
      {
        path: '/three',
        component: three
      },
      {
        path: '/four',
        component: four
      },
      {
        path: '/five',
        component: five
      },
      {
        path: '/six',
        component: six
      }
    ]
})

var routeTest = new Vue({
    router,
    el: '#app',
    data: {

    },
    methods: {

    }
}).$mount('#app');
