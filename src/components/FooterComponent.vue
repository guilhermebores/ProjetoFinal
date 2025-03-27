<template>
    <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2025 GamesKing. Todos os direitos reservados.</p>
            <div class="footer-links">
                <a>Contato (42) 999674889</a>
                <a>Política de Privacidade</a>

                <div class="social-links">

                    <a href="//www.facebook.com/minhaempresa" target="_blank" aria-label="Facebook">
                        <img src="/src/assets/img/pngwing.com (7).png" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/guilhermegabriel27?igsh=NTNuMDlmN3VxN2hu&utm_source=qr"
                        target="_blank" aria-label="Instagram">
                        <img src="/src/assets/img/pngwing.com (6).png" alt="Instagram" />
                    </a>
                    <a href="https://x.com/ovidio_farias?s=11&t=Ca9NP6feSVIjUgHp4T2r8A" target="_blank"
                        aria-label="Twitter">
                        <img src="/src/assets/img/pngwing.com (8).png" alt="X" />
                    </a>
                    <a href="https://www.linkedin.com/in/guilherme-berge-575592305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                        target="_blank" aria-label="LinkedIn">
                        <img src="/src/assets/img/pngwing.com (9).png" alt="Linkedin" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
img{
    height: 30px;
}

.footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px 0;
    bottom: 0;
    width: 100%;
    left: 0;
}

.footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer-links {
    margin-top: 10px;
    display: flex;
}

.footer-links a {
    color: #fff;
    margin: 0 10px;
    text-decoration: none;
}

.footer-links a:hover {
    text-decoration: underline;
}

social-links {
    margin-top: 20px;
}

.social-links a {
    color: #fff;
    margin: 0 10px;
    font-size: 24px;
    text-decoration: none;
}

.social-links a:hover {
    color: #ccc;
}
</style>
