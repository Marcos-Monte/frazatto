<template>

    <div class="contentBox">
        <main class="content">
            <h2>estamos lançando nosso site em breve</h2>
            <img src="@/assets/construction/logo.webp" alt="" class="wow animate__animated animate__bounceInLeft ">
            <form>
                <input 
                    type="email" 
                    placeholder="Insira o seu email aqui*" 
                    required
                    v-model="userEmail"
                />
                <b-button  @click="submitInput">participar</b-button>
            </form>
            <VueAlert
                :type="alert.type"
                :message="alert.message"
                :show="alert.show"
            />
        </main>
        <footer>
            <p>© 2025 por Frazatto Logística. Criação e desenvolvimento com Yan Vieira e Marcos Monte.</p>
        </footer>
    </div>

</template>

<script>
import VueAlert from '@/components/VueAlert.vue'
import http from '@/config'

export default {
    name: 'PageInConstruction',

    components: { VueAlert },

    data(){
        return {
            userEmail: '',
            alert: {
                type: '',
                message: '',
                show: false,
            }
        }
    },

    methods: {
        async submitInput(){

            if(!this.userEmail) {
                this.showAlert('danger', 'Insira um E-mail!')
                this.hiddenAlert()
                return
            } 

            const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.userEmail);

            if (!emailValido){
                console.log('E-mail inválido!')
                this.showAlert('danger', 'E-mail inválido!')
                this.hiddenAlert()
                return
            } 

            try {
                await http.post('/', {email: this.userEmail})
                this.userEmail = '',
                this.showAlert('success', 'E-mail cadastrado com sucesso!')
                this.hiddenAlert()

            } catch (error){
                console.error('Erro ao cadastrar o usuário: ', error)
                this.showAlert('danger', 'Não foi possível cadastrar o e-mail. Tente novamente!')
                this.hiddenAlert()
            }

        },

        hiddenAlert(){
            setTimeout(() => {
                this.alert.show = false
            }, 3000)
        },

        showAlert(type, message){
            this.alert = {
                type: type,
                show: true,
                message: message
            }
        }
    }
}
</script>

<style scoped lang="scss">

    .contentBox {
        background-image: url('@/assets/construction/background.webp');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 100vh;
        width: 100vw;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        &::before {
            content: '';
            position: absolute;
            background-color: var(--light) ;
            opacity: .6;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
        }

        .content {
            z-index: 2;
            max-width: 1042px;

            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 3rem;

            h2 {
                font-size: 2rem;
                color: var(--gray);
                text-transform: uppercase;
                font-weight: 500;
                text-align: center;
                //text-shadow: .2rem .3rem .3rem var(--dark);
            }

            img, form {
                width: 100%;
            }

            form {
                height: 4rem;
                text-align: center;
                margin-top: 3rem;

                input {
                    width: 600px;
                    height: 100%;
                    background-color: var(--dark);
                    opacity: .4;
                    border: none;
                    padding: .5rem;
                    margin-right: 1rem;
                    color: var(--light);

                    &::placeholder {
                        color: var(--light);
                        font-size: 1.5rem;
                        font-weight: 500;
                    }
                }

                button {
                    height: 100%;
                    background-color: var(--primaryColor);
                    color: var(--light);
                    text-transform: capitalize;
                    font-size: 1.5rem;
                    border: none;
                    font-weight: 500;

                    &:hover{
                        background-color: var(--gray);
                        color: var(--secondaryColor) !important;
                    }
                }
                
            }

            
        }

        footer {
            width: 100%;
            height: 10%;
            z-index: 80000;
            display: flex;
            justify-content: center;
            align-items: center;

            p {
                color: var(--dark);
                text-align: center;
            }
        }
    }

@media(max-width: 769px){
    .contentBox{
    }
    .content {
        padding: 0 2rem;
        justify-content: center !important;
        gap: 1rem !important;
        //background-color: red;
        
        h2 {
            font-size: 1.2rem !important;
        }
        form {
            height: 3.5rem !important;
            input {
                width: 100% !important;
                margin-left: 0;
                margin-bottom: 1rem;

                &::placeholder {
                    font-size: 1.2rem !important;
                }
            }
            button {
                width: 200px;
                font-size: 1.2rem !important;
            }
        }
    }

    footer{
        p {
            font-size: .8rem !important;
        }
    }
}
</style>