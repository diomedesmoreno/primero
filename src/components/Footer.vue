<template>
    <div class="footer">
        <footer class="text-center bg-dark text-white py-4 bg-gradient">
            <h3>&copy; 2021 - Diomedes Morneo</h3>
        </footer>

    </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
      year: new Date().getFullYear(),
  })
};
</script>
<style scoped>
.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>