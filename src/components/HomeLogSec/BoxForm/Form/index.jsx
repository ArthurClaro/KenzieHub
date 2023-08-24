import { useForm } from "react-hook-form"
import { useContext } from "react";
import { ExampleContext } from "../../../../providers/UserContext";
import styles from './style.module.scss'

function FormGo() {

    const { register, handleSubmit } = useForm();

    const { userLogin } = useContext(ExampleContext)

    const subtmit = (formData) => {
        console.log(formData)
        userLogin(formData)
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit(subtmit)}>
                <label className="text label" htmlFor="email">Email</label>
                <input className="input" type="email" id="email" {...register('email')} placeholder="Digite seu e-mail" required />

                <label className="text label" htmlFor="password">Senha</label>
                <input className="input" type="password" id="password" {...register('password')} placeholder="Digite sua senha" required />

                <button className="log" type="submit">Entrar</button>
            </form>
        </>
    )
}
export default FormGo
