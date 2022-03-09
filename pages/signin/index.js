import React from 'react'
import { getCsrfToken } from "next-auth/react"
import { GrGithub, GrGoogle } from 'react-icons/gr'

export async function getServerSideProps(context) {
    const csrfToken = await getCsrfToken(context)
    return {
      props: { csrfToken },
    }
}

export default function SignInPage({ csrfToken }) {
  return (
    <div className='h-1/5'>
        <div>
          <div className="py-5 border-solid border-black border-b-[1px] border-opacity-20">
              <h1 className="text-xl text-[rgb(10, 40, 62)] font-medium">Iniciar sesión</h1>
          </div>
        </div>
        <div className='flex flex-col h-4/5 pt-28 justify-start items-center gap-10'>
          <form className='flex justify-center' action="/api/auth/signin/github" method="POST">
              <input name="csrfToken" type='hidden' defaultValue={csrfToken}/>
              <button className='flex items-center p-3 border-solid border-black border-2 rounded-md hover:bg-black hover:text-white duration-100' type="submit">
                <GrGithub size={40} className='inline-block'/>
                <span className='pl-2 text-xl'>Iniciar sesión con Github</span>
              </button>
          </form>
          <form className='flex justify-center' action='/api/auth/signin/google' method='POST'>
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              <button className='flex items-center p-3 border-solid border-black border-2 rounded-md hover:bg-black hover:text-white duration-100' type="submit">
                <GrGoogle size={40} className='inline-block' /> 
                <span className='pl-2 text-xl'>Iniciar sesión con Google</span>
              </button>
          </form>
        </div>
    </div>
  )
}