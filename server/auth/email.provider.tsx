import { nhost } from '@/lib/nhost'
import { toast } from 'sonner'

const EmailProvider = () = {
  async function signUp(email: string, password: string) {
    try {
      await nhost.auth.signUp(email, password)
    } catch (error) {
      console.error(error)
      toast.error('An error occurred while creating your account. Please try again.')
    }
  }

  async function signIn(email: string, password: string) {
    try {
      await nhost.auth.signIn(email, password)
    } catch (error) {
      console.error(error)
      toast.error('An error occurred while signing you in. Please try again.')
    }
  }

  return {
    signUp,
    signIn,
  }
}

export default EmailProvider
