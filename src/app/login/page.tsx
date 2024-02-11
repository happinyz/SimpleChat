'use client'

import styles from './styles.module.css'
import { useForm } from 'react-hook-form';
import {
	onAuthStateChanged,
  signUpWithEmail,
  login,
  logout,
} from "@/lib/firebase/auth";


export default function Page() {

  const { register, handleSubmit } = useForm();

  // const handleSignup = ({email, password}) => {
  //   // alert(JSON.stringify(formData))
  //   signUpWithEmail(email, password);
  // }

  const handleSignup = () => {
    return;
  }

  return (
    <div className={styles.login}>
      <header>Login to AlvinChat</header>
      <form className={styles.inputWrapper} onSubmit={handleSubmit(handleSignup)}>
        <input
          className={styles.input}
          placeholder="Email"
          {...register("email")} 
        />
        <input
          className={styles.input}
          placeholder="Password"
          type="password" 
          {...register("password")}
        />
        <input type="submit" value="Signup" />
      </form>
    </div>
  )
}
