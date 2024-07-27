import Image from "next/image";
import landing2 from "../../../assets/landing2.jpg"

export default function Landing() {
  return (
    <>
    <div className="w-full bg-white">
      <div className="h-[8vh] min-h-[70px] flex items-center border-b-2">
        <div className="flex w-[90vw] mx-auto max-w-7xl md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row ml-6 items-center justify-between lg:justify-start">
              <a
                href="/"
                className="text-lg font-bold tracking-tighter text-hercules-dark-primary-button transition duration-500 ease-in-out transform lg:pr-8"
              >
                {" "}
                Hércules{" "}
              </a>
            </div>

            <nav className="flex bg-white w-full z-10 flex-col items-center flex-grow  border-hercules-dark-primary-button md:pb-0 md:flex md:justify-end md:flex-row lg:border-l-2 lg:pl-2">
              <a
                className="px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0  focus:outline-none focus:shadow-outline"
                href="http://www.helpcom.cl/"
              >
                Helpcom
              </a>
              <a
                className="px-4 py-2 mt-2 mb-4 md:mb-0 text-sm text-gray-500 md:mt-0 focus:outline-none focus:shadow-outline"
                href="#contacto"
              >
                Contacto
              </a>
            </nav>
            <div className="ml-auto">
              <button className="hover:scale-105 bg-hercules-dark-primary-button text-white  font-semibold text-base px-8 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-in-out transition-all duration-400">
                Ingresar
              </button>
            </div>
          </div>
        </div>


        <div className=" ">
        <section>
          <div className="bg-black relative w-screen h-screen md:h-[65vh] min-h-590">
            <Image
              src={landing2}
              alt="Hércules"
              className="h-full w-full object-cover"
              // width={100}
              // height={24}
              priority
            />
            <div className="absolute top-0 left-0 h-full w-full bg-black opacity-70"></div>
            <div className="px-8 absolute top-1/3 left-1/2 w-full md:max-w-6xl transform -translate-x-1/2 -translate-y-1/3 text-white ">
              <div className="flex mb-2">
                <h2 className="max-w-5xl text-xl leading-none tracking-tighter text-neutral-600 md:text-xl lg:text-2l xl:text-3xl lg:max-w-6xl">
                  Bienvenido a Hércules
                </h2>
                <span className="bg-hercules-light-primary-button h-1 w-24 mt-auto mb-3 ml-1 hidden md:block"></span>
              </div>
              <h1 className="max-w-5xl font-medium text-left text-3xl leading-none tracking-tighter text-neutral-600 md:text-2xl lg:text-4xl xl:text-5xl lg:max-w-6xl">
                El más poderoso Software de Remuneraciones.
              </h1>
              <p className="max-w-2xl mt-6 text-lg leading-relaxed text-left text-white">
                {/* Hércules es un software de remuneraciones multiempresas,
                multiusuario y multiniveles: puedes tratar a tu empresa como un
                holding a cargo de diferentes empresas con RUT propio, con
                múltiples trabajadores y asignarle a los usuarios el rol que
                elijas.
                <br /> */}
                Gestiona en segundos y de manera online tus liquidaciones;
                actualiza y calcula haberes y descuentos; genera libro de
                remuneraciones electrónico, reportes y mucho más.
              </p>
              <div className="w-full">
                <button className="mt-4  mr-auto bg-hercules-light-primary-button text-white dark:text-dark-primary font-medium uppercase text-base px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">
                  Adquirir Servicio
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 pb-4 pt-12 hidden md:block">
          <div className="grid grid-cols-2 gap-4 items-center mx-auto max-w-5xl">
            <div className="mb-24">
              <h1 className="text-3xl font-semibold text-black">
                Beneficios de confiar tus remuneraciones a Hércules
              </h1>
              <hr className="w-60 rounded-md bg-hercules-light-primary-button h-1 my-4"></hr>
            </div>
            <div>
              <p className="text-lg mr-2 text-black">
                {/* <b> */}
                Más de 15 años nos avalan como empresa proveedores de software
                de mas de 500 socios operando con las distintas aplicaciones de{" "}
                <strong className="font-normal">HELPCOM</strong>.
                <br />
                Hércules es una herramienta que une nuestra experiencia en
                aplicaciones de escritorio y remuneraciones para proporcionarle
                a nuestros socios la mejor experiencia online.
                {/* </b> */}
              </p>

              <ul className="mt-4">
                <li className="flex items-center mb-3">
                  <div>
                    <svg
                      className="w-8 h-8 mr-2 text-hercules-light-primary-button"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="text-black text-base">
                      Maneja múltiples empresas y sus sucursales.
                    </span>
                  </div>
                </li>

                <li className="flex items-center mb-3">
                  <div>
                    <svg
                      className="w-8 h-8 mr-2 text-hercules-light-primary-button"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="text-black text-base">
                      Agrega los usuarios que necesites con el nivel de acceso
                      que desees.
                    </span>
                  </div>
                </li>

                <li className="flex items-center mb-3">
                  <div>
                    <svg
                      className="w-8 h-8 mr-2 text-hercules-light-primary-button"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="text-black text-base">
                      Interacción directa con PREVIRED y DIRECCIÓN DEL TRABAJO.
                    </span>
                  </div>
                </li>

                <li className="flex items-center mb-3">
                  <div>
                    <svg
                      className="w-8 h-8 mr-2 text-hercules-light-primary-button"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="text-black text-base">
                      Haberes y descuentos normalizados y personalizables.
                    </span>
                  </div>
                </li>

                <li className="flex mb-3">
                  <div>
                    <svg
                      className="w-8 h-8 mr-2 text-hercules-light-primary-button"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="text-black text-base">
                      Parámetros y datos de actualización mensuales y anuales
                      manejados de forma centralizada.
                    </span>
                  </div>
                </li>

                <li className="flex items-center mb-3">
                  <div>
                    <svg
                      className="w-8 h-8 mr-2 text-hercules-light-primary-button"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="text-black text-base">
                      Cálculo de remuneraciones y reportería en segundos.
                    </span>
                  </div>
                </li>

                <li className="flex items-center mb-3">
                  <div>
                    <svg
                      className="w-8 h-8 mr-2 text-hercules-light-primary-button"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="text-black text-base">
                      Incluye soporte técnico especializado.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className=" flex flex-col items-center px-8 pb-4 md:mb-0 pt-12">
            {/* Celular */}
            <div className="flex flex-col w-full md:hidden text-left max-w-max pb-12 lg:max-w-5xl ">
              <div className="w-full mx-auto">
                <h1 className="text-2xl font-semibold">
                  Beneficios de confiar tus remuneraciones a Hércules
                </h1>
              </div>

              <span className="w-60 rounded-md bg-hercules-light-primary-button h-1 my-4"></span>
              <div>
                <p className="text-lg mr-2 ">
                  {/* <b> */}
                  Más de 15 años nos avalan como empresa proveedores de software
                  de mas de 500 socios operando con las distintas aplicaciones
                  de <strong className="font-normal">HELPCOM</strong>.
                  <br />
                  Hércules es una herramienta que une nuestra experiencia en
                  aplicaciones de escritorio y remuneraciones para
                  proporcionarle a nuestros socios la mejor experiencia online.
                  {/* </b> */}
                </p>
                <ul className="mt-4">
                  <li className="flex items-center mb-3">
                    <div>
                      <svg
                        className="w-7 h-7 mt-1 mr-2 top-0 text-hercules-light-primary-button"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="text-black text-base mt-1">
                        Maneja múltiples empresas y sus sucursales.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-center mb-3">
                    <div>
                      <svg
                        className="w-7 h-7 mt-1 mr-2 top-0 text-hercules-light-primary-button"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="text-black text-base">
                        Agrega los usuarios que necesites con el nivel de acceso
                        que desees.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-center mb-3">
                    <div>
                      <svg
                        className="w-7 h-7 mt-1 mr-2 top-0 text-hercules-light-primary-button"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="text-black text-base">
                        Interacción directa con PREVIRED y DIRECCIÓN DEL
                        TRABAJO.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-center mb-3">
                    <div>
                      <svg
                        className="w-7 h-7 mr-2 text-hercules-light-primary-button"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="text-black text-base">
                        Haberes y descuentos normalizados y personalizables.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-center mb-3">
                    <div>
                      <svg
                        className="w-7 h-7 mr-2 text-hercules-light-primary-button"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="text-black text-base">
                        Cálculo de remuneraciones y reportería en segundos.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-center mb-3">
                    <div>
                      <svg
                        className="w-7 h-7 mr-2 text-hercules-light-primary-button"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="text-black text-base">
                        Parámetros y datos de actualización mensuales y anuales
                        manejados de forma centralizada.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-center mb-3">
                    <div>
                      <svg
                        className="w-7 h-7 mr-2 text-hercules-light-primary-button"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="text-black text-base">
                        Cálculo de remuneraciones y reportería en segundos.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-center mb-3">
                    <div>
                      <svg
                        className="w-7 h-7 mr-2 text-hercules-light-primary-button"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="text-black text-base">
                        Incluye soporte técnico especializado.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          <div id="contacto" className="flex flex-col items-center w-full px-8 mb-16">
            <div className="flex flex-col w-full text-left lg:max-w-5xl">
              <div className="w-full mx-auto">
                <h1 className="text-2xl font-semibold text-center">
                  Contáctanos para más información
                </h1>
              </div>
              <span className="w-60 rounded-md bg-hercules-light-primary-button h-1 my-4 mx-auto md:mb-8"></span>
              <div className="w-full mx-auto  max-w-md ">
              </div>
            </div>
          </div>
          </div>
        </section>

        <footer
          className="bg-hercules-light-footer-black w-full "
          aria-labelledby="footer-heading"
        >
          <div className="flex py-4">
            <div className="md:ml-auto py-4 pr-6">
              {/* <img
                src={logoVertical}
                alt=""
                className="mx-auto hidden md:block "
                srcset=""
                height="70"
                width="70"
              /> */}
            </div>

            <div className="md:mr-auto">
              <div className="flex flex-col  w-full mx-auto  mt-4 lg:flex-row lg:max-w-5xl ">
                <div>
                  <h1 className="text-base font-semibold text-white items-start">
                    Horarios de atención:
                  </h1>
                  <div className="flex flex-col items-center justify-left md:w-56  lg:flex-row">
                    <div className="flex flex-col  w-full  mx-auto md:mx-0  lg:mb-0 ">
                      <h1 className="text-base font-normal  text-white">
                        Lunes a Viernes
                      </h1>
                      <p className="text-sm font-light text-gray-400">
                        9:00 - 19:00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-full mx-auto  lg:mb-0 ">
                  <div>
                    <h1 className="text-base font-semibold text-white">
                      Teléfono:
                    </h1>
                    <p className="text-sm font-light w-full text-gray-400">
                      45 2 402046
                    </p>
                  </div>
                  <div>
                    <h1 className="text-base font-semibold text-white">
                      Email:
                    </h1>
                    <p className="text-sm font-light text-gray-400">
                      hercules@helpcom.cl
                    </p>
                  </div>
                </div>

                <div className="flex flex-col  w-full mx-auto lg:mb-0 ">
                  <h1 className="text-base font-semibold text-white">
                    Dirección:
                  </h1>
                  <p className="text-sm font-light text-gray-400">
                    Los Periodistas 0133, Temuco, Chile
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col pb-3 items-center justify-center">
            <span className="text-sm font-light text-gray-400">
              Copyright © 2023 Helpcom
            </span>
            <span className="text-sm  font-light text-gray-400">
              Todos los derechos reservados.
            </span>
          </div>
        </footer>
      </div>
    </div>
    </>
  );
}
