import React from 'react'
import '../style.css'

function Footer() {
    return (
        <div>
            <div className="container-fluid footer">
                <div className="row pb-2 mr-0">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-2">
                        <div className="widget pb-2 mb-4">
                            <p className="widget-title text-light pb-1 ">Download our app</p>
                            <div className="d-flex flex-wrap">
                                <div className="mr-2 mb-2">
                                    <a className="btn-market btn-apple btn-block" href="https://apps.apple.com/pk/app/marham-find-a-doctor/id1095243102" role="button">
                                        <span className="btn-market-subtitle">Download on the</span>
                                        <span className="btn-market-title">App Store</span>
                                    </a>
                                </div>
                                <div className="mb-2">
                                    <a className="btn-market btn-google btn-block" href="https://play.google.com/store/apps/details?id=controllers.marham.marhammed" role="button">
                                        <span className="btn-market-subtitle">Download on the</span>
                                        <span className="btn-market-title">Google Play</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 ml-2">
                            <a className="social-btn sb-light sb-twitter mb-2 pt-1" href="https://twitter.com/marhampk" name="Marham Twitter" alt="Marham twitter" aria-label="Marham Twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                                </svg>
                            </a>
                            <a className="social-btn sb-light sb-facebook ml-2 mb-2 pt-1" href="https://www.facebook.com/marham.pk" name="Marham Facebook" aria-label="Marham Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                                </svg>
                            </a>
                            <a className="social-btn sb-light sb-instagram ml-2 mb-2 pt-1" href="https://www.instagram.com/marhampk/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16" name="Marham Instagram" aria-label="Marham Instagram">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                                </svg>
                            </a>
                            <a className="social-btn sb-light sb-youtube ml-2 mb-2 pt-1" href="https://www.youtube.com/channel/UC4T_g_TV3egBTHD8xzNuBTA">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16" name="Marham Youtube" aria-label="Marham Youtube">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="row pb-3 mr-0 d-md-none">
                            <div className="col-md-3 col-sm-6 mb-4">
                                <div className="media">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-patch-check-fill text-light pt-1" viewBox="0 0 16 16">
                                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                                    </svg>
                                    <div className="media-body pl-3">
                                        <p className="font-size-base mb-1 text-light">PMC Verified Doctors
                                        </p><p className="mb-0 font-size-ms text-light">Authentic &amp; updated information</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4">
                                <div className="media">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-headset text-light pt-1" viewBox="0 0 16 16">
                                        <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"></path>
                                    </svg>
                                    <div className="media-body pl-3">
                                        <p className="font-size-base text-light mb-1">12/7 customer support</p>
                                        <p className="mb-0 font-size-ms text-light">Well-trained &amp; Supportive team</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4">
                                <div className="media">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-file-earmark-lock-fill text-light pt-1" viewBox="0 0 16 16">
                                        <path d="M7 7a1 1 0 0 1 2 0v1H7V7zM6 9.3c0-.042.02-.107.105-.175A.637.637 0 0 1 6.5 9h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 12h-3a.637.637 0 0 1-.395-.125C6.02 11.807 6 11.742 6 11.7V9.3z"></path>
                                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM10 7v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 1 1 4 0z"></path>
                                    </svg>
                                    <div className="media-body pl-3">
                                        <p className="font-size-base text-light mb-1">Secure online payment</p>
                                        <p className="mb-0 font-size-ms text-light">We possess SSL / Secure сertificate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="widget widget-links widget-light pb-2 mb-4">
                                <h3 className="widget-title text-light">Lab Tests</h3>
                                <ul className="widget-list">
                                    <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/radiology-pathology-labs/lahore">Labs in Lahore</a></li>
                                    <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/radiology-pathology-labs/karachi">Labs in Karachi</a></li>
                                    <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/radiology-pathology-labs/islamabad">Labs in Islamabad</a></li>
                                    <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/radiology-pathology-labs/pakistan">Labs in Pakistan</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="widget widget-links widget-light pb-2 mb-4">
                                <a href="https://www.meditech.pk/special-offers" className="widget-title text-light">Find Special Offers</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6 ml-2">
                        <div className="widget widget-links widget-light pb-2 mb-4">
                            <h3 className="widget-title text-light">Top Cities</h3>
                            <ul className="widget-list">
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/lahore">Lahore</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/karachi">Karachi</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/islamabad">Islamabad</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/rawalpindi">Rawalpindi</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/faisalabad">Faisalabad</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/peshawar">Peshawar</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/multan">Multan</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/quetta">Quetta</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/gujranwala">Gujranwala</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/sargodha">Sargodha</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/hyderabad">Hyderabad</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/bahawalpur">Bahawalpur</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/sialkot">Sialkot</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/rahim-yar-khan">Rahim Yar Khan</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors-in-pakistan">View All Cities</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6 ml-2">
                        <div className="widget widget-links widget-light pb-2 mb-4">
                            <h3 className="widget-title text-light">Top Hospitals</h3>
                            <ul className="widget-list">
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/hospitals/quetta/city-international-hospital/zarghon-road">City International Hospital</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/hospitals/lahore/doctors-hospital/johar-town">Doctors Hospital</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/hospitals/lahore/hameed-latif-hospital/garden-town">Hameed Latif Hospital</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/hospitals/quetta/akram-hospital/quetta-city">Akram Hospital</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/hospitals/lahore/chughtai-medical-center/dha-defence">Chughtai Medical Center</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/hospitals/lahore/iqra-medical-complex-hospital/johar-town">Iqra Medical Complex Hospital</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/hospitals/lahore/surgimed-hospital/gulberg-4">Surgimed Hospital</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/hospitals/lahore/omar-hospital-cardiac-centre/jail-road">Omar Hospital &amp; Cardiac Centre</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/hospitals/karachi/hilal-e-ahmar-house-hospital/clifton">Hilal-E-Ahmar House Hospital</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/hospitals/karachi/health-icon-medical-diagnostic-centre/gulshan-e-iqbal">Health Icon Medical &amp; Diagnostic Centre</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/hospitals/multan/khan-medical-city-hospital/al-rahim-colony">Khan Medical City Hospital</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/hospitals/faisalabad/faisal-hospital/peoples-colony">Faisal Hospital</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/hospitals/quetta/saleem-medical-complex-hospital/quetta-city">Saleem Medical Complex Hospital</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/hospitals/lahore/kanan-clinic/gor-1">Kanan Clinic</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/hospitals">View All Hospitals</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6 ml-2">
                        <div className="widget widget-links widget-light pb-2 mb-4">
                            <h3 className="widget-title text-light">Top Specialities</h3>
                            <ul className="widget-list">
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/dermatologist">Dermatologist</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/neuro-physician">Neurologist</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/gynecologist">Gynecologist</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/urologist">Urologist</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/gastroenterologist">Gastroenterologist</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/pulmonologist">Pulmonologist / Lung Specialist</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/orthopedic-surgeon">Orthopedic Surgeon</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/pediatrician">Pediatrician</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/general-physician">General Physician</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/nephrologist">Nephrologist</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/sexologist">Sexologist</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/ent-specialist">Ent Specialist</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/eye-surgeon">Eye Surgeon</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors/neuro-surgeon">Neuro Surgeon</a></li>
                                <li className="widget-list-item pb-1"><a className="widget-list-link" href="https://www.meditech.pk/doctors">View All Specialities</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row pb-3 mr-0 ">
                        <div class="col-md-3 col-sm-6 mb-4">
                            <div class="media">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-patch-check-fill text-light pt-1" viewBox="0 0 16 16">
                                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                                </svg>
                                <div class="media-body pl-3">
                                    <p class="font-size-base mb-1 text-light">Verified Doctors
                                    </p><p class="mb-0 font-size-ms text-light">Authentic &amp; updated information</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4">
                            <div class="media">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-cash-stack text-light pt-1" viewBox="0 0 16 16">
                                    <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                                    <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"></path>
                                </svg>
                                <div class="media-body pl-3">
                                    <p class="font-size-base text-light mb-1">Cash back guarantee</p>
                                    <p class="mb-0 font-size-ms text-light">We return money within 2 Days</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4">
                            <div class="media">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-headset text-light pt-1" viewBox="0 0 16 16">
                                    <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"></path>
                                </svg>
                                <div class="media-body pl-3">
                                    <p class="font-size-base text-light mb-1">12/7 Customer Care</p>
                                    <p class="mb-0 font-size-ms text-light">Well-trained &amp; Supportive team</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4">
                            <div class="media">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-file-earmark-lock-fill text-light pt-1" viewBox="0 0 16 16">
                                    <path d="M7 7a1 1 0 0 1 2 0v1H7V7zM6 9.3c0-.042.02-.107.105-.175A.637.637 0 0 1 6.5 9h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 12h-3a.637.637 0 0 1-.395-.125C6.02 11.807 6 11.742 6 11.7V9.3z"></path>
                                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM10 7v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 1 1 4 0z"></path>
                                </svg>
                                <div class="media-body pl-3">
                                    <p class="font-size-base text-light mb-1">Secure payment Method</p>
                                    <p class="mb-0 font-size-ms text-light">Secure Certificate</p>
                                </div>
                            </div>
                        </div>

                        <ul class="widget-list d-flex flex-wrap justify-content-md-start">
                            <li class="widget-list-item mr-4 mb-3"><a class="widget-list-link" href="https://www.meditech.pk/privacy">Privacy Policy</a></li>
                            <li class="widget-list-item mr-4 mb-3"><a class="widget-list-link" href="https://www.meditech.pk/delivery-policy">Delivery Policy</a></li>
                            <li class="widget-list-item mr-4 mb-3"><a class="widget-list-link" href="https://www.meditech.pk/refunds-privacy">Refund Policy</a></li>
                            <li class="widget-list-item mr-4 mb-3"><a class="widget-list-link" href="https://www.meditech.pk/payment-privacy">Payment Terms</a></li>
                            <li class="widget-list-item mr-4 mb-3"><a class="widget-list-link" href="https://www.meditech.pk/cancellation-policy">Cancellations Policy</a></li>
                            <li class="widget-list-item mr-4 mb-3"><a class="widget-list-link" href="https://www.meditech.pk/termsofuse-privacy">Terms of Use</a></li>
                            <li class="widget-list-item mr-4 mb-3"><a class="widget-list-link" href="https://www.meditech.pk/faqs-policy">FAQs</a></li>
                            <li class="widget-list-item mr-4 mb-3"><a class="widget-list-link" href="https://www.meditech.pk/about">About Us</a></li>
                            <li class="widget-list-item mr-4 mb-3"><a class="widget-list-link" href="https://www.meditech.pk/contact">Contact Us</a></li>
                            <li class="widget-list-item mr-4 mb-3"><a class="widget-list-link" href="https://www.meditech.pk/doctors">Doctors</a></li>
                            <li class="widget-list-item mr-4 mb-3"><a class="widget-list-link" href="https://www.meditech.pk/partnerships">Partnerships</a></li>
                            <li class="widget-list-item mr-4 mb-3"><a class="widget-list-link" href="https://www.meditech.pk/careers">Careers</a></li>
                            <li class="widget-list-item mr-4 mb-3"><a class="widget-list-link" href="https://www.meditech.pk/help-me-marham">Help me Marham</a></li>
                            <li class="widget-list-item mr-4 mb-3"><a class="widget-list-link" href="https://www.meditech.pk/invite-friend">Invite Friends &amp; Family</a></li>


                        </ul>
                    </div>
                </div>
                <div style={{textAlignLast: "center"}} class="pb-4 pl-3 font-size-xs text-light text-md-left">
                    © Copyright @ 2023-2024 MediTech Healthcare Pvt. Ltd. - All Rights Reserved
                 </div>
            </div>
        </div>



    )
}

export default Footer
