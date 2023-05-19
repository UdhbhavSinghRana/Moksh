const customNavbar = document.querySelector( ".customNavbar" )
const customFooter = document.querySelector( ".customFooter" );
( () =>
{
  let navbarContent = `
  <nav class="navbar navbar-expand-md fixed-top p-2" style="background-color: #2980b9;"
          aria-label="Fourth navbar example">
          <div class="container-fluid">
            <a class="navbar-brand text-white p-0" href="index.html">
              <img src="./Images/moksh.png" alt="Moksh Logo" class="logo" />
              <span>Moksh</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04"
              aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample04">
              <ul class="navbar-nav mb-2 mt-4 mb-md-0 fw-medium px-3 w-100">
                <li class="nav-item ms-auto">
                  <a class="nav-link text-white dropItem p-sm-0" aria-current="page" href="index.html">Home</a>
                </li>
                
                <li class="nav-item ms-auto">
                  <a class="nav-link text-white dropItem p-sm-0" aria-current="page" href="Blog.html">Blog</a>
                </li>
                <li class="nav-item dropdown ms-sm-auto text-end">
                  <a class="nav-link dropdown-toggle text-white p-sm-0 text-uppercase " href="#" data-bs-toggle="dropdown"
                    aria-expanded="false">Features</a>
                  <ul class="dropdown-menu dropdown-menu-end p-0 my-1 text-white" style="background-color: #2980b9;">
                    <li class="w-100 text-end text-sm-start"><a class="dropdown-item p-2 dropItem border"
                        href="./meditation.html">Augmented Reality Meditation</a>
                    </li>
                    <li class="w-100 text-end text-sm-start"><a class="dropdown-item p-2 dropItem border" href="#">Iskon
                        Events</a></li>
                    <li class="w-100 text-end text-sm-start"><a class="dropdown-item p-2 dropItem border"
                        href="#">Divine
                        Activities for
                        all
                        Generation</a></li>
                    <li class="w-100 text-end text-sm-start"><a class="dropdown-item p-2 dropItem border"
                        href="#">Pomodoro
                        Spiritual
                        Break</a>
                    </li>
                    <li class="w-100 text-end text-sm-start"><a class="dropdown-item p-2 dropItem border" href="#">Read
                        a
                        Shlok</a></li>
                    <li class="w-100 text-end text-sm-start"><a class="dropdown-item p-2 dropItem border"
                        href="#">Rejuvenate</a></li>
                  </ul>
                </li>
                <!-- Google Translate -->
                <li class="nav-item ms-auto ">
                  <div id="google_translate_element" class="p-0 m-0"></div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  `
  customNavbar.innerHTML = navbarContent

  let footerContent = `
     <!-- Row 1  -->
        <div class="container-fluid d-flex align-items-center px-0 justify-content-sm-between flex-column flex-sm-row">

          <div class='d-flex align-items-center justify-content-center'>
            <img class="logo" src="Images/moksh.png" alt="Moksh Logo" style="
                                  height: 60px;
                                  width: 60px;
                                  margin-right: 10px;
                                  filter: invert(84%) sepia(28%) saturate(30%) hue-rotate(195deg)
                                    brightness(97%) contrast(99%);
                                " />

            <h1 class="title text-white" class="fs-1">
              Moksh
            </h1>
          </div>

          <div class="tagline text-white text-center my-3 my-sm-0 text-sm-end d-flex flex-column sm-w-50 ">
            <p class="fw-semibold m-0 fs-5">
              A Spiritual Productivity Tool for Mental Wellness
            </p>
            <p class="intro fw-medium smallerFontSize text-sm-end fst-italic m-0 ps-sm-3">
              Moksh is a spiritual productivity tool designed for individuals who
              want to unlock their potential and achieve true balance in life.
            </p>
          </div>

        </div>

        <!-- Row 2  -->
        <div
          class="copyright d-flex align-items-center mt-5 flex-column flex-sm-row justify-content-sm-between justify-content-center text-center smallerFontSize fw-semibold">
          <p class="m-0">
            Made with ❤️ by Akshita during XPRESSION'23
          </p>
          <p class="m-0">
            &copy; 2023 Moksh. All rights reserved.
          </p>
        </div>
  `
  customFooter.innerHTML = footerContent

} )()