<template>
    <header class="header">
        <div class="container">
            <div class="header-inner">
                <img  src="../assets/logo.png" alt="logo" class="logo link">
                <nav class="header-navigation">
                    <router-link class="link header__link" to="">Рацион</router-link>
                    <router-link class=" link header__link" to="">Как готовим</router-link>
                    <router-link class=" link header__link" to="">Цена</router-link>
                    <router-link class=" link header__link" to="">Отзывы</router-link>
                    <router-link class=" link header__link" to="">О нас</router-link>
                    <router-link class=" link header__link" to="">Войти</router-link>
                </nav>
                <div class="link header-button">
                    <span class="header-button-text">Обратный звонок</span>
                </div>
                <div class="header-menu-mobile">
                    <img src="../assets/menu.svg" alt="menu">
                </div>
            </div>
            
        </div>
    </header>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.header{
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    position: absolute;
    width: 100%;
    z-index: 20;
	&-inner{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &-navigation{
        display: flex;
        justify-content: space-between;
        max-width: 543px;
        width: 100%;
    }

    &-button{
        background: rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        padding: 17px 30px;
    }

    &-menu-mobile{
        display: none;
    }
}

.link{
    text-decoration: none;
    cursor: pointer;
}

@media screen and (max-width: 955px){ 
    .header{
        &-navigation{
            display: none;
        }

        &-button{
            display: none;
        }

        &-menu-mobile{
            display: block;
        }
    }

    .logo{
        width: 70px;
    }
}
</style>