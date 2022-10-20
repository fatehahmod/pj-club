import React from "react";
import { AiOutlineLogin } from 'react-icons/ai';
import { Link, Outlet } from "react-router-dom";
import useFirebase from "../../Firebase/useFirebase";


import "./Das2.css";

const Das2 = () => {
  const { leLogout, user, admin } = useFirebase();

  return (
    <div>
      <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <nav
          class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
          id="navbarVertical"
        >
          <div class="container-fluid">
            <button
              class="navbar-toggler ms-n2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#sidebarCollapse"
              aria-controls="sidebarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh_k-PXFEOg0WLls_i5Fdmv_3xffkwSmi63F-zWlby&s"
                alt="..."
              />
            </a>

            <div class="navbar-user d-lg-none">
              <div class="dropdown">
                {/* <a
                  href="#"
                  id="sidebarAvatar"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div class="avatar-parent-child">
                    <img
                      alt="Image Placeholder"
                      src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                      class="avatar avatar- rounded-circle"
                    />
                    <span class="avatar-child avatar-badge bg-success"></span>
                  </div>
                </a> */}

                <div
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="sidebarAvatar"
                >
                  <a href="#" class="dropdown-item">
                    Profile
                  </a>
                  <a href="#" class="dropdown-item">
                    Settings
                  </a>
                  <a href="#" class="dropdown-item">
                    Billing
                  </a>
                  <hr class="dropdown-divider" />
                  {/* <a href="#" class="dropdown-item"  onClick={leLogout}>Logout</a> */}

                  
                </div>
              </div>
            </div>

            <div class="collapse navbar-collapse" id="sidebarCollapse">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link" to="/dasHader">
                    <i class="bi bi-people"></i> Home
                  </Link>
                </li>
                {/* <li class="nav-item">
                  <Link class="nav-link" to="/makeadmin">
                    <i class="bi bi-bar-chart"></i> Make Staf
                  </Link>
                </li> */}

                <li class="nav-item">
                  <Link class="nav-link" to="/facilities">
                    <i class="bi bi-people"></i> All Bike
                  </Link>
                </li>
                { admin &&  
                    <li class="nav-item">
                    <Link class="nav-link" to="/addFacility">
                      <i class="bi bi-house"></i> add bike
                    </Link>
                    <Link class="nav-link" to="/makeadmin">
                    <i class="bi bi-bar-chart"></i> Make Staf
                  </Link>
                  </li>
                }
              </ul>

              <hr class="navbar-divider opacity-20" />

              {/* <ul class="navbar-nav mb-md-4">
                <li>
                  <div
                    class="nav-link text-xs font-semibold text-uppercase text-muted ls-wide"
                    href="#"
                  >
                    Contacts
                    <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-4">
                      13
                    </span>
                  </div>
                </li>
                <li>
                  <a href="#" class="nav-link d-flex align-items-center">
                    <div class="me-4">
                      <div class="position-relative d-inline-block text-white">
                        <img
                          alt="Image Placeholder"
                          src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                          class="avatar rounded-circle"
                        />
                        <span class="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
                      </div>
                    </div>
                    <div>
                      <span class="d-block text-sm font-semibold">
                        Marie Claire
                      </span>
                      <span class="d-block text-xs text-muted font-regular">
                        Paris, FR
                      </span>
                    </div>
                    <div class="ms-auto">
                      <i class="bi bi-chat"></i>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link d-flex align-items-center">
                    <div class="me-4">
                      <div class="position-relative d-inline-block text-white">
                        <span class="avatar bg-soft-warning text-warning rounded-circle">
                          JW
                        </span>
                        <span class="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
                      </div>
                    </div>
                    <div>
                      <span class="d-block text-sm font-semibold">
                        Michael Jordan
                      </span>
                      <span class="d-block text-xs text-muted font-regular">
                        Bucharest, RO
                      </span>
                    </div>
                    <div class="ms-auto">
                      <i class="bi bi-chat"></i>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link d-flex align-items-center">
                    <div class="me-4">
                      <div class="position-relative d-inline-block text-white">
                        <img
                          alt="..."
                          src="https://images.unsplash.com/photo-1610899922902-c471ae684eff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                          class="avatar rounded-circle"
                        />
                        <span class="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-danger rounded-circle"></span>
                      </div>
                    </div>
                    <div>
                      <span class="d-block text-sm font-semibold">
                        Heather Wright
                      </span>
                      <span class="d-block text-xs text-muted font-regular">
                        London, UK
                      </span>
                    </div>
                    <div class="ms-auto">
                      <i class="bi bi-chat"></i>
                    </div>
                  </a>
                </li>
              </ul> */}

              <div class="mt-auto"></div>

              <ul class="navbar-nav">
                {/* <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-person-square"></i> Account
                  </a>
                </li> */}
                <li class="nav-item">
                  
                  {user?.email ? (
                    <>
                      <button
                        class="nav-link"
                        onClick={leLogout}
                        
                      >
                       <i class="bi bi-box-arrow-left"></i> Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link className="nav-link active" to="/login">
                       <AiOutlineLogin/> Login
                      </Link>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="h-screen flex-grow-1 overflow-y-lg-auto">
          {/* <DasHader/> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Das2;
