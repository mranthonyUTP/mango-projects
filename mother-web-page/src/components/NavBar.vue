<script setup lang="ts">

</script>

<!-- defineProps<{  }>() -->

<template>
    <nav class="navbar">
        <div class="navbar__left">
            <img src="/src/assets/vue.svg" alt="Logo" class="navbar__logo-image" />
            <span class="navbar__brand">La Emperatriz</span>
        </div>
        <ul class="navbar__center">
            <li><a href="#" class="navbar__link">Inicio</a></li>
            <li><a href="#" class="navbar__link">Nosotros</a></li>
            <li><a href="#" class="navbar__link">Servicios</a></li>
            <li><a href="#" class="navbar__link">Contacto</a></li>
        </ul>
        <div class="navbar__right">
            <a href="#" class="navbar__cta">Reserva</a>
        </div>
    </nav>
</template>

<style scoped>

.navbar {
    height: 4.5rem;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0 2rem;
    box-sizing: border-box;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(34, 34, 34, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255,255,255,0.1);
}

.navbar__left {
    display: flex;
    align-items: center;
    gap: 0.7rem;
}

.navbar__logo-image {
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    background: #fff2;
    object-fit: cover;
}

.navbar__brand {
    font-size: 1.3rem;
    font-weight: bold;
    color: #fff;
    letter-spacing: 1px;
}

.navbar__center {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

.navbar__link {
    text-decoration: none;
    padding: 0.5rem 1.2rem;
    border-radius: 2rem;
    background: rgba(255,255,255,0.10);
    color: #fff;
    font-weight: 500;
    transition: background 0.2s, color 0.2s, box-shadow 0.2s;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.04);
    border: none;
    outline: none;
    display: inline-block;
}
.navbar__link:hover, .navbar__link:focus {
    background: rgba(255,255,255,0.28);
    color: #222;
    box-shadow: 0 4px 16px 0 rgba(0,0,0,0.10);
    text-decoration: none;
}

.navbar__right {
    display: flex;
    align-items: center;
}

.navbar__cta {
    background: linear-gradient(90deg, #ffb347 0%, #ffcc33 100%);
    color: #222;
    font-weight: bold;
    border: none;
    border-radius: 2rem;
    padding: 0.5rem 1.5rem;
    margin-left: 1rem;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
    transition: background 0.2s, color 0.2s, box-shadow 0.2s;
    text-decoration: none;
    cursor: pointer;
}
.navbar__cta:hover, .navbar__cta:focus {
    background: linear-gradient(90deg, #ffcc33 0%, #ffb347 100%);
    color: #111;
    box-shadow: 0 4px 16px 0 rgba(0,0,0,0.15);
}

</style>