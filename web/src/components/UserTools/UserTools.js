import { useAuth } from '@redwoodjs/auth'
import AuthProviderCardHeading from 'src/components/AuthProviderCardHeading'
import AuthResults from 'src/components/AuthResults'
import PollCurrentVersionCell from 'src/components/PollCurrentVersionCell'
import LogInOutButtons from '../LogInOutButtons/LogInOutButtons'
import Badge from 'src/components/Badge'

const UserTools = ({
  logInOptions = {},
  logOutOptions = {},
  signUpOptions = {},
}) => {
  const { isAuthenticated, loading, type } = useAuth()

  if (loading) {
    return 'Loading...'
  }

  return (
    <div>
      <Badge />
      {isAuthenticated && <PollCurrentVersionCell />}
      <LogInOutButtons
        logInOptions={logInOptions}
        logOutOptions={logOutOptions}
        signUpOptions={signUpOptions}
      />
      <br />
      <AuthResults />
    </div>
  )
}

export default UserTools
