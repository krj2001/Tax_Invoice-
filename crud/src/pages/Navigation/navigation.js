

function Navigation(){
    return(
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">TAX INVOICE</a>
          <button class="navbar-toggler" type="button" data-coreui-toggle="collapse" data-coreui-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Add User</a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="update">Edit User</a>
              </li> */}
              <li class="nav-item">
                <a class="nav-link" href="/table">View User</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default Navigation