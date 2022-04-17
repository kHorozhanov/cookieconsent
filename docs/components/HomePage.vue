<script>
import { JsIcon, RightArrow } from "./icons.js";

export default{
    data(){
        return {
            JsIcon,
            RightArrow
        }
    }
}

</script>

<template>
    <section class="c-header">
        <h1 class="c-header__title">CookieConsent</h1>
        <h2 class="c-header__description">A lightweight and GDPR compliant consent Plugin</h2>
        <div class="c-header__actions">
            <a href="/essential/getting-started" class="c-action c-action--primary">
                <span>Getting Started</span>
                <span class="right-arrow" v-html="RightArrow"></span>
            </a>
            <a href="/essential/introduction.html" class="c-action c-action--secondary">Is this for you?</a>
        </div>
    </section>

    <section class="max-width c-blocks">
        <div class="c-block">
            <h3 class="c-block__title">
                <span class="c-block__title-icon" v-html="JsIcon"></span>
                <span>Lightweight</span>
            </h3>
            <p class="c-block__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
        </div>
        <div class="c-block">
            <h3 class="c-block__title">
                <span class="c-block__title-icon" v-html="JsIcon"></span>
                <span>Vanilla JS</span>
            </h3>
            <p class="c-block__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
        </div>
        <div class="c-block">
            <h3 class="c-block__title">
                <span class="c-block__title-icon" v-html="JsIcon"></span>
                <span>Flexible</span>
            </h3>
            <p class="c-block__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
        </div>
    </section>

    <section class="max-width c-blocks">
        <div class="c-block">
            <h3 class="c-block__title">
                <span class="c-block__title-icon" v-html="JsIcon"></span>
                <span>GDPR Compliant</span>
            </h3>
            <p class="c-block__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
        </div>
        <div class="c-block">
            <h3 class="c-block__title">
                <span class="c-block__title-icon" v-html="JsIcon"></span>
                <span>Accessible</span>
            </h3>
            <p class="c-block__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
        </div>
        <div class="c-block">
            <h3 class="c-block__title">
                <span class="c-block__title-icon" v-html="JsIcon"></span>
                <span>Customizable</span>
            </h3>
            <p class="c-block__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
        </div>
    </section>

    <section class="c-footer__container">
        <div class="max-width">
            <footer class="c-footer">
                <p>Released under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License.</a></p>
                <p>Copyright © 2019-{{ new Date().getFullYear() }} Orest Bida</p>
            </footer>
        </div>
    </section>

</template>

<style>

    .home-content{
        margin: 0!important;
        max-width: none!important;
        padding: 0!important;
    }
    .c-header * {
        margin: 0;
        padding: 0;
        border: none;
    }
    .c-header{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 96px 32px;
    }

    .max-width{
        display: flex;
        flex-direction: row;
        max-width: 960px;
        margin: 0 auto;
        padding: 0 1.5rem;
    }

    .c-header__title{
        background: -webkit-linear-gradient(315deg,#f1b867 25%,#f9635c);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 4.5em;
        font-weight: 700;
    }

    .c-header__description{
        margin-top: 1rem;
        color: #C1CCD4;
        font-size: 1.4em;
    }

    .c-header__actions{
        margin-top: 3rem;
        display: flex;
        flex-direction: row;
    }

    .c-action{
        background-color: var(--c-brand);
        border-radius: 7px;
        padding: 0.6em 1.4em;
        color: #000;
        font-weight: 600;
        border: 2px solid var(--c-brand);
        display: flex;
        flex-direction: row;
        align-items: center;
        transition: background-color .2s ease, border-color .2s ease;
    }

    .c-action:hover{
        background-color: #bb9257;
        border-color: #bb9257;
    }

    .c-action span{
        display: flex;
    }

    .c-action--primary{
        margin-right: 15px;
    }

    .right-arrow{
        margin-left: .5em;
        transition: transform .2s ease;
    }

    .c-action:hover .right-arrow{
        transform: translateX(4px);
    }

    .c-action--secondary{
        background-color: #2a2d31;
        color: #e3d6c0;
        border-color: #2a2d31;
    }

    .c-action--secondary:hover{
        background-color: #35393c;
        border-color: #35393c;
    }

    .c-blocks{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
    }

    .c-block{
        padding: 1.5rem 1.5rem;
        height: 180px;
        background-color: #16181B;
        border-radius: 6px;
        flex: 1;
    }

    .c-block__title{
        font-size: 1.25em;
        display: flex;
        align-items: center;
    }

    .c-block__title span{
        display: flex;
    }

    .c-block__title-icon{
        margin-right: .5em;
    }

    .c-block__title,
    .c-block__desc{
        margin: 0;
    }

    .c-block__title{
        margin-bottom: 1rem;
        color: #BBC7CF;
    }

    .c-block__desc{
        color: #8C99A1;
    }

    .c-footer__container{
        border-top: 1px solid var(--c-divider);
        display: flex;
        margin-top: 100px;
        padding: 1.5rem;
        font-size: .88em;
    }

    .c-footer *{
        margin: 0;
        padding: 0;
    }

    .c-footer p{
        color: #7E878D;
    }

    .c-footer a{
        color: #B6BFC5;
    }

    .c-footer{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>