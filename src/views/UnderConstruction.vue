<template>

    <div class="contentBox">
        <main class="content">
            <h2>estamos lançando nosso site em breve</h2>
            <img src="@/assets/construction/logo.webp" alt="">
            <form>
                <input 
                    type="email" 
                    placeholder="Insira o seu email aqui*" 
                    required
                    v-model="userEmail"
                />
                <button type="button" @click="submitInput">participar</button>
            </form>
        </main>
        <footer>
            <p>© 2025 por Frazatto Logística. Criação e desenvolvimento com Yan Vieira e Marcos Monte.</p>
        </footer>
    </div>

</template>

<script>
import http from '@/config'
export default {
    name: 'PageInConstruction',
    data(){
        return {
            userEmail: '',
        }
    },

    methods: {
        async submitInput(){

            if(!this.userEmail) {
                console.log('Não foi cadastrado nenhum email')
                return
            } 
            const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.userEmail);

            if (!emailValido){
                console.log('E-mail inválido!')
                return
            } 
            try {
                await http.post('/', {email: this.userEmail})
                this.userEmail = '',

                console.log(`Usuario ${this.userEmail} cadastrado com sucesso!`)
            } catch (error){
                console.error('Erro ao cadastrar o usuário: ', error)
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
                //text-shadow: .2rem .3rem .3rem var(--dark);
            }

            img, form {
                width: 100%;
            }

            form {
                height: 4rem;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                flex-wrap: wrap;
                margin-top: 3rem;

                input {
                    width: 60%;
                    height: 100%;
                    background-color: var(--dark);
                    opacity: .4;
                    border: none;
                    padding: .5rem;
                    color: var(--light);

                    &::placeholder {
                        color: var(--light);
                        font-size: 1.5rem;
                        font-weight: 500;
                    }
                }

                button {
                    width: 15%;
                    height: 100%;
                    background-color: var(--primary);
                    color: var(--light);
                    text-transform: capitalize;
                    font-size: 1.5rem;
                    border: none;
                    font-weight: 500;

                    &:hover{
                        background-color: var(--gray);
                        color: var(--secondary)
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

// @media screen (max-width: 769px){

// }
</style>