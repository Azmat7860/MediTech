import React from 'react'
import '../style.css'

function UnderHome() {
  return (
    <div>
          <section class="usps">
    <div class="container">
        <div class="swiper-container swiper-container-horizontal usps-slider overflow-visible py-0 swiper-container-initialized">
            <div class="swiper-wrapper justify-content-lg-center" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                <div class="swiper-slide small swiper-slide-active" style={{width: "273px", marginRight: "40px"}}>
                    <div class="text-sm text-center text-md-left d-flex flex-column flex-md-row justify-content-lg-center align-items-center">
                        <img class="mr-md-3 mb-2 mb-md-0" alt="/" src="http://127.0.0.1:8000/images/heart-marker.svg"/>
                        <div class="mt-auto mt-md-0"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>&nbsp;Search from 100+ locations</font></font></div>
                    </div>
                </div>
                <div class="swiper-slide small swiper-slide-next" style={{width: "273px", marginRight: "40px"}}>
                    <div class="text-sm text-center text-md-left d-flex flex-column flex-md-row justify-content-lg-center align-items-center">
                        <img class="mr-md-3 mb-2 mb-md-0" alt="/" src="http://127.0.0.1:8000/images/wallet.svg"/>
                        <div class="mt-auto mt-md-0"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>&nbsp;Free and without obligation</font></font></div>
                    </div>
                </div>
                <div class="swiper-slide small" style={{width: "273px", marginRight: "40px"}}>
                    <div class="text-sm text-center text-md-left d-flex flex-column flex-md-row justify-content-lg-center align-items-center">
                        <img class="mr-md-3 mb-2 mb-md-0" alt="/" src="http://127.0.0.1:8000/images/file.svg"/>
                        <div class="mt-auto mt-md-0"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>&nbsp;Offer within 1 week </font></font></div>
                    </div>
                </div>
                <div class="swiper-slide small" style={{width: "273px", marginRight: "40px"}}>
                    <div class="text-sm text-center text-md-left d-flex flex-column flex-md-row justify-content-lg-center align-items-center">
                        <img class="mr-md-3 mb-2 mb-md-0" alt="/" src="http://127.0.0.1:8000/images/badge.svg"/>
                        <div class="mt-auto mt-md-0"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>&nbsp;Not an expensive middleman</font></font></div>
                    </div>
                </div>
            </div>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
    </div>
</section>
    </div>
  )
}

export default UnderHome