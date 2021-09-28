<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-grandient">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <router-link to="/" class="navbar-brand">Home</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
             <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Features</a> -->
             <router-link to="/features" class="nav-link">Features</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Pricing</a> -->
             <router-link to="/pricing" class="nav-link">Pricing</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link disabled">Disabled</a> -->
             <router-link to="/disabled" class="nav-link disabled">Disabled</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>