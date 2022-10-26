class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="menu">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul
            class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style="--bs-scroll-height: 100px"
          >
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/index.html">Atividade</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sobre</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cadastrar
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/pages/cadastrar/funcionario/">Funcionário</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/pages/cadastrar/hospital/">Hospital</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/pages/cadastrar/paciente/">Paciente</a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Consultar/Editar
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/pages/consultar_editar/funcionario/">Funcionário</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/pages/consultar_editar/hospital/">Hospital</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/pages/consultar_editar/paciente/">Paciente</a>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
      `;
  }
}

customElements.define("header-component", Header);
