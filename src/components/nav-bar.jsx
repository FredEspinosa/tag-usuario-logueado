import { useEffect, useState } from 'react'

// Importar imagenes
import LogIcon from '../assets/ico_login.svg'

function NavBar() {

    // const [tag, setTag] = useState('')
    const [tagNombreCorto, setTagNombreCorto] = useState('')

    useEffect(() => {
        setTagNombreCorto("Davis A.");
      }, []);

  return (
    <div>
        <section>
            <h1 className="hideCont">TagAirlines - Vuelos baratos, nacionales e internacionales</h1>
            <nav className="navbarTAG">
                <div className="menuItemRes hide-desktop">
                    <div className="divItemMenuRes">
                        <div className="flechaMRes"></div>
                        <button className="btnMenuMovil" /*onClick={showMenuMov()}*/ ></button>
                    </div>
                    <div className="itemMenuRes">
                        <div className="bacMenuNavbar">
                            <section className="accordion-footer">
                                <div className="accordion accordion-flush" id="accordionMovil">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="menuM1">
                                            <button className="accordion-button collapsed btnAccMenu" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#accMenu1" aria-expanded="false" aria-controls="collapseOne">
                                                Tu vuelo
                                            </button>
                                        </h2>
                                        <div id="accMenu1" className="accordion-collapse collapse" aria-labelledby="menuM1" data-bs-parent="#accordionMovil">
                                            <div className="accordion-body">
                                                <section className="subMenuAcc">
                                                    <div className="accordion accordion-flush" id="subAccMenu1">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="subMenu1">
                                                                <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#subMenuC1"
                                                                        aria-expanded="false" aria-controls="subMenuC1">
                                                                    Tu Reservación
                                                                </button>
                                                            </h2>
                                                            <div id="subMenuC1" className="accordion-collapse collapse" aria-labelledby="subMenu1" data-bs-parent="#subAccMenu1">
                                                                <div className="accordion-body linksMovil">
                                                                    <a className="txtTittleMenuI" href="https://fo-latam.ttinteractive.com/Zenith/FrontOffice/Tag/es-Es/Home/FindBooking">Consulta tu reservación</a>
                                                                    <a className="txtTittleMenuIOff" href="#">Cambios de nombre</a>
                                                                    <a className="txtTittleMenuIOff" href="#">Cambios de fecha</a>
                                                                    <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/tu-vuelo/tu-reservacion/requisitos-para-viajar/">Requisitos para viajar</a>
                                                                    <a className="txtTittleMenuI" href="https://fo-latam.ttinteractive.com/Zenith/FrontOffice/TAG/es-ES/WebCheckin">Check-in</a>
                                                                    <a className="txtTittleMenuI" href=""></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="subMenu2">
                                                                <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#subMenuC2" aria-expanded="false"
                                                                        aria-controls="subMenuC2">
                                                                    Complementos
                                                                </button>
                                                            </h2>
                                                            <div id="subMenuC2" className="accordion-collapse collapse" aria-labelledby="subMenu2" data-bs-parent="#subAccMenu1">
                                                                <div className="accordion-body linksMovil"> 
                                                                    <a className="txtTittleMenuI" href="https://www.tag.com.gt/equipaje-1?hsLang=es">Equipaje extra</a> 
                                                                    <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/tu-vuelo/complementos/tag-assist/">Tag Assist</a>     
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="subMenu3">
                                                                <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#subMenuC3" aria-expanded="false"
                                                                        aria-controls="subMenuC3">
                                                                    Equipaje
                                                                </button>
                                                            </h2>
                                                            <div id="subMenuC3" className="accordion-collapse collapse" aria-labelledby="subMenu3" data-bs-parent="#subAccMenu1">
                                                                <div className="accordion-body linksMovil">
                                                                    <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/tu-vuelo/equipaje/equipaje-de-mano/">Equipaje de mano</a>
                                                                    <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/tu-vuelo/equipaje/equipaje-documentado/">Equipaje documentado</a>
                                                                    <a className="txtTittleMenuI" href="http://tagairlines.com/es-gt/tu-vuelo/equipaje/mascota-abordo">Mascota a bordo</a>
                                                                    <a className="txtTittleMenuI" href="http://tagairlines.com/es-gt/tu-vuelo/equipaje/equipaje-deportivo">Equipaje deportivo</a>
                                                                    <a className="txtTittleMenuI" href="http://tagairlines.com/es-gt/tu-vuelo/equipaje/arpel">Arpel</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="subMenu4">
                                                                <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#subMenuC4" aria-expanded="false"
                                                                        aria-controls="subMenuC4">
                                                                    Prepara tu viaje
                                                                </button>
                                                            </h2>
                                                            <div id="subMenuC4" className="accordion-collapse collapse" aria-labelledby="subMenu4" data-bs-parent="#subAccMenu1">
                                                                <div className="accordion-body linksMovil">
                                                                    <a className="txtTittleMenuI" href="https://www.tag.com.gt/viajeros-especiales-1?hsLang=es#firstTab">Mujeres Embarazadas</a>
                                                                    <a className="txtTittleMenuI" href="http://tagairlines.com/es-gt/tu-vuelo/prepara-tu-viaje/menores-sin-acompanante">Menor sin acompañante</a>
                                                                    <a className="txtTittleMenuI" href="https://www.tag.com.gt/viajeros-especiales-1?hsLang=es#thirdTab">Pasajeros no admitidos</a>
                                                                    <a className="txtTittleMenuI" href="https://www.tag.com.gt/viajeros-especiales-1?hsLang=es#fourthTab">Alertas de viaje globales</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="menuM2">
                                            <button className="accordion-button collapsed btnAccMenu" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#accMenu2" aria-expanded="false" aria-controls="collapseTwo">
                                                Experiencia Tag
                                            </button>
                                        </h2>
                                        <div id="accMenu2" className="accordion-collapse collapse" aria-labelledby="menuM2" data-bs-parent="#accordionMovil">
                                            <div className="accordion-body">
                                                <section className="subMenuAcc">
                                                    <div className="accordion" id="subAccMenu2">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="subMenu1A">
                                                                <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#subMenuC1A"
                                                                        aria-expanded="false" aria-controls="subMenuC1A">
                                                                    TagAirlines
                                                                </button>
                                                            </h2>
                                                            <div id="subMenuC1A" className="accordion-collapse collapse" aria-labelledby="subMenu1A" data-bs-parent="#subAccMenu2">
                                                                <div className="accordion-body linksMovil"> <a className="txtTittleMenuI" href="https://www.tag.com.gt/tarifas-y-cargos-1?hsLang=es">Nuestras tarifas</a> <a className="txtTittleMenuI" href="https://www.tag.com.gt/nosotros-1?hsLang=es#secondTabUs">Nosotros</a> <a className="txtTittleMenuI" href="https://www.tag.com.gt/condiciones-generales-1?hsLang=es">Condiciones generales</a> <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/experiencia-tag/tag-airlines/regulaciones-covid-19/">COVID-19</a> </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="subMenu2A">
                                                                <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#subMenuC2A" aria-expanded="false"
                                                                        aria-controls="subMenuC2A">
                                                                    Pago y facturación
                                                                </button>
                                                            </h2>
                                                            <div id="subMenuC2A" className="accordion-collapse collapse" aria-labelledby="subMenu2A" data-bs-parent="#subAccMenu2">
                                                                <div className="accordion-body linksMovil"> <a className="txtTittleMenuI" href="https://www.tag.com.gt/tarifas-y-cargos-1?hsLang=es">Formas de Pago</a> <a className="txtTittleMenuIoff hideCont" href="#">Facturación</a> </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="subMenu3A">
                                                                <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#subMenuC3A" aria-expanded="false"
                                                                        aria-controls="subMenuC3A">
                                                                    Servicio al cliente
                                                                </button>
                                                            </h2>
                                                            <div id="subMenuC3A" className="accordion-collapse collapse" aria-labelledby="subMenu3A" data-bs-parent="#subAccMenu2">
                                                                <div className="accordion-body linksMovil">
                                                                    <a className="txtTittleMenuI" href="https://www.tag.com.gt/viajeros-especiales-1?hsLang=es#fourthTab">Recomendaciones</a>
                                                                    <a className="txtTittleMenuI" href="https://www.tag.com.gt/contacto-tag-airlines?hsLang=es">Oficinas</a>
                                                                    <a className="txtTittleMenuI" href="https://www.tag.com.gt/faq-1">Preguntas frecuentes</a>
                                                                    <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/experiencia-tag/servicio-al-cliente/quejas-y-sugerencias/">Sugerencias y Quejas</a>
                                                                    <a className="txtTittleMenuI" href="https://wa.me/50250188123">Chatea</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="menuM3">
                                            <button className="accordion-button collapsed btnAccMenu" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#accMenu3" aria-expanded="false"
                                                    aria-controls="collapseThree">
                                                Destinos
                                            </button>
                                        </h2>
                                        <div id="accMenu3" className="accordion-collapse collapse" aria-labelledby="menuM3" data-bs-parent="#accordionMovil">
                                            <div className="accordion-body">
                                                <section className="subMenuAcc">
                                                    <div className="accordion" id="subAccMenu3">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="subMenu1B">
                                                                <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#subMenuC1B"
                                                                        aria-expanded="false" aria-controls="subMenuC1B">
                                                                    Guatemala
                                                                </button>
                                                            </h2>
                                                            <div id="subMenuC1B" className="accordion-collapse collapse" aria-labelledby="subMenu1B" data-bs-parent="#subAccMenu3">
                                                                <div className="accordion-body linksMovil">
                                                                    <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/guatemala/viajes-a-guatemala/">Guatemala</a>
                                                                    <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/guatemala/viajes-a-flores/">Flores</a>
                                                                    <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/guatemala/viajes-a-puerto-barrios/">Puerto Barrios</a>
                                                                    <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/guatemala/viajes-a-quetzaltenango/">Quetzaltenango</a>
                                                                    <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/guatemala/viajes-a-retalhuleu/">Retalhuleu</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="subMenu2B">
                                                                <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#subMenuC2B" aria-expanded="false"
                                                                        aria-controls="subMenuC2B">
                                                                    Honduras
                                                                </button>
                                                            </h2>
                                                            <div id="subMenuC2B" className="accordion-collapse collapse" aria-labelledby="subMenu2B" data-bs-parent="#subAccMenu3">
                                                                <div className="accordion-body linksMovil">
                                                                <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/honduras/viajes-a-san-pedro-sula/">San Pedro Sula</a>
                                                                <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/honduras/viajes-a-tegucigalpa/">Tegucigalpa</a>
                                                                <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/honduras/viajes-a-roatan/">Roatán</a>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="subMenu3B">
                                                                <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#subMenuC3B" aria-expanded="false"
                                                                        aria-controls="subMenuC3B">
                                                                    México
                                                                </button>
                                                            </h2>
                                                            <div id="subMenuC3B" className="accordion-collapse collapse" aria-labelledby="subMenu3B" data-bs-parent="#subAccMenu3">
                                                                <div className="accordion-body linksMovil">
                                                                    <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/mexico/viajes-a-cancun/">Cancún</a>
                                                                    <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/mexico/viajes-a-merida/">Mérida</a>
                                                                    <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/mexico/viajes-a-oaxaca/">Oaxaca</a>
                                                                    <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/mexico/viajes-a-tuxtla/">Tuxtla</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="subMenu4B">
                                                                <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#subMenuC4B" aria-expanded="false"
                                                                        aria-controls="subMenuC4B">
                                                                    El Salvador
                                                                </button>
                                                            </h2>
                                                            <div id="subMenuC4B" className="accordion-collapse collapse" aria-labelledby="subMenu4B" data-bs-parent="#subAccMenu3">
                                                                <div className="accordion-body linksMovil">
                                                                    <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/el-salvador/viajes-a-el-salvador/">El Salvador</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="subMenu5B">
                                                                <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#subMenuC5B" aria-expanded="false"
                                                                        aria-controls="subMenuC5B">
                                                                    Belice
                                                                </button>
                                                            </h2>
                                                            <div id="subMenuC5B" className="accordion-collapse collapse" aria-labelledby="subMenu5B" data-bs-parent="#subAccMenu3">
                                                                <div className="accordion-body linksMovil">
                                                                    <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/belice/viajes-a-belice">Belice</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="subMenu6B">
                                                                <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#subMenuC6B" aria-expanded="false"
                                                                        aria-controls="subMenuC6B">
                                                                    Experiencias
                                                                </button>
                                                            </h2>
                                                            <div id="subMenuC6B" className="accordion-collapse collapse" aria-labelledby="subMenu5B" data-bs-parent="#subAccMenu3">
                                                                <div className="accordion-body linksMovil">
                                                                    <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/experiencias/sur-de-mexico/">Sur de México</a>
                                                                    <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/experiencias/centroamerica/">Centroamérica</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="menuM4">
                                            <button className="accordion-button collapsed btnAccMenu" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#accMenu4" aria-expanded="false"
                                                    aria-controls="collapseThree">
                                                Servicios
                                            </button>
                                        </h2>
                                        <div id="accMenu4" className="accordion-collapse collapse" aria-labelledby="menuM4" data-bs-parent="#accordionMovil">
                                            <div className="accordion-body">
                                                <section className="subMenuAcc">
                                                    <div className="accordion" id="subAccMenu4">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="subMenu1C">
                                                                <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#subMenuC1C"
                                                                        aria-expanded="false" aria-controls="subMenuC1C">
                                                                    VIP
                                                                </button>
                                                            </h2>
                                                            <div id="subMenuC1C" className="accordion-collapse collapse" aria-labelledby="subMenu1C" data-bs-parent="#subAccMenu4">
                                                                <div className="accordion-body linksMovil"> <a className="txtTittleMenuI" href="https://www.tag.com.gt/servicios-1?hsLang=es#thirdTab">Charter</a> <a className="txtTittleMenuI" href="https://www.tag.com.gt/servicios-1?hsLang=es#fifthTab">Vuelos ejecutivos</a> <a className="txtTittleMenuI" href="https://www.tag.com.gt/servicios-1?hsLang=es#ninethTab">Servicios FBO</a> </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="subMenu2C">
                                                                <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#subMenuC2C" aria-expanded="false"
                                                                        aria-controls="subMenuC2C">
                                                                    Comercial
                                                                </button>
                                                            </h2>
                                                            <div id="subMenuC2C" className="accordion-collapse collapse" aria-labelledby="subMenu2C" data-bs-parent="#subAccMenu4">
                                                                <div className="accordion-body linksMovil"> <a className="txtTittleMenuI" href="https://www.tag.com.gt/servicios-1?hsLang=es#firstTab">Publicidad</a> <a className="txtTittleMenuI" href="https://www.tag.com.gt/servicios-1?hsLang=es#eighthTab">Filmación aérea</a> </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="subMenu3C">
                                                                <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#subMenuC3C" aria-expanded="false"
                                                                        aria-controls="subMenuC3C">
                                                                    Comercio
                                                                </button>
                                                            </h2>
                                                            <div id="subMenuC3C" className="accordion-collapse collapse" aria-labelledby="subMenu3C" data-bs-parent="#subAccMenu4">
                                                                <div className="accordion-body linksMovil"> <a className="txtTittleMenuI" href="https://www.tag.com.gt/servicios-1?hsLang=es#fourthTab">Fumigación aérea</a> <a className="txtTittleMenuI" href="https://www.tag.com.gt/servicios-1?hsLang=es#seventhTab">Combate de incendios</a> </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="subMenu4C">
                                                                <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#subMenuC4C" aria-expanded="false"
                                                                        aria-controls="subMenuC4C">
                                                                    Transportar
                                                                </button>
                                                            </h2>
                                                            <div id="subMenuC4C" className="accordion-collapse collapse" aria-labelledby="subMenu4C" data-bs-parent="#subAccMenu4">
                                                                <div className="accordion-body linksMovil"> <a className="txtTittleMenuI" href="https://www.tag.com.gt/servicios-1?hsLang=es#sixthTab">Cargo</a> <a className="txtTittleMenuI" href="https://www.tag.com.gt/servicios-1?hsLang=es#secondTab">Courier</a> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item finalBorder">
                                        <h2 className="accordion-header" id="menuM5">
                                            <button className="accordion-button collapsed btnAccMenu" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#accMenu5" aria-expanded="false"
                                                    aria-controls="collapseThree">
                                            
                                            </button>
                                        </h2>
                                        <div id="accMenu5" className="accordion-collapse collapse" aria-labelledby="menuM5" data-bs-parent="#accordionMovil">
                                            <div className="accordion-body">
                                                <section className="subMenuAcc">
                                                    <div className="accordion" id="subAccMenu5">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="subMenu1D">
                                                                <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#subMenuC1D"
                                                                        aria-expanded="false" aria-controls="subMenuC1D">
                                                                    Ofertas
                                                                </button>
                                                            </h2>
                                                            <div id="subMenuC1D" className="accordion-collapse collapse" aria-labelledby="subMenu1D" data-bs-parent="#subAccMenu5">
                                                                <div className="accordion-body linksMovil"> <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt//ofertas/paquetes-vacacionales">Paquetes vacacionales</a> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div className="nav-item dropdown dpPais" style={{padding: '15px 0 15px 5px'}}>
                                <a className="nav-link dropdown-toggle txtHPaisSel" href="#" id="navbarDropdownMenuLinkRes" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <span className="flag-icon flag-icon-gt "></span> GT-ES <i className="fas fa-chevron-down fa-xs"></i> </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkRes">
                                    <li>
                                        <p className="ml-2 dropdown-item">País / <span className="text-info">Idioma</span></p>
                                    </li>
                                    <li><a className="dropdown-item" href="#"><span className="flag-icon flag-icon-gt"></span> Guatemala
                                        -
                                        <span className="text-info">Español</span></a></li>
                                    <li><a className="dropdown-item" href="#"><span className="flag-icon flag-icon-hn"></span> Honduras
                                        -
                                        <span className="text-info">Español</span></a></li>
                                    <li><a className="dropdown-item" href="#"><span className="flag-icon flag-icon-sv"></span> El
                                        Salvador -
                                        <span className="text-info">Español</span></a></li>
                                    <li><a className="dropdown-item" href="#"><span className="flag-icon flag-icon-bz"></span> Belice -
                                        <span className="text-info">Español</span></a></li>
                                    <li><a className="dropdown-item" href="#"><span className="flag-icon flag-icon-mx"></span> México -
                                        <span className="text-info">Español</span></a></li>
                                    <li><a className="dropdown-item" href="#"> Otro - <span className="text-info">Inglés</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="https://tagairlines.com/img/navbar/logo_TAG.svg" alt="Tag Logo" className="imgHLogoTAG" /*onClick={goTAG()}*/ />

                {/* <button className="btnSignInRes" type="button" data-bs-toggle="modal" data-bs-target="#tagInicioSesion">
                    <p className="txtBtnSignIn">Iniciar SesiónM</p>
                </button> */}
                <div className='tag-txt-usuario-logueado hide-desktop'>
                        <div className='tag-icon-login'>
                            <img src={LogIcon} alt=""/>
                        </div>
                        <div className='tag-container-usuario-login'>
                            <div className='tag-info-usuario-login'>
                                <span className='tag-txt-bienvenida'>¡Hola!</span>
                                <span className='tag-txt-nomb-corto'>{tagNombreCorto}</span>
                            </div>
                            <div className='tag-cont-arrow'>
                                <div className="arrow"></div>
                            </div>
                        </div>
                    </div>
                <div className="menuNavbar">
                    <div className="menuItem1">
                        <div className="divItemMenu">
                            <div className="flechaM1"></div> <span className="txtNavItem">Tu vuelo</span> </div>
                        <div className="itemMenu1">
                            <div className="bacMenuNavbar">
                                <div className="row tag-dark-link">
                                    <div className="col-3 px-5 mt-4">
                                        <img src="https://tagairlines.com/img/navbar//ico_menu-reservacion-reservacin.svg" height="35px" alt="icono de reservaciones" />
                                        <p className="my-3 txtTittleMenu">Tu Reservación</p>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://fo-latam.ttinteractive.com/Zenith/FrontOffice/Tag/es-Es/Home/FindBooking">Consulta tu reservación</a> </div>
                                        <div className="w-100 my-4 hideCont"> <a className="txtTittleMenuIOff" href="#">Cambios de nombre</a> </div>
                                        <div className="w-100 my-4 hideCont"> <a className="txtTittleMenuIOff" href="#">Cambios de fecha</a> </div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/tu-vuelo/tu-reservacion/requisitos-para-viajar/">Requisitos para viajar</a> </div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://fo-latam.ttinteractive.com/Zenith/FrontOffice/TAG/es-ES/WebCheckin">Check-in</a> </div>
                                    </div>
                                    <div className="col-3 px-5 mt-4">
                                        <img src="https://tagairlines.com/img/navbar/ico_menu-reservacion-complementos.svg" height="35px" alt="icono de complementos" />
                                        <p className="my-3 txtTittleMenu">Complementos</p>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://www.tag.com.gt/equipaje-1?hsLang=es">Equipaje extra</a> </div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/tu-vuelo/complementos/tag-assist/">Tag Assist</a> </div>
                                        

                                    </div>
                                    <div className="col-3 px-5 mt-4">
                                        <img src="https://tagairlines.com/img/navbar/ico_menu-reservacion-equipaje.svg" height="35px" alt="icono de equipajes" />
                                        <p className="my-3 txtTittleMenu">Equipaje</p>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/tu-vuelo/equipaje/equipaje-de-mano/">Equipaje de mano</a> </div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/tu-vuelo/equipaje/equipaje-documentado/">Equipaje documentado</a> </div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="http://tagairlines.com/es-gt/tu-vuelo/equipaje/mascota-abordo">Mascota a bordo</a> </div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="http://tagairlines.com/es-gt/tu-vuelo/equipaje/equipaje-deportivo">Equipaje deportivo</a> </div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="http://tagairlines.com/es-gt/tu-vuelo/equipaje/arpel">Arpel</a> </div>
                                    </div>
                                    <div className="col-3 px-5 mt-4">
                                        <img src="https://tagairlines.com/img/navbar/ico_menu-reservacion-prepara.svg" height="35px" alt="icono de pasaporte" />
                                        <p className="my-3 txtTittleMenu">Prepara tu viaje</p>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://www.tag.com.gt/viajeros-especiales-1?hsLang=es#firstTab">Mujeres Embarazadas</a> </div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="http://tagairlines.com/es-gt/tu-vuelo/prepara-tu-viaje/menores-sin-acompanante">Menor sin acompañante</a> </div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://www.tag.com.gt/viajeros-especiales-1?hsLang=es#thirdTab">Pasajeros no admitidos</a> </div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://www.tag.com.gt/viajeros-especiales-1?hsLang=es#fourthTab">Alertas de viaje globales</a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menuItem2">
                        <div className="divItemMenu">
                            <div className="flechaM2"></div> <span className="txtNavItem">Experiencia Tag</span>
                        </div>
                        <div className="itemMenu2">
                            <div className="bacMenuNavbar">
                                <div className="row tag-dark-link">
                                    <div className="col-3 px-5 mt-4">
                                        <img src="https://tagairlines.com/img/navbar/logo-tagairlines-blue.png" style={{height: '35px', marginTop: '0px !important;'}} alt="icono de TagAirlines" />
                                        <p className="my-3 txtTittleMenu">TagAirlines</p>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://www.tag.com.gt/tarifas-y-cargos-1?hsLang=es">Nuestras tarifas</a> </div>
                                        <div className="w-100 my-4"> <a className="txtTittleMenuI" href="https://www.tag.com.gt/nosotros-1?hsLang=es#secondTabUs">Nosotros</a> </div>
                                        <div className="w-100 my-4"> <a className="txtTittleMenuI" href="https://www.tag.com.gt/condiciones-generales-1?hsLang=es">Condiciones generales</a> </div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/experiencia-tag/tag-airlines/regulaciones-covid-19/">COVID-19</a> </div>
                                    </div>
                                    <div className="col-3 px-5 mt-4">
                                        <img src="https://tagairlines.com/img/navbar/ico-menu-exp-pago.svg" alt="icono de pago y facturación" />
                                        <p className="my-3 txtTittleMenu">Pago y facturación</p>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://www.tag.com.gt/tarifas-y-cargos-1?hsLang=es">Formas de Pago</a> </div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuIoff hideCont" href="#">Facturación</a> </div>
                                    </div>
                                    <div className="col-3 px-5 mt-4">
                                        <img src="https://tagairlines.com/img/navbar/ico-menu-exp-servicio.svg" alt="icono de audífonos, servicio al cliente" />
                                        <p className="my-3 txtTittleMenu"> Servicio al cliente</p>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://www.tag.com.gt/viajeros-especiales-1?hsLang=es#fourthTab">Recomendaciones</a> </div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://www.tag.com.gt/contacto-tag-airlines?hsLang=es">Oficinas</a> </div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://www.tag.com.gt/faq-1">Preguntas frecuentes</a> </div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/experiencia-tag/servicio-al-cliente/quejas-y-sugerencias/">Sugerencias y Quejas</a> </div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://wa.me/50250188123">Chatea</a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menuItem3">
                        <div className="divItemMenu">
                            <div className="flechaM3"></div> <span className="txtNavItem">Destinos</span>
                        </div>
                        <div className="itemMenu3">
                            <div className="bacMenuNavbar">
                                <div className="row tag-dark-link">
                                    <div className="col px-5 mt-4">
                                        <img src="https://tagairlines.com/img/navbar/ico_exp_flag-gt.svg" style={{height: "20px;"}} alt="icono bandera de Guatemala" />
                                        <p className="my-3 txtTittleMenu">Guatemala</p>
                                        <div className="w-100 my-4 "><a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/guatemala/viajes-a-guatemala/">Guatemala</a></div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/guatemala/viajes-a-flores/">Flores</a></div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/guatemala/viajes-a-puerto-barrios/">Puerto Barrios</a></div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/guatemala/viajes-a-quetzaltenango/">Quetzaltenango</a></div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/guatemala/viajes-a-retalhuleu/">Retalhuleu</a></div>
                                    </div>
                                    <div className="col px-5 mt-4">
                                        <img src="https://tagairlines.com/img/navbar/ico_exp_hn.svg" style={{height: "20px;"}} alt="icono bandera de Honduras" />
                                        <p className="my-3 txtTittleMenu">Honduras</p>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/honduras/viajes-a-san-pedro-sula/">San Pedro Sula</a></div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/honduras/viajes-a-tegucigalpa/">Tegucigalpa</a></div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/honduras/viajes-a-roatan/">Roatán</a></div>
                                    </div>
                                    <div className="col px-5 mt-4">
                                        <img src="https://tagairlines.com/img/navbar/ico_exp_mx.svg" style={{height: "20px;"}} alt="icono bandera de México" />
                                        <p className="my-3 txtTittleMenu">México</p>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/mexico/viajes-a-cancun/">Cancún</a></div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/mexico/viajes-a-merida/">Mérida</a></div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/mexico/viajes-a-oaxaca/">Oaxaca</a></div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/mexico/viajes-a-tuxtla/">Tuxtla</a></div>
                                    </div>
                                    <div className="col px-5 mt-4">
                                        <img src="https://tagairlines.com/img/navbar/ico_exp_sv.svg" style={{height: "20px;"}} alt="icono bandera de El Salvador" /> 
                                        <p className="my-3 txtTittleMenu">El Salvador</p>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/el-salvador/viajes-a-el-salvador/">El Salvador</a></div>
                                        <img src="https://tagairlines.com/img/navbar/ico_exp_bz.svg" style={{height: "20px;"}} alt="icono bandera de Belice" />
                                        <p className="my-3 txtTittleMenu">Belice</p>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/belice/viajes-a-belice">Belice</a></div>
                                    </div>
                                    <div className="col px-5 mt-4">
                                        <img src="https://tagairlines.com/img/navbar/ico_multi_svg.svg" style={{height: "20px;"}} alt="icono bandera de Belice" />
                                        <p className="my-3 txtTittleMenu">Experiencias</p>
                                        <div className="w-100 my-4 ">
                                            <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/experiencias/sur-de-mexico/">Sur de México</a>
                                        </div>
                                        <div className="w-100 my-4 ">
                                            <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt/destinos/experiencias/centroamerica/">Centroamérica</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menuItem4">
                        <div className="divItemMenu">
                            <div className="flechaM4"></div> <span className="txtNavItem">Servicios</span> </div>
                        <div className="itemMenu4">
                            <div className="bacMenuNavbar">
                                <div className="row tag-dark-link">
                                    <div className="col-3 px-5 mt-4">
                                        <img src="https://tagairlines.com/img/navbar/ico_servicios-vip.svg" height="35px" alt="icono de avión" />
                                        <p className="my-3 txtTittleMenu">VIP</p>
                                        <div className="w-100 my-4"> <a className="txtTittleMenuI" href="https://www.tag.com.gt/servicios-1">Charter</a> </div>
                                        <div className="w-100 my-4"> <a className="txtTittleMenuI" href="https://www.tag.com.gt/servicios-1">Vuelos ejecutivos</a> </div>
                                        <div className="w-100 my-4"> <a className="txtTittleMenuI" href="https://www.tag.com.gt/servicios-1">Servicios FBO</a> </div>
                                    </div>
                                    <div className="col-3 px-5 mt-4">
                                        <img src="https://tagairlines.com/img/navbar/ico_servicios-comercial.svg" height="35px" alt="icono de filmación comercial" />
                                        <p className="my-3 txtTittleMenu">Comercial</p>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://www.tag.com.gt/servicios-1">Publicidad</a> </div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://www.tag.com.gt/servicios-1">Filmación aérea</a> </div>
                                    </div>
                                    <div className="col-3 px-5 mt-4"> <img src="https://tagairlines.com/img/navbar/ico_servicios-comercio.svg" height="35px" alt="icono de un helicóptero comercial" />
                                        <p className="my-3 txtTittleMenu">Comercio</p>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://www.tag.com.gt/servicios-1">Fumigación aérea</a> </div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://www.tag.com.gt/servicios-1">Combate de incendios</a> </div>
                                    </div>
                                    <div className="col-3 px-5 mt-4"> <img src="https://tagairlines.com/img/navbar/ico_servicios-transporte.svg" height="35px" alt="icono de un hangar con avión" />
                                        <p className="my-3 txtTittleMenu">Transportar</p>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://www.tag.com.gt/servicios-1">Cargo</a> </div>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://www.tag.com.gt/servicios-1">Courier</a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menuItem5">
                        <div className="divItemMenu">
                            <div className="flechaM5"></div> <span className="txtNavItem"></span> </div>
                        <div className="itemMenu5">
                            <div className="bacMenuNavbar">
                                <div className="row tag-dark-link">
                                    <div className="col-3 px-5 mt-4"> <img src="https://tagairlines.com/img/navbar/ico-menu-promo-promo.svg" height="35px" />
                                        <p className="my-3 txtTittleMenu">Ofertas</p>
                                        <div className="w-100 my-4 "> <a className="txtTittleMenuI" href="https://tagairlines.com/es-gt//ofertas/paquetes-vacacionales">Paquetes vacacionales</a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vertical-white-line line-sm "></div>
                    <div className="nav-item dropdown dpPais">
                        <a className="nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "white;"}}> <span className="flag-icon flag-icon-gt"></span> GT-ES</a>
                    </div>
                    {/* <button className="btnSignIn" type="button" data-bs-toggle="modal" data-bs-target="#tagInicioSesion">
                        <p className="txtBtnSignIn">Iniciar SesiónD</p>
                    </button> */}
                    <div className='tag-txt-usuario-logueado'>
                        <div className='tag-icon-login'>
                            <img src={LogIcon} alt=""/>
                        </div>
                        <div className='tag-container-usuario-login'>
                            <div className='tag-info-usuario-login'>
                                <span className='tag-txt-bienvenida'>¡Hola!</span>
                                <span className='tag-txt-nomb-corto'>{tagNombreCorto}</span>
                            </div>
                            <div className='tag-cont-arrow'>
                                <div className="arrow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    </div>
  )
}

export default NavBar